import "./App.css";
import "react-toastify/dist/ReactToastify.css";
import { useState } from "react";
import Navbar from "./Component/Navbar/Navbar";
import Banner from "./Component/Banner/Banner";
import CustomerTicket from "./Component/CustomerTicket/CustomerTicket";
import Footer from "./Component/footer/Footer";
import { ToastContainer } from "react-toastify";

// ticket data will be fetched inside CustomerTicket component

function App() {
  const [selectedCount, setSelectedCount] = useState(0);
  const [resolvedCount, setResolvedCount] = useState(0);

  return (
    <>
      <Navbar></Navbar>
      <Banner inProgress={selectedCount} resolved={resolvedCount}></Banner>
      <CustomerTicket
        onSelectedChange={setSelectedCount}
        onResolvedChange={setResolvedCount}
      ></CustomerTicket>
      <ToastContainer></ToastContainer>
      <Footer></Footer>
    </>
  );
}

export default App;
