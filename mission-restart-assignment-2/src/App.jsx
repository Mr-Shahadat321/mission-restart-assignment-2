
import { Suspense } from 'react';
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

  return (
    <>
  <NavBar></NavBar>
  <ProgressCard></ProgressCard>
  <Suspense fallback = {<h2>Ticket are loading</h2>}>
  <CustomerTicket fetchTicketPromises = {fetchTicketPromises}></CustomerTicket>
  </Suspense>
     
     
    </>
  )
}

export default App
