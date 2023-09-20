<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Resources\Admin\AdminCategoriesResource;
use App\Models\Category;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class AdminCategoryController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
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

    public function store(Request $request)
    {
        Category::create([
            "name" => $name = $request->name,
            "slug" => str($name)->slug(),
            "icon" => $request->icon,
        ]);

        return back();
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Category $category)
    {
        $picture = $request->file('picture');
        $category->update([
            "name" => $name = $request->name ? $request->name : $category->name,
            "slug" => str($name)->slug(),
            "icon" => $request->icon
        ]);

        return back();
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(Category $category)
    {
        if ($category->picture) {
            Storage::delete($category->picture);
        }

        $category->delete();
        return back();
    }
}
