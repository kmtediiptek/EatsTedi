<?php

namespace App\Http\Requests\Admin;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class AdminProductRequest extends FormRequest
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
            return [
                'name' => ['required', 'string', 'min:3'],
                'price' => ['required', 'numeric', 'min:3'],
                'category_id' => ['nullable'],
                'supplier_id' => ['nullable'],
            ];
        }

        return [
            'picture' => ['nullable', 'mimes:png,jpg,jpeg', 'image', 'max:2048'],
            'name' => ['required', 'string', 'min:3'],
            'price' => ['required', 'numeric', 'min:3'],
            'category_id' => ['required'],
            'supplier_id' => ['required'],
        ];
    }
}