<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\Admin\AdminUserRequest;
use App\Http\Resources\Admin\AdminUserResource;
use App\Models\Activity;
use App\Models\User;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Collection;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;

class AdminUserController extends Controller
{
    public function index()
    {

        $total_employee = User::where('status', 'employee')->get()->count();
        $users = User::query()
            ->select('id', 'name', 'username', 'email', 'number_phone', 'address', 'status', 'picture')
            ->where('status', 'employee')
            ->latest()
            ->fastPaginate();
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
        $user->update([
            "name" => $name = $request->name ?: $user->name,
            "username" => $request->username ?: $user->username,
            "email" => $request->email ?: $user->email,
            "number_phone" => $request->number_phone ?: $user->number_phone,
            "address" => $request->address ?: $user->address,
            "status" => $request->status ? $request->status : $user->status,
            "password" => $user->password,
            "picture" => $request->hasFile('picture') ? $picture->storeAs('images/employees', $name . '.' . $picture->extension()) : $user->picture
        ]);

        Activity::create([
            "activity" => Auth::user()->name . " Updated Employee " . $request->name ? : $user->name
        ]);

        return back();
    }


    public function destroy(User $user)
    {
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
