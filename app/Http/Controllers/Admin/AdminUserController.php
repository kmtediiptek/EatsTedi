<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\Admin\AdminTableRequest;
use App\Http\Requests\Admin\AdminUserRequest;
use App\Http\Requests\ProfileUpdateRequest;
use App\Http\Resources\Admin\AdminUserResource;
use App\Models\Activity;
use App\Models\Cart;
use App\Models\User;
use Illuminate\Support\Facades\Storage;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;

class AdminUserController extends Controller
{
    public function index(Request $request)
    {

        $total_employee = User::where('status', 'employee')->get()->count();

        $search_users = $request->input('search');
        if ($search_users) {
            $users = User::query()
                ->where('name', 'LIKE', "%$search_users%")
                ->select('id', 'name', 'username', 'email', 'number_phone', 'address', 'status', 'picture', 'is_active')
                ->where('status', 'employee')
                ->latest()
                ->fastPaginate(10)->withQueryString();
        } else {
            $users = User::query()
                ->select('id', 'name', 'username', 'email', 'number_phone', 'address', 'status', 'picture', 'is_active')
                ->where('status', 'employee')
                ->latest()
                ->fastPaginate();
        }

        return inertia('Admin/Employee/Index', [
            "employees" => AdminUserResource::collection($users),
            "total_employees" => $total_employee,
        ]);
    }

    public function store(AdminUserRequest $request)
    {
        $picture = $request->file('picture');
        User::create([
            "name" => $name = $request->name,
            "username" => $request->username,
            "email" => $request->email,
            "number_phone" => $request->number_phone,
            "address" => $request->address,
            "status" => $request->status,
            "password" => Hash::make("randa091100"),
            'is_active' => $request->is_active == 1 ? true : ($request->is_active == 0 ? false : null),
            "picture" => $request->hasFile('picture') ? $picture->storeAs('images/employees', $name . '.' . $picture->extension()) : null
        ]);

        Activity::create([
            "activity" => Auth::user()->name . " Added Employee " . $request->name
        ]);

        return back();
    }


    public function update(AdminUserRequest $request, User $user)
    {
        $picture = $request->file('picture');
        if ($picture) {
            $request->validate([
                'picture' => ['nullable', 'mimes:png,jpg,jpeg', 'image', 'max:2048'],
            ]);
        }

        $user->update([
            "name" => $name = $request->name ?: $user->name,
            "username" => $request->username ?: $user->username,
            "email" => $request->email ?: $user->email,
            "number_phone" => $request->number_phone ?: $user->number_phone,
            "address" => $request->address ?: $user->address,
            "status" => $request->status ? $request->status : $user->status,
            'is_active' => $request->is_active == 1 ? true : ($request->is_active == 0 ? false : $user->is_active),
            "picture" => $request->hasFile('picture') ? $picture->storeAs('images/employees', $name . '.' . $picture->extension()) : $user->picture
        ]);

        Activity::create([
            "activity" => Auth::user()->name . " Updated Employee " . $request->name ?: $user->name
        ]);

        return back();
    }


    public function destroy(User $user)
    {
        if ($user->carts()->count() > 0 || $user->invoices()->count() > 0) {
            $user->update([
                "is_active" => false,
            ]);
            return false;
        } else {
            if ($user->picture) {
                Storage::delete($user->picture);
            }

            Activity::create([
                "activity" => Auth::user()->name . " Deleted Employee " . $user->name
            ]);

            $user->delete();
            return back();
        }
    }
}
