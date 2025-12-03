import './App.css'
import { Suspense } from 'react';
import Navbar from './Component/Navbar/Navbar';
import Banner from './Component/Banner/Banner';
import CustomerTicket from './Component/CustomerTicket/CustomerTicket';
import Footer from './Component/footer/Footer';

const fetchTickes = async () =>{
  const res = await fetch("./ticketData.json");
  const data =  await res.json();
  return data;
};
const TicketPromise = fetchTickes();

function App() {


  return (
    <>
      <Navbar></Navbar>
      <Banner></Banner>
      <Suspense
        fallback={
          <div className='flex flex-col justify-center items-center my-10'>
            <span className="loading loading-infinity loading-xl"></span>
          </div>
        }
      >
        <CustomerTicket 
        TicketPromise={TicketPromise}
        ></CustomerTicket>
      </Suspense>
      <Footer></Footer>
    </>
  );
}

export default App
