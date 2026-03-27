import Link from 'next/link';

export default function LoginPage() {
  return (
    <div className="min-h-[80vh] flex items-center justify-center px-5 md:px-4">
      <div className="w-full max-w-[400px] animate-fade-in-up">
        {/* Heading */}
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-semibold text-gray-900 dark:text-white mb-2">
            Welcome back
          </h1>
          <p className="text-base text-gray-500 dark:text-gray-400">
            Sign in to your account
          </p>
        </div>

        {/* Form */}
        <form className="flex flex-col gap-5">
          {/* Email */}
          <div className="flex flex-col gap-2">
            <label
              htmlFor="email"
              className="text-sm font-medium text-gray-900 dark:text-white"
            >
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              placeholder="you@example.com"
              className="w-full px-4 py-3 rounded-lg bg-transparent border border-black/[0.08] dark:border-white/10 text-gray-900 dark:text-white placeholder:text-gray-400 dark:placeholder:text-gray-600 outline-none transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] focus:border-black/30 dark:focus:border-white/30 focus:ring-1 focus:ring-black/10 dark:focus:ring-white/10"
            />
          </div>

          {/* Password */}
          <div className="flex flex-col gap-2">
            <label
              htmlFor="password"
              className="text-sm font-medium text-gray-900 dark:text-white"
            >
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              required
              placeholder="••••••••"
              className="w-full px-4 py-3 rounded-lg bg-transparent border border-black/[0.08] dark:border-white/10 text-gray-900 dark:text-white placeholder:text-gray-400 dark:placeholder:text-gray-600 outline-none transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] focus:border-black/30 dark:focus:border-white/30 focus:ring-1 focus:ring-black/10 dark:focus:ring-white/10"
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full font-sans font-medium text-base text-white dark:text-black bg-black dark:bg-white py-3 px-8 rounded-full transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] hover:opacity-80 active:scale-[0.98] mt-1"
          >
            Log in
          </button>
        </form>

        {/* Divider */}
        <div className="flex items-center gap-4 my-6">
          <div className="flex-1 h-px bg-black/[0.08] dark:bg-white/10" />
          <span className="text-sm text-gray-400 dark:text-gray-600">or</span>
          <div className="flex-1 h-px bg-black/[0.08] dark:bg-white/10" />
        </div>

        {/* Google */}
        <button
          type="button"
          className="w-full font-sans text-[0.95rem] font-normal text-black dark:text-white bg-transparent border border-black/15 dark:border-white/20 py-3 px-4 rounded-full cursor-pointer transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] hover:bg-black/[0.04] dark:hover:bg-white/[0.08]"
        >
          Continue with Google
        </button>

        {/* Sign up link */}
        <p className="text-center text-sm text-gray-500 dark:text-gray-400 mt-8">
          Don&apos;t have an account?{' '}
          <Link
            href="/signup"
            className="text-black dark:text-white font-medium hover:underline underline-offset-4 transition-colors"
          >
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
}
