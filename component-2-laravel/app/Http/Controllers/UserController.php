<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class UserController extends Controller
{
    public function  index(){
        $user = User::all();
        return response()->json(['users'=>$user],200);
    }

    public function findUserById($id): \Illuminate\Http\JsonResponse
    {
        $user = User::find($id);

        if (!$user) {
            return response()->json(['message' => 'User not found'], 404);
        }

        return response()->json(['user' => $user], 200);
    }

    public function store(Request $request)
    {
        // Log request data
        \Log::info('Request data:', $request->all());

        $validatedData = $request->validate([
            'name' => 'required|string|max:255',
            'username' => 'required|string|max:255',
            'email' => 'required|email|unique:users,email',
            'role' => 'integer|max:255',
            'password' => 'required|string|min:8|confirmed',
        ]);

        // Log validated data
        \Log::info('Validated data:', $validatedData);

        // Create a new user only if validation passes
        // Additional debugging


        try {
            \Log::info('Before user creation');
            $user = User::create([
                'name' => $validatedData['name'],
                'username' => $validatedData['username'],
                'role' => $validatedData['role'],
                'email' => $validatedData['email'],
                'password' => Hash::make($validatedData['password']),
            ]);
            \Log::info('After user creation');

            return response()->json(['message' => 'User created successfully', 'user' => $user], 201);
        } catch (\Exception $e) {
            // Log exception
            \Log::error('Error creating user: ' . $e->getMessage());

            return response()->json(['error' => 'Error creating user'], 500);
        }
    }





}
