
import { Suspense, useState } from 'react';
import './App.css'
import NavBar from './components/NavBar/NavBar'
import ProgressCard from './components/Progress/ProgressCard'
import CustomerTicket from './components/CustomerTicket/CustomerTicket';
import Footer from './components/footer/Footer';

  const fetchPlayer = async() => {
         const res =await fetch('../public/public-Ticket.json');
         return res.json()
  };
  const fetchTicketPromises = fetchPlayer()
  

function App() {
  const [tickets, setTickets] =  useState([]);
  const [progress, setProgress] = useState({inProgress: 0, resolved: 0})
  return (
    <>
  <NavBar></NavBar>
  <ProgressCard progress={progress}></ProgressCard>
  <div className="w-11/12 mx-auto flex justify-between items-center mt-6">
  <h1 className="text-2xl font-semibold">Customers Tickets</h1>
</div>
  <Suspense fallback = {<h2>Ticket are loading</h2>}>
  <CustomerTicket
   fetchTicketPromises = {fetchTicketPromises}
   tickets = {tickets}
   setTickets={setTickets}
   progress={progress}
   setProgress={setProgress}
   
  
         ></CustomerTicket>
       </Suspense>
    <Footer></Footer>
     
    </>
  )
}

export default App