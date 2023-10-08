<?php

use App\Http\Controllers\Admin\AdminActivityController;
use App\Http\Controllers\Admin\AdminAttendaceController;
use App\Http\Controllers\Admin\AdminCartController;
use App\Http\Controllers\Admin\AdminCategoryController;
use App\Http\Controllers\Admin\AdminDashboardController;
use App\Http\Controllers\Admin\AdminInvoiceController;
use App\Http\Controllers\Admin\AdminPaymentController;
use App\Http\Controllers\Admin\AdminPresenceController;
use App\Http\Controllers\Admin\AdminProductController;
use App\Http\Controllers\Admin\AdminScheduleController;
use App\Http\Controllers\Admin\AdminTableController;
use App\Http\Controllers\Admin\AdminTransactionController;
use App\Http\Controllers\Admin\AdminUserController;
use App\Http\Controllers\Admin\SendEmailController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\ProfileController;
use Illuminate\Support\Facades\Route;

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
// Home
Route::get('/', [HomeController::class, 'index'])->name('home.index');

// Admin
Route::prefix('admin')->middleware('role:owner|admin|employee', 'auth')->group(function () {

    // Admin Profile
    Route::controller(ProfileController::class)->group(function () {
        Route::get('/profile',  'edit')->name('profile.edit')->can('profile_edit');
        Route::patch('/profile',  'update')->name('profile.update')->can('profile_update');
        Route::delete('/profile',  'destroy')->name('profile.destroy')->can('profile_destroy');
    });

    // Admin Dashboard
    Route::get('/dashboard', AdminDashboardController::class)->name('admin.dashboard')->can('dashboard');

    // Admin Transaction
    Route::get('/transaction', [AdminTransactionController::class, 'index'])->name('admin.transaction')->can('transaction');

    // Admin Category
    Route::controller(AdminCategoryController::class)->group(function () {
        Route::get('/setting/category', 'index')->name('admin.category.index')->can('category_index');
        Route::post('/setting/category', 'store')->name('admin.category.store')->can('category_store');
        Route::put('/setting/{category:slug}/category', 'update')->name('admin.category.update')->can('category_update');
        Route::delete('/setting/category/{category:slug}', 'destroy')->name('admin.category.destroy')->can('category_destroy');
    });

    // Admin Table
    Route::controller(AdminTableController::class)->group(function () {
        Route::get('/setting/table', 'index')->name('admin.table.index')->can('table_index');
        Route::post('/setting/table', 'store')->name('admin.table.store')->can('table_store');
        Route::put('/setting/{table:slug}/table', 'update')->name('admin.table.update')->can('table_update');
        Route::delete('/setting/table/{table:slug}', 'destroy')->name('admin.table.destroy')->can('table_destroy');
    });

    // Admin Payment
    Route::controller(AdminPaymentController::class)->group(function () {
        Route::get('/setting/payment', 'index')->name('admin.payment.index')->can('payment_index');
        Route::post('/setting/payment', 'store')->name('admin.payment.store')->can('payment_store');
        Route::put('/setting/{payment:slug}/payment', 'update')->name('admin.payment.update')->can('payment_update');
        Route::delete('/setting/payment/{payment:slug}', 'destroy')->name('admin.payment.destroy')->can('payment_destroy');
    });

    // Admin Schedule
    Route::controller(AdminScheduleController::class)->group(function () {
        Route::get('/setting/schedule', 'index')->name('admin.schedule.index')->can('schedule_index');
        Route::post('/setting/schedule', 'store')->name('admin.schedule.store')->can('schedule_store');
        Route::put('/setting/{schedule}/schedule', 'update')->name('admin.schedule.update')->can('schedule_update');
        Route::delete('/setting/schedule/{schedule}', 'destroy')->name('admin.schedule.destroy')->can('schedule_destroy');
    });

    // Admin Employee
    Route::controller(AdminUserController::class)->group(function () {
        Route::get('/setting/employee', 'index')->name('admin.employee.index')->can('employee_index');
        Route::post('/setting/employee', 'store')->name('admin.employee.store')->can('employee_store');
        Route::put('/setting/employee/{user:username}', 'update')->name('admin.employee.update')->can('employee_update');
        Route::delete('/setting/employee/{user:username}', 'destroy')->name('admin.employee.destroy')->can('employee_destroy');
    });

    // Admin Product
    Route::controller(AdminProductController::class)->group(function () {
        Route::get('/setting/product', 'index')->name('admin.product.index')->can('product_index');
        Route::post('/setting/product', 'store')->name('admin.product.store')->can('product_store');
        Route::put('/setting/product/{product:slug}', 'update')->name('admin.product.update')->can('product_update');
        Route::delete('/setting/product/{product:slug}', 'destroy')->name('admin.product.destroy')->can('product_destroy');
    });

    // Admin Cart
    Route::controller(AdminCartController::class)->group(function () {
        Route::delete('/cart/{cart}', 'destroy')->name('admin.cart.delete')->can('cart_destroy');
        Route::post('/cart/{product:slug}', 'store')->name('admin.cart.store')->can('cart_store');
        Route::post('/cart/increment/{product:slug}', 'increment')->name('admin.cart.increment')->can('cart_increment');
        Route::post('/cart/decrement/{product:slug}', 'decrement')->name('admin.cart.decrement')->can('cart_decrement');
    });

    // Admin Invoice
    Route::controller(AdminInvoiceController::class)->group(function () {
        Route::get('/invoice', 'index')->name('admin.invoice.index')->can('invoice_index');
        Route::post('/invoice', 'store')->name('admin.invoice.store')->can('invoice_store');
        Route::put('/invoice/{invoice:order_id}', 'update')->name('admin.invoice.update')->can('invoice_update');
    });

    // Admin Log
    Route::get('/activity', [AdminActivityController::class, 'index'])->name('admin.activity.index')->can('activity_index');

    // Admin Presence
    Route::controller(AdminPresenceController::class)->group(function () {
        Route::get('/presence', 'index')->name('admin.presence.index')->can('presence_index');
        Route::post('/presence', 'store')->name('admin.presence.store')->can('presence_store');
    });

    // Admin Attendace
    Route::get('/attendace', [AdminAttendaceController::class, 'index'])->name('admin.attendace.index')->can('attendace_index');

    //  Send Email
    Route::post('/send-email', [SendEmailController::class, 'index'])->name('admin.send.email')->can('send_email');
});

require __DIR__ . '/auth.php';
