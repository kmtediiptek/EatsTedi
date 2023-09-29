<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\Admin\AdminCategoryRequest;
use App\Http\Requests\Admin\AdminTableRequest;
use App\Http\Resources\Admin\AdminCategoriesResource;
use App\Models\Activity;
use App\Models\Category;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Storage;

class AdminCategoryController extends Controller
{
    public function index()
    {

        $total_category = Category::get()->count();
        $categories = Category::query()
            ->select('id', 'name', 'icon', 'slug')
            ->latest()
            ->fastPaginate();
        return inertia('Admin/Category/Index', [
            "categories" => AdminCategoriesResource::collection($categories),
            "total_categories" => $total_category
        ]);
    }

    public function store(AdminCategoryRequest $request)
    {
        Category::create([
            "name" => $name = $request->name,
            "slug" => str($name)->slug(),
            "icon" => $request->icon,
        ]);


        Activity::create([
            "activity" => Auth::user()->name . " Created Category " . $request->name
        ]);

        return back();
    }


    public function update(AdminTableRequest $request, Category $category)
    {
        $category->update([
            "name" => $name = $request->name ? $request->name : $category->name,
            "slug" => str($name)->slug(),
            "icon" => $request->icon
        ]);


        Activity::create([
            "activity" => Auth::user()->name . " Updated Category " . $request->name ?: $category->name
        ]);

        return back();
    }

    public function destroy(Category $category)
    {
        if ($category->picture) {
            Storage::delete($category->picture);
        }
        $category->delete();

        Activity::create([
            "activity" => Auth::user()->name . " Deleted Category " . $category->name
        ]);
        return back();
    }
}
