import { login } from "./action";
import { SignUpPageButton } from "./signup-page-button";

export default function LoginPage() {
  return (
    <div className="min-h-screen flex flex-col justify-center px-6 bg-white text-black">
      <h1 className="text-4xl font-bold text-center mb-2">Welcome Back!</h1>
      <p className="text-sm text-center text-neutral-500 mb-8">
        Sign in to continue
      </p>

      <form
        action={login}
        className="flex flex-col gap-4 w-full max-w-md mx-auto"
      >
        <input
          type="email"
          name="email"
          placeholder="Email"
          required
          className="px-4 py-3 rounded-md bg-neutral-100 border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-neutral-800 placeholder-neutral-500"
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          required
          className="px-4 py-3 rounded-md bg-neutral-100 border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-neutral-800 placeholder-neutral-500"
        />

        <button
          formAction={login}
          className="mt-2 bg-black text-white py-3 rounded-md font-semibold hover:bg-neutral-800 transition"
        >
          Log In
        </button>
      </form>

      <p className="text-xs text-center text-neutral-400 mt-2">
         don't have an account?  <SignUpPageButton/>
      </p>

    </div>
  );
}
