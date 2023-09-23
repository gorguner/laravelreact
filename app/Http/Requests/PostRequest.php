<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class PostRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array|string>
     */
    public function rules(): array
    {
        return [
            'order_column' => 'sometimes|required|string|in:id,title',
            'order_direction' => 'sometimes|required|string|in:asc,desc',
            'category_id' => 'sometimes|required|integer|exists:categories,id'
        ];
    }
}
