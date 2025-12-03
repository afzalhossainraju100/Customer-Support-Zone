import "./App.css";
import "react-toastify/dist/ReactToastify.css";
import { Suspense, useState } from "react";
import Navbar from "./Component/Navbar/Navbar";
import Banner from "./Component/Banner/Banner";
import CustomerTicket from "./Component/CustomerTicket/CustomerTicket";
import Footer from "./Component/footer/Footer";
import { ToastContainer } from "react-toastify";

const fetchTickes = async () => {
  const res = await fetch("./ticketData.json");
  const data = await res.json();
  return data;
};
const TicketPromise = fetchTickes();

function App() {
  const [selectedCount, setSelectedCount] = useState(0);

  return (
    <>
      <Navbar></Navbar>
      <Banner inProgress={selectedCount}></Banner>
      <Suspense
        fallback={
          <div className="flex flex-col justify-center items-center my-10">
            <span className="loading loading-infinity loading-xl"></span>
          </div>
        }
      >
        <CustomerTicket
          TicketPromise={TicketPromise}
          onSelectedChange={setSelectedCount}
        ></CustomerTicket>
      </Suspense>
      <ToastContainer></ToastContainer>
      <Footer></Footer>
    </>
  );
}

export default App;
