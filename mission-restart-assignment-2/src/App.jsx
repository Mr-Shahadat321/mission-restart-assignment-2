
import { Suspense, useState } from 'react';
import './App.css'
import NavBar from './components/NavBar/NavBar'
import ProgressCard from './components/Progress/ProgressCard'
import CustomerTicket from './components/CustomerTicket/CustomerTicket';

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
  <ProgressCard ></ProgressCard>
  <Suspense fallback = {<h2>Ticket are loading</h2>}>
  <CustomerTicket
   fetchTicketPromises = {fetchTicketPromises}
   tickets = {tickets}
   setTickets={setTickets}
   progress={progress}
   setProgress={setProgress}
   
  
         ></CustomerTicket>
  </Suspense>
     
     
    </>
  )
}

export default App
