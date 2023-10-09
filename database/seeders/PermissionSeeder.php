<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Spatie\Permission\Models\Permission;
use Spatie\Permission\Models\Role;

class PermissionSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        // Profile
        Permission::create(['name' => 'profile_edit']);
        Permission::create(['name' => 'profile_update']);
        Permission::create(['name' => 'profile_destroy']);

        // Dashboard
        Permission::create(['name' => 'dashboard']);

        // Transaction
        Permission::create(['name' => 'transaction']);

        // Category
        Permission::create(['name' => 'category_index']);
        Permission::create(['name' => 'category_store']);
        Permission::create(['name' => 'category_update']);
        Permission::create(['name' => 'category_destroy']);

        // Table
        Permission::create(['name' => 'table_index']);
        Permission::create(['name' => 'table_store']);
        Permission::create(['name' => 'table_update']);
        Permission::create(['name' => 'table_destroy']);

        // Payment
        Permission::create(['name' => 'payment_index']);
        Permission::create(['name' => 'payment_store']);
        Permission::create(['name' => 'payment_update']);
        Permission::create(['name' => 'payment_destroy']);

        // Schedule
        Permission::create(['name' => 'schedule_index']);
        Permission::create(['name' => 'schedule_store']);
        Permission::create(['name' => 'schedule_update']);
        Permission::create(['name' => 'schedule_destroy']);

        // Employee
        Permission::create(['name' => 'employee_index']);
        Permission::create(['name' => 'employee_store']);
        Permission::create(['name' => 'employee_update']);
        Permission::create(['name' => 'employee_destroy']);

        // Product
        Permission::create(['name' => 'product_index']);
        Permission::create(['name' => 'product_store']);
        Permission::create(['name' => 'product_update']);
        Permission::create(['name' => 'product_destroy']);

        // Invoice
        Permission::create(['name' => 'invoice_index']);
        Permission::create(['name' => 'invoice_store']);
        Permission::create(['name' => 'invoice_update']);

        // Cart
        Permission::create(['name' => 'cart_store']);
        Permission::create(['name' => 'cart_destroy']);
        Permission::create(['name' => 'cart_increment']);
        Permission::create(['name' => 'cart_decrement']);

        // Activity
        Permission::create(['name' => 'activity_index']);

        // Presence
        Permission::create(['name' => 'presence_index']);
        Permission::create(['name' => 'presence_store']);

        // Attendace
        Permission::create(['name' => 'attendace_index']);

        // Send Email
        Permission::create(['name' => 'send_email']);

        $adminPermission = [
            'profile_edit',
            'profile_update',
            'profile_destroy',
            'dashboard',
            'category_index',
            'category_store',
            'category_update',
            'category_destroy',
            'table_index',
            'table_store',
            'table_update',
            'table_destroy',
            'payment_index',
            'payment_store',
            'payment_update',
            'payment_destroy',
            'schedule_index',
            'schedule_store',
            'schedule_update',
            'schedule_destroy',
            'employee_index',
            'employee_store',
            'employee_update',
            'employee_destroy',
            'product_index',
            'product_store',
            'product_update',
            'product_destroy',
            'activity_index',
            'presence_index',
            'presence_store',
            'attendace_index',
            'invoice_index',
        ];

        $ownerPermission = [
            'profile_edit',
            'profile_update',
            'profile_destroy',
            'dashboard',
            'attendace_index',
            'activity_index',
            'category_index',
            'category_store',
            'category_update',
            'category_destroy',
            'table_index',
            'table_store',
            'table_update',
            'table_destroy',
            'payment_index',
            'payment_store',
            'payment_update',
            'payment_destroy',
            'schedule_index',
            'schedule_store',
            'schedule_update',
            'schedule_destroy',
            'employee_index',
            'employee_store',
            'employee_update',
            'employee_destroy',
            'product_index',
            'product_store',
            'product_update',
            'product_destroy',
            'activity_index',
            'presence_index',
            'presence_store',
            'attendace_index',
            'transaction',
            'presence_index',
            'presence_store',
            'invoice_index',
            'invoice_store',
            'invoice_update',
            'cart_store',
            'cart_destroy',
            'cart_increment',
            'cart_decrement',
            'send_email',
        ];

        $employeePermission = [
            'profile_edit',
            'profile_update',
            'dashboard',
            'transaction',
            'presence_index',
            'presence_store',
            'invoice_index',
            'invoice_store',
            'invoice_update',
            'cart_store',
            'cart_destroy',
            'cart_increment',
            'cart_decrement',
            'send_email',
        ];

        $adminRole = Role::where('name', 'admin')->first();
        $adminRole->syncPermissions($adminPermission);

        $ownerRole = Role::where('name', 'owner')->first();
        $ownerRole->syncPermissions($ownerPermission);

        $ownerRole = Role::where('name', 'employee')->first();
        $ownerRole->syncPermissions($employeePermission);
    }
}
