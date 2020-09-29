<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\PagesController;

Route::get('/', [PagesController::class, 'inicio']);

Route::get('welcome', [PagesController::class, 'buscador']);