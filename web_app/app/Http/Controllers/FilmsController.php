<?php

namespace App\Http\Controllers;

use App\Models\Films;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\File;

class FilmsController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $films = Films::all();
        return $films;
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \App\Http\Requests\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $request->validate([
            'image' => 'mimes:jpg, jpeg, png'
        ]);

        $folder = 'films_images';
        $image = $request->file('image');
        $imageName = time() . "_" . $image->getClientOriginalName();
        $image->move($folder, $imageName);

        return Films::create([
            'title' => $request->title,
            'description' => $request->description,
            'sinopsis' => $request->sinopsis,
            'image' => $imageName,
        ]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\Request  $request
     * @param  \App\Models\Films  $films
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Films $films, $id)
    {
        // $path = 'films_images/' . auth()->user()->image;
        // if (File::exists($path))
        //     File::delete($path);

        $request->validate([
            'image' => 'mimes:jpg, jpeg, png'
        ]);

        $folder = 'films_images';
        $image = $request->file('image');
        $imageName = time() . "_" . $image->getClientOriginalName();
        $image->move($folder, $imageName);

        DB::table('films')
            ->where('id', $id)
            ->update([
                'title' => $request->title,
                'description' => $request->description,
                'sinopsis' => $request->sinopsis,
                'image' => $imageName,
            ]);
        return response([
            'message' => 'Film Berhasil di Update!!'
        ]);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Films  $films
     * @return \Illuminate\Http\Response
     */
    public function destroy(Films $films)
    {
        //
    }
}
