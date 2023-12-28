<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Pet;
use Illuminate\Support\Facades\Storage;



class PetController extends Controller
{
    /**
     * Display a listing of the resource.
     */

    public function index()
    {
        $pets = Pet::all();

        // Append image URL to each pet object
        $pets->each(function ($pet) {
            $pet->image_url = $this->getImageUrl($pet->image);
        });

        return response()->json(['pets' => $pets], 200);
    }

// Helper function to generate image URL
    private function getImageUrl($imageName)
    {

        // Replace 'public/images/' with the actual path to your images within the storage directory
        return Storage::url('images/' . $imageName);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        // Validate the incoming request data
        $validatedData = $request->validate([
            'name' => 'required|string',
            'category_id' => 'required|integer',
            'description' => 'required|string',
            'price' => 'required|numeric',
            'seller_id' => 'required|integer',
            'image' => 'nullable|image|mimes:jpeg,png,jpg,gif|max:2048', // Validate the uploaded image
        ]);

        // Process image upload
        if ($request->hasFile('image')) {
            $image = $request->file('image');
            $imageName = time() . '_' . $image->getClientOriginalName();
            $image->storeAs('public/images', $imageName); // Store the image in storage/app/public/images directory

            $validatedData['image'] = $imageName; // Save image name to the 'image' column
        }

        // Create a new pet record
        Pet::create($validatedData);

        return response()->json(['message' => 'Pet created successfully'], 201);
    }


    /**
     * Display the specified resource.
     */


    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, $id)
    {
        // Validate the incoming request data
        $validatedData = $request->validate([
            'name' => 'sometimes|required|string',
            'description' => 'sometimes|required|string',
            'price' => 'sometimes|required|numeric',
            'image' => 'nullable|image|mimes:jpeg,png,jpg,gif|max:2048', // Validate the uploaded image
        ]);

        // Find the pet by ID
        $pet = Pet::findOrFail($id);

        // Process image upload if provided
        if ($request->hasFile('image')) {
            $image = $request->file('image');
            $imageName = time() . '_' . $image->getClientOriginalName();
            $image->storeAs('public/images', $imageName);

            $validatedData['image'] = $imageName; // Update the image name if changed
        }

        // Update only the provided fields
        $pet->fill($validatedData)->save();

        return response()->json(['message' => 'Pet updated successfully'], 200);
    }


    /**
     * Remove the specified resource from storage.
     */
    



}
