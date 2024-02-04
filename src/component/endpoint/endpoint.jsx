import { useParams } from "react-router-dom";
import RequestList from "./request-list";
import Header from "../general/header";
import Footer from "../general/footer";
import Toolbar from "./toolbar";

function Endpoint({ PayloadType, requestList, setRequestList }) {
  const { endpointHash } = useParams();

  return (
    <div className="h-screen bg-gray-50 dark:bg-gray-900">
      <Header />
      <main className="my-14 xl:mx-16 xl:px-16 sm:mx-4 sm:-px4 h-4/5">
        <div className="text-center text-3xl mb-6 font-bold">Inspector</div>
        <Toolbar endpointHash={endpointHash} />
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-8 grid-rows-1 h-4/5 mx-7">
          <div className="col-span-1 border-single border border-gray-500 rounded-sm p-3 overflow-auto shadow-2xl bg-gray-800">
            <RequestList
              requestList={requestList}
              setRequestList={setRequestList}
            />
          </div>
          <div className="w-full h-full col-span-1 xl:col-span-2 border-single border border-gray-500 rounded-sm overflow-auto shadow-2xl p-6 bg-gray-800">
            <PayloadType />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default Endpoint;
