<?php

namespace App\Http\Requests\Admin;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Http\Request;

class AdminUserRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, mixed>
     */
    public function rules()
    {
        if ($this->isMethod('post')) {
            return [
                'name' => ['required', 'string', 'min:3'],
                'status' => ['required'],
                'username' => ['required', 'string', 'min:3', 'unique:users,username'],
                'address' => ['required', 'string', 'min:3'],
                'email' => ['required', 'string', 'min:3', 'unique:users,email'],
                'number_phone' => ['numeric', 'required', 'min:3', 'unique:users,number_phone'],
                'password' => ['required', 'string', 'min:8', 'confirmed'],
                'picture' => ['nullable', 'mimes:png,jpg,jpeg', 'image'],
            ];
        }

        if ($this->isMethod('put') || $this->isMethod('patch')) {
            $employeeId = $this->route('employee');
            return [
                'status' => ['required'],
                'name' => ['required', 'string', 'min:3'],
                'username' => ['required', 'string', 'min:3', 'unique:users,username'],
                'address' => ['required', 'string', 'min:3'],
                "email" => ['required', 'string', 'min:3', 'unique:users,email,' . $employeeId->id],
                "number_phone" => ['numeric', 'required', 'min:3', 'unique:users,<number_phone></number_phone>,' . $employeeId->id],
                'password' => ['nullable', 'string', 'min:8', 'confirmed'],
                'picture' => ['nullable', 'mimes:png,jpg, jpeg', 'image'],
            ];
        }
    }
}
