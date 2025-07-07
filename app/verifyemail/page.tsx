import Link from "next/link";

export default async function VerifyEmailLayout() {
    // const { data, error } = await supabase.auth.verifyOtp({ email, token, type: 'email'})


  return (
    <div>
      <div className="min-h-screen flex flex-col justify-center items-center bg-white px-6 text-black text-center">
        <h1 className="text-3xl font-bold mb-4">Check Your Email</h1>

        <p className="text-base text-neutral-600 max-w-md mb-4">
          We've sent a confirmation link to your email address. Please check
          your inbox and click the link to activate your StoreSaathi account.
        </p>

        <p className="text-sm text-neutral-500">
          Verified? click here to
          <Link href="/auth/login" className="text-neutral-800 underline"> Login</Link>
        </p>
      </div>
    </div>
  );
}
