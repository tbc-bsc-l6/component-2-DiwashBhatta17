<?php

namespace App\Http\Controllers;

use App\Mail\EmailVerification;
use App\Models\User;
use Carbon\Carbon;
use http\Env\Response;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Mail;
use MongoDB\BSON\Int64;
use function Laravel\Prompts\password;

class UserController extends Controller
{
    public function index(){
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
    private function generateOTP()
    {
        return random_int(1000, 9999);
    }

    public function otpValidation(Request $request)
    {
        $validateData = $request->validate([
            'otp'=> 'required|int|min:4',
            'id'=>'required|int', // Update the validation rules according to your needs
        ]);

        $otpNumber = $validateData['otp'];
        $id = $validateData['id'];

        $user = User::find($id);

        if (!$user) {
            return response()->json(["message"=>"User not found"], 404);
        }

        if ($user->otp === $otpNumber) { // Assuming 'otp' is a column in your user table
            // Update the user's email verification status
            $user->email_verified_at = Carbon::now(); // Set email_verified_at to current timestamp
            $user->is_verified = true;
            $user->save();

            return response()->json(["message"=>"Email verified successfully"]);
        } else {
            return response()->json(["message"=>"OTP did not match"]);
        }
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

        try {
            $otp = $this->generateOTP(); // Replace this with your OTP generation logic
            $name = $validatedData['name']; // Replace with the user's name
            $email = $validatedData['email']; // Replace with the recipient's email address
            $this->otpValue = $otp;

            Mail::to($email)->send(new EmailVerification($otp, $name));
            \Log::info('Before user creation');
            $user = User::create([
                'name' => $validatedData['name'],
                'username' => $validatedData['username'],
                'role' => $validatedData['role'],
                'email' => $validatedData['email'],
                'otp' => $otp,
                'password' => Hash::make($validatedData['password']),
            ]);

            // Email sent successfully
            return response()->json(['message' => 'Email sent successfully'], 200);
        } catch (\Exception $e) {
            // Log exception
            \Log::error('Error creating user: ' . $e->getMessage());
            // Email sending failed
            return response()->json(['error' => 'Failed to create user or send email'], 500);
        }
    }


    public function loginUser(Request $request){
        $validatedData = $request->validate([
            'username' => 'required|string|max:255',
            'password' => 'required|string|max:255'
        ]);

        $user = User::where('username', $validatedData['username'])->first();

        if (!$user) {
            return response()->json(["message" => "User Not Found"], 404);
        }

        // Here, $user->password contains the hashed password from the database
        if (password_verify($validatedData['password'], $user->password)) {
            // Password matches
            return response()->json(['message' => "Login Successful", 'user' => $user], 200);
        } else {
            // Password doesn't match
            return response()->json(["message" => "Incorrect Password"], 401);
        }
    }






}
