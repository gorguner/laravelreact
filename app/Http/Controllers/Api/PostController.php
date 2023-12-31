<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\PostRequest;
use App\Http\Requests\StorePostRequest;
use App\Http\Resources\PostResource;
use App\Models\Post;
use Illuminate\Http\Request;

class PostController extends Controller
{

    /**
     * Display a listing of the resource.
     */
    public function index(PostRequest $request)
    {
        //
        $orderColumn = $request->input('order_column', 'id');
        $orderDirection = $request->input('order_direction', 'desc');

        $posts = Post::with('category')->
        when($request->filled('category_id'), function ($query) use($request) {
            $query->where('category_id', $request->category_id);
            })
            ->orderBy($orderColumn, $orderDirection)
            ->paginate(10);
        return PostResource::collection($posts);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StorePostRequest $request)
    {
        sleep(2);c
        $post = Post::create($request->validate());
        return new PostResource($post);
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }

}
