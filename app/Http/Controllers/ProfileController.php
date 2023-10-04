<?php

namespace App\Http\Controllers;

use App\Http\Requests\ProfileUpdateRequest;
use App\Http\Resources\Admin\AdminUserResource;
use App\Models\User;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Support\Facades\Storage;
use Inertia\Response;

class ProfileController extends Controller
{
    /**
     * Display the user's profile form.
     */
    public function edit(Request $request): Response
    {
        $pic = Auth::user()->picture ? Storage::url(Auth::user()->picture) : "";
        return inertia('Profile/Edit', [
            'mustVerifyEmail' => $request->user() instanceof MustVerifyEmail,
            'status' => session('status'),
            'picture' => $pic
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
            "name" => $name = $request->name ?: Auth::user()->name,
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
