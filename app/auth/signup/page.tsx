"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client"; // Use client version here

import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";

import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "@/components/ui/input-otp";

import { LoginPageButton } from "./login-page-button";

export default function SignUpPage() {
  const router = useRouter();
  const supabase = createClient();

  const [email, setEmail] = useState<string>("");
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [oneTimePassword, setOneTimePassword] = useState<string>("");

  const [showOTPDrawer, setShowOTPDrawer] = useState(false);

  const handleSignup = async () => {
    try {
      const signUpResult = await supabase.auth.signUp({
        email,
        password,
      });

      if (signUpResult.error) throw new Error(signUpResult.error.message);

      const userId = signUpResult.data.user?.id;

      const insertInUserTable = await supabase.from("users").insert([
        {
          id: userId,
          username,
          email,
        },
      ]);

      if (insertInUserTable.error) {
        throw new Error(insertInUserTable.error.message);
      }
      
      const insertCategoriesResult = await supabase.from("category").insert( [
        { user_id: userId, category_name: "Atta, Rice & Dal", category_img_url: "https://ifzagjrxuyxvjccbwsfu.supabase.co/storage/v1/object/public/category-images/atta-rice-dal.avif" },
        { user_id: userId, category_name: "Baby Care", category_img_url: "https://ifzagjrxuyxvjccbwsfu.supabase.co/storage/v1/object/public/category-images/baby-care.avif" },
        { user_id: userId, category_name: "Bakery & Biscuits", category_img_url: "https://ifzagjrxuyxvjccbwsfu.supabase.co/storage/v1/object/public/category-images/bakery-biscuits.avif" },
        { user_id: userId, category_name: "Chicken, Meat & Fish", category_img_url: "https://ifzagjrxuyxvjccbwsfu.supabase.co/storage/v1/object/public/category-images/chicken-meat-fish.avif" },
        { user_id: userId, category_name: "Cleaning Essentials", category_img_url: "https://ifzagjrxuyxvjccbwsfu.supabase.co/storage/v1/object/public/category-images/cleaning-essentials.avif" },
        { user_id: userId, category_name: "Cold Drinks & Juices", category_img_url: "https://ifzagjrxuyxvjccbwsfu.supabase.co/storage/v1/object/public/category-images/cold-drinks-juices.avif" },
        { user_id: userId, category_name: "Dairy & Breakfast", category_img_url: "https://ifzagjrxuyxvjccbwsfu.supabase.co/storage/v1/object/public/category-images/dairy-breakfast.avif" },
        { user_id: userId, category_name: "Dry Fruits, Masala & Oil", category_img_url: "https://ifzagjrxuyxvjccbwsfu.supabase.co/storage/v1/object/public/category-images/dry-fruits-masala-oil.avif" },
        { user_id: userId, category_name: "Fashion & Accessories", category_img_url: "https://ifzagjrxuyxvjccbwsfu.supabase.co/storage/v1/object/public/category-images/fashion-accessories.avif" },
        { user_id: userId, category_name: "Home & Office", category_img_url: "https://ifzagjrxuyxvjccbwsfu.supabase.co/storage/v1/object/public/category-images/home-office.avif" },
        { user_id: userId, category_name: "Instant & Frozen Food", category_img_url: "https://ifzagjrxuyxvjccbwsfu.supabase.co/storage/v1/object/public/category-images/instant-frozen-food.avif" },
        { user_id: userId, category_name: "Munchies", category_img_url: "https://ifzagjrxuyxvjccbwsfu.supabase.co/storage/v1/object/public/category-images/munchies.avif" },
        { user_id: userId, category_name: "Organic & Premium", category_img_url: "https://ifzagjrxuyxvjccbwsfu.supabase.co/storage/v1/object/public/category-images/organic-premium.avif" },
        { user_id: userId, category_name: "Paan Corner", category_img_url: "https://ifzagjrxuyxvjccbwsfu.supabase.co/storage/v1/object/public/category-images/paan-corner.avif" },
        { user_id: userId, category_name: "Personal Care", category_img_url: "https://ifzagjrxuyxvjccbwsfu.supabase.co/storage/v1/object/public/category-images/personal-care.avif" },
        { user_id: userId, category_name: "Pet Care", category_img_url: "https://ifzagjrxuyxvjccbwsfu.supabase.co/storage/v1/object/public/category-images/pet-care.avif" },
        { user_id: userId, category_name: "Pharma & Wellness", category_img_url: "https://ifzagjrxuyxvjccbwsfu.supabase.co/storage/v1/object/public/category-images/pharma-wellness.avif" },
        { user_id: userId, category_name: "Sauces & Spreads", category_img_url: "https://ifzagjrxuyxvjccbwsfu.supabase.co/storage/v1/object/public/category-images/sauces-spreads.avif" },
        { user_id: userId, category_name: "Sweet Tooth", category_img_url: "https://ifzagjrxuyxvjccbwsfu.supabase.co/storage/v1/object/public/category-images/sweet-tooth.avif" },
        { user_id: userId, category_name: "Tea, Coffee & Health Drinks", category_img_url: "https://ifzagjrxuyxvjccbwsfu.supabase.co/storage/v1/object/public/category-images/tea-coffee-health-drinks.avif" },
        { user_id: userId, category_name: "Vegetables & Fruits", category_img_url: "https://ifzagjrxuyxvjccbwsfu.supabase.co/storage/v1/object/public/category-images/vegetables-fruits.avif" },
      ]);

      if(insertCategoriesResult.error){
        throw new Error(insertCategoriesResult.error.message);
      }

      setShowOTPDrawer(true);
    } catch (error: any) {
      alert(error.message);
    }
  };

  const handleVerifyOTP = async () => {
    try {
      const verifyResult = await supabase.auth.verifyOtp({
        email,
        token: oneTimePassword,
        type: "email",
      });

      if (verifyResult.error) throw new Error(verifyResult.error.message);

      const signInResult = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (signInResult.error) throw new Error(signInResult.error.message);

      setShowOTPDrawer(false);
      router.refresh();
      router.push("/");
    } catch (error: any) {
      alert(error.message);
    }
  };

  return (
    <div className="min-h-screen flex flex-col justify-center px-6 bg-white text-black">
      <h1 className="text-4xl font-bold text-center mb-2">Welcome!</h1>
      <p className="text-sm text-center text-neutral-500 mb-8">
        SignUp to continue
      </p>

      <div className="flex flex-col gap-4 w-full max-w-md mx-auto">
        <input
          type="text"
          name="username"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
          className="px-4 py-3 rounded-md bg-neutral-100 border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-neutral-800 placeholder-neutral-500"
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="px-4 py-3 rounded-md bg-neutral-100 border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-neutral-800 placeholder-neutral-500"
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          className="px-4 py-3 rounded-md bg-neutral-100 border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-neutral-800 placeholder-neutral-500"
        />

        <Drawer
          open={showOTPDrawer}
          onOpenChange={setShowOTPDrawer}
          dismissible={false}
        >
          <DrawerTrigger asChild>
            <Button
              onClick={handleSignup}
              className="w-full mt-2 bg-black text-white py-3 rounded-md font-semibold hover:bg-neutral-800 transition"
            >
              Submit
            </Button>
          </DrawerTrigger>

          <DrawerContent onInteractOutside={(e) => e.preventDefault()}>
            <div className="mx-auto w-full max-w-sm">
              <DrawerHeader>
                <DrawerTitle>Enter OTP</DrawerTitle>
              </DrawerHeader>

              <div className="w-full flex justify-center mt-12 mb-12">
                <InputOTP
                  maxLength={6}
                  value={oneTimePassword}
                  onChange={(value) => setOneTimePassword(value)}
                >
                  <InputOTPGroup>
                    <InputOTPSlot index={0} />
                    <InputOTPSlot index={1} />
                    <InputOTPSlot index={2} />
                    <InputOTPSlot index={3} />
                    <InputOTPSlot index={4} />
                    <InputOTPSlot index={5} />
                  </InputOTPGroup>
                </InputOTP>
              </div>

              <DrawerFooter>
                <Button onClick={handleVerifyOTP}>Verify</Button>
              </DrawerFooter>
            </div>
          </DrawerContent>
        </Drawer>
      </div>

      <p className="text-xs text-center text-neutral-400 mt-2">
        already have an account? <LoginPageButton />
      </p>
    </div>
  );
}
