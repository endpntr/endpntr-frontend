import { Link } from "react-router-dom";
import NewEndpointBtn from "./new-endpoint";

export default function Component() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50 dark:bg-gray-900">
      <header className="w-full py-5 px-2 sm:px-6 lg:px-8 border-b border-gray-200 dark:border-gray-800">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">
            endpntr.
          </h1>
          <nav>
            <Link
              className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100"
              href="#"
            >
              Documentation
            </Link>
          </nav>
        </div>
      </header>
      <main className="flex flex-1 items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8 text-center">
          <h2 className="mt-6 text-3xl font-extrabold text-gray-900 dark:text-gray-100">
            Welcome to endpntr.
          </h2>
          <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
            Create your own endpoint in seconds, capture and inspect HTTP
            requests.
          </p>

          <NewEndpointBtn />
        </div>
      </main>
      <footer className="w-full py-6 px-4 sm:px-6 lg:px-8 border-t border-gray-200 dark:border-gray-800">
        <div className="flex items-center justify-between">
          <p className="text-sm text-gray-500 dark:text-gray-400">
            © 2024 endpntr
          </p>
          <nav>
            <Link
              className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100"
              href="#"
            >
              Privacy Policy
            </Link>
          </nav>
        </div>
      </footer>
    </div>
  );
}
