<?php

namespace App\Http\Requests\Admin;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Http\Request;
use Illuminate\Validation\Rule;  // Perlu mengimpor Rule dari Illuminate\Validation

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
        if ($this->isMethod('put') || $this->isMethod('patch')) {
            $userId = $this->route('user');
            return [
                "picture" => ['nullable', 'mimes:png,jpg,jpeg', 'image'],
                'name' => ['required', 'string', 'min:3'],
                'username' => ['required', 'string', 'min:3', Rule::unique('users')->ignore($userId)],
                'address' => ['required', 'string', 'min:3'],
                'email' => [
                    'required',
                    'string',
                    'min:3',
                    Rule::unique('users')->ignore($userId),
                ],
                'number_phone' => ['numeric', 'required', 'min:3', Rule::unique('users')->ignore($userId)],
                'status' => ['nullable'],
            ];
        }

        return [
            "picture" => ['nullable', 'mimes:png,jpg,jpeg', 'image'],
            'name' => ['required', 'string', 'min:3'],
            'username' => ['required', 'string', 'min:3', 'unique:users,username'],
            'address' => ['required', 'string', 'min:3'],
            'email' => [
                'required',
                'string',
                'min:3', 'unique:users,email',
            ],
            'number_phone' => ['numeric', 'required', 'min:3', 'unique:users,number_phone'],
            'status' => ['required'],
        ];
    }
}
