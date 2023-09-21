<?php

use App\Http\Controllers\Admin\AdminCategoryController;
use App\Http\Controllers\Admin\AdminDashboardController;
use App\Http\Controllers\Admin\AdminTableController;
use App\Http\Controllers\Admin\AdminTransactionController;
use App\Http\Controllers\Admin\AdminUserController;
use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

// Route::get('/dashboard', function () {
//     return Inertia::render('Dashboard');
// })->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});


// Admin
Route::prefix('admin')->middleware('auth')->group(function() {
    // Dashboard
    Route::get('/dashboard', AdminDashboardController::class)->name('admin.dashboard');

    // Transaction
    Route::get('/transaction', [AdminTransactionController::class, 'index'])->name('admin.transaction');

    // Admin Category
    Route::get('/setting/category', [AdminCategoryController::class, 'index'])->name('admin.category.index');
    Route::post('/setting/category', [AdminCategoryController::class, 'store'])->name('admin.category.store');
    Route::put('/setting/{category:slug}/category', [AdminCategoryController::class, 'update'])->name('admin.category.update');
    Route::delete('/setting/category/{category:slug}', [AdminCategoryController::class, 'destroy'])->name('admin.category.destroy');

    // Admin Table
    Route::get('/setting/table', [AdminTableController::class, 'index'])->name('admin.table.index');
    Route::post('/setting/table', [AdminTableController::class, 'store'])->name('admin.table.store');
    Route::put('/setting/{table:slug}/table', [AdminTableController::class, 'update'])->name('admin.table.update');
    Route::delete('/setting/table/{table:slug}', [AdminTableController::class, 'destroy'])->name('admin.table.destroy');

    // Admin Table
    Route::get('/setting/employee', [AdminUserController::class, 'index'])->name('admin.employee.index');
    Route::post('/setting/employee', [AdminUserController::class, 'store'])->name('admin.employee.store');
    Route::put('/setting/{employee:username}/employee', [AdminUserController::class, 'update'])->name('admin.employee.update');
    Route::delete('/setting/employee/{employee:username}', [AdminUserController::class, 'destroy'])->name('admin.employee.destroy');
});

require __DIR__.'/auth.php';
