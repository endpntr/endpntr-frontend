import Footer from "../general/footer";
import Header from "../general/header";
import NewEndpointBtn from "../general/new-endpoint";

function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50 dark:bg-gray-900">
      <Header />
      <main className="flex flex-1 justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div>
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
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default LandingPage;
