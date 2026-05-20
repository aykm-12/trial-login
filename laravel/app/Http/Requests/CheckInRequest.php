<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class CheckInRequest extends FormRequest
{
    public function authorize(): bool
    {
        return true;
    }

    public function rules(): array
    {
        return [
            'intern_id' => ['required', 'integer', 'exists:interns,id'], // カラム名とテーブル名を変更
        ];
    }
}
