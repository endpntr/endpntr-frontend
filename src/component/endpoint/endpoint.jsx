import { useParams } from "react-router-dom";
import RequestList from "./request-list";
import Header from "../general/header";
import Footer from "../general/footer";
import Toolbar from "./toolbar";

function Endpoint({ PayloadType }) {
  const { endpointHash } = useParams();

  return (
    <div className="flex flex-col justify-between h-screen bg-gray-50 dark:bg-gray-900">
      <Header />
      <main className="py-14 h-4/5 w-4/5 m-auto">
        <div className="h-full w-full flex flex-col items-center justify-center">
          <Toolbar endpointHash={endpointHash} />
          <div className="grid grid-cols-1 grid-rows-2 xl:grid-rows-1 xl:grid-cols-3 gap-8 h-4/5 mx-7 w-full">
            <div className="col-span-1 border-single border border-gray-500 rounded-sm p-3 overflow-auto shadow-2xl dark:bg-gray-800">
              <RequestList />
            </div>
            <div className="w-full h-full col-span-1 xl:col-span-2 border-single border border-gray-500 rounded-sm overflow-auto shadow-2xl p-6 dark:bg-gray-800">
              <PayloadType />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default Endpoint;
