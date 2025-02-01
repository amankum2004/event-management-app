const Login = () => {
    return (
      <div className="min-h-screen bg-gradient-to-b from-blue-100 to-purple-50 flex items-center justify-center py-12">
        <div className="max-w-md w-full bg-white shadow-lg rounded-lg p-8">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">Login to Your Account</h2>
          <form className="space-y-6">
            {/* Email Field */}
            <div>
              <label className="block text-sm font-medium text-gray-700" htmlFor="email">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                placeholder="Enter your email"
                required
              />
            </div>
  
            {/* Password Field */}
            <div>
              <label className="block text-sm font-medium text-gray-700" htmlFor="password">
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                placeholder="Enter your password"
                required
              />
            </div>
  
            {/* Submit Button */}
            <div className="text-center">
              <button
                type="submit"
                className="w-full px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg shadow-lg hover:bg-blue-600 transition"
              >
                Login
              </button>
            </div>
          </form>
  
          {/* Forgot password */}
          <div className="mt-4 text-center">
            <p className="text-sm text-gray-600">
              Forgot your password?{" "}
              <a href="/reset-password" className="text-blue-500 hover:underline">
                Reset it here
              </a>
            </p>
          </div>
  
          {/* Register Link */}
          <div className="mt-4 text-center">
            <p className="text-sm text-gray-600">
              Don't have an account?{" "}
              <a href="/register" className="text-blue-500 hover:underline">
                Register here
              </a>
            </p>
          </div>
        </div>
      </div>
    );
  };
  
  export default Login;
  