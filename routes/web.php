<?php

use App\Http\Controllers\Admin\AdminCartController;
use App\Http\Controllers\Admin\AdminCategoryController;
use App\Http\Controllers\Admin\AdminDashboardController;
use App\Http\Controllers\Admin\AdminInvoiceController;
use App\Http\Controllers\Admin\AdminPaymentController;
use App\Http\Controllers\Admin\AdminProductController;
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
Route::prefix('admin')->middleware('auth')->group(function () {
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
    Route::get('/setting/payment', [AdminPaymentController::class, 'index'])->name('admin.payment.index');
    Route::post('/setting/payment', [AdminPaymentController::class, 'store'])->name('admin.payment.store');
    Route::put('/setting/{payment:slug}/payment', [AdminPaymentController::class, 'update'])->name('admin.payment.update');
    Route::delete('/setting/payment/{payment:slug}', [AdminPaymentController::class, 'destroy'])->name('admin.payment.destroy');

    // Admin Employee
    Route::get('/setting/employee', [AdminUserController::class, 'index'])->name('admin.employee.index');
    Route::post('/setting/employee', [AdminUserController::class, 'store'])->name('admin.employee.store');
    Route::put('/setting/employee/{user:username}', [AdminUserController::class, 'update'])->name('admin.employee.update');
    Route::delete('/setting/employee/{user:username}', [AdminUserController::class, 'destroy'])->name('admin.employee.destroy');

    // Admin Product
    Route::get('/setting/product', [AdminProductController::class, 'index'])->name('admin.product.index');
    Route::post('/setting/product', [AdminProductController::class, 'store'])->name('admin.product.store');
    Route::put('/setting/product/{product:slug}', [AdminProductController::class, 'update'])->name('admin.product.update');
    Route::delete('/setting/product/{product:slug}', [AdminProductController::class, 'destroy'])->name('admin.product.destroy');

    // Admin Cart
    Route::controller(AdminCartController::class)->group(function () {
        Route::delete('/cart/{cart}', 'destroy')->name('admin.cart.delete');
        Route::post('/cart/{product:slug}', 'store')->name('admin.cart.store');
        Route::post('/cart/increment/{product:slug}', 'increment')->name('admin.cart.store');
        Route::post('/cart/decrement/{product:slug}', 'decrement')->name('admin.cart.store');
    });

    // Admin Invoice
    Route::get('/invoice', [AdminInvoiceController::class, 'index'])->name('admin.invoice.index');
    Route::post('/invoice', [AdminInvoiceController::class, 'store'])->name('admin.invoice.store');
    Route::put('/invoice/{invoice}', [AdminInvoiceController::class, 'update'])->name('admin.invoice.update');
    Route::delete('/invoice/{invoice}', [AdminInvoiceController::class, 'destroy'])->name('admin.invoice.destroy');
});

require __DIR__ . '/auth.php';
