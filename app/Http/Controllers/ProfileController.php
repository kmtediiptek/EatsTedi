<?php

namespace App\Http\Controllers;

use App\Http\Requests\ProfileUpdateRequest;
use App\Models\Invoice;
use App\Models\Salary;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Redirect;
use Inertia\Response;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Storage;
use Carbon\Carbon;

class ProfileController extends Controller
{
    /**
     * Display the user's profile form.
     */
    public function edit(Request $request): Response
    {
        $dailySalary = Salary::select(
            DB::raw('YEAR(transaction_date) as year'),
            DB::raw('MONTHNAME(transaction_date) as month'),
            \DB::raw('DATE(transaction_date) as date'),
        )
            ->groupBy('year', 'date')
            ->groupBy('month', 'date')
            ->orderBy('date', 'asc')
            ->get();

            if (Auth::user()->status == "owner") {
                $total_salary = Invoice::sum('total_price');
            }else {
                $total_salary = Salary::where('user_id', auth()->user()->id)
                ->whereMonth('created_at', Carbon::now()->month)  // Modify this line to filter by the current month
                ->sum('total_salary');

            }

        $pic = Auth::user()->picture ? Storage::url(Auth::user()->picture) : "";
        return inertia('Profile/Edit', [
            'mustVerifyEmail' => $request->user() instanceof MustVerifyEmail,
            'status' => session('status'),
            'picture' => $pic,
            "dailySalary" => $dailySalary,
            "total_salary" => $total_salary,
        ]);
    }

    /**
     * Update the user's profile information.
     */
    public function update(ProfileUpdateRequest $request): RedirectResponse
    {
        $picture = $request->file('picture');
        if ($request->user()->isDirty('email')) {
            $request->user()->email_verified_at = null;
        }
        $picture = $request->file('picture');
        $request->user()->update([
            "name" => $request->name ?: Auth::user()->name,
            "username" => $username = $request->username ?: Auth::user()->username,
            "email" => $request->email ?: Auth::user()->email,
            "number_phone" => $request->number_phone ?: Auth::user()->number_phone,
            "address" => $request->address ?: Auth::user()->address,
            "status" => $request->status ? $request->status : Auth::user()->status,
            "picture" => $request->hasFile('picture') ? $picture->storeAs('images/employees', $username . '.' . $picture->extension()) : Auth::user()->picture
        ]);



        return Redirect::route('profile.edit');
    }

    /**
     * Delete the user's account.
     */
    public function destroy(Request $request): RedirectResponse
    {
        $request->validate([
            'password' => ['required', 'current-password'],
        ]);

        $user = $request->user();

        Auth::logout();

        $user->delete();

        $request->session()->invalidate();
        $request->session()->regenerateToken();

        return Redirect::to('/');
    }
}
