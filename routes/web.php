<?php

use App\Http\Controllers\Admin\AdminActivityController;
use App\Http\Controllers\Admin\AdminCartController;
use App\Http\Controllers\Admin\AdminCategoryController;
use App\Http\Controllers\Admin\AdminDailyMenuController;
use App\Http\Controllers\Admin\AdminDashboardController;
use App\Http\Controllers\Admin\AdminInvoiceController;
use App\Http\Controllers\Admin\AdminLaporanController;
use App\Http\Controllers\Admin\AdminPaymentController;
use App\Http\Controllers\Admin\AdminProductController;
use App\Http\Controllers\Admin\AdminRekapController;
use App\Http\Controllers\Admin\AdminScheduleController;
use App\Http\Controllers\Admin\AdminSupplierController;
use App\Http\Controllers\Admin\AdminTransactionController;
use App\Http\Controllers\Admin\AdminUserController;
use App\Http\Controllers\Admin\SendEmailController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\ProfileController;
use Illuminate\Support\Facades\Route;

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
        Route::delete('/setting/employee/{user:username}', 'destroy')->name('admin.employee.destroy')->can('employee_destroy');
    });

    // Admin Employee
    Route::controller(AdminSupplierController::class)->group(function () {
        Route::get('/setting/supplier', 'index')->name('admin.supplier.index');
        Route::post('/setting/supplier', 'store')->name('admin.supplier.store');
        Route::put('/setting/supplier/{supplier:username}', 'update')->name('admin.supplier.update');
        Route::delete('/setting/supplier/{supplier}', 'destroy')->name('admin.supplier.destroy');
    });

    // Admin Product
    Route::controller(AdminProductController::class)->group(function () {
        Route::get('/setting/product', 'index')->name('admin.product.index')->can('product_index');
        Route::post('/setting/product', 'store')->name('admin.product.store')->can('product_store');
        Route::put('/setting/product/{product:slug}', 'update')->name('admin.product.update')->can('product_update');
        Route::delete('/setting/product/{product:slug}', 'destroy')->name('admin.product.destroy')->can('product_destroy');
    });

    // Admin Daily Menu
    Route::controller(AdminDailyMenuController::class)->group(function () {
        Route::get('/setting/product/today', 'index')->name('admin.product.today.index');
        Route::post('/setting/product/update-stock', 'update_stock')->name('admin.product.today.update_stock');
        Route::post('/setting/product/reset-stock', 'reset_stock')->name('admin.product.today.reset_stock');
    });

    // Admin Cart
    Route::controller(AdminCartController::class)->group(function () {
        Route::delete('/cart/{product:slug}', 'destroy')->name('admin.cart.delete')->can('cart_destroy');
        Route::post('/cart/{product:slug}', 'store')->name('admin.cart.store')->can('cart_store');
        Route::post('/cart/increment/{product:slug}', 'increment')->name('admin.cart.increment')->can('cart_increment');
        Route::post('/cart/decrement/{product:slug}', 'decrement')->name('admin.cart.decrement')->can('cart_decrement');
        Route::post('/cart/quantity/{product:slug}', 'quantity')->name('admin.cart.quantity')->can('cart_increment');
    });

    // Admin Invoice
    Route::controller(AdminInvoiceController::class)->group(function () {
        Route::get('/invoice', 'index')->name('admin.invoice.index')->can('invoice_index');
        Route::post('/invoice', 'store')->name('admin.invoice.store')->can('invoice_store');
        Route::put('/invoice/{invoice:order_id}', 'update')->name('admin.invoice.update')->can('invoice_update');
        Route::put('/invoice/{invoice}/pay/', 'pay')->name('admin.invoice.pay');
        Route::delete('/invoice/{invoice}', 'destroy')->name('admin.invoice.destroy')->can('invoice_update');
    });

    // Admin Rekap
    Route::controller(AdminRekapController::class)->group(function () {
        Route::get('/rekap', 'index')->name('admin.rekap.index');
        Route::post('/rekap', 'store')->name('admin.rekap.store')->can('rekap_store');
        Route::put('/rekap/{rekap}', 'update')->name('admin.rekap.update')->can('rekap_update');
        Route::delete('/rekap/{rekap}', 'destroy')->name('admin.rekap.destroy');
    });

    // Admin Laporan
    Route::controller(AdminLaporanController::class)->group(function () {
        Route::get('/laporan', 'index')->name('admin.laporan.index');
        Route::post('/laporan', 'store')->name('admin.laporan.store')->can('laporan_store');
        Route::put('/laporan/{laporan}', 'update')->name('admin.laporan.update')->can('laporan_update');
        Route::delete('/laporan/{laporan}', 'destroy')->name('admin.laporan.destroy');
    });

    // Admin Log
    Route::get('/activity', [AdminActivityController::class, 'index'])->name('admin.activity.index')->can('activity_index');

    //  Send Email
    Route::post('/send-email', [SendEmailController::class, 'index'])->name('admin.send.email')->can('send_email');
});

require __DIR__ . '/auth.php';
