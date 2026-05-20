<?php
namespace App\Services\UseCases;

use App\Models\Intern;
use Illuminate\Database\Eloquent\Collection;

class GetInternListUseCase
{
    public function execute(): Collection
    {
        return Intern::all();
    }
}
