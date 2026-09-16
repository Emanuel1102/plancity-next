'use client'
import { useEffect, useState } from "react"
import { eventsServices } from "./services/events.service"
import { Event } from "./types/events.interface"
import EventCard from "./components/EventCard"

const EventsPage = () => {

  const [ currrentEvents, setCurrentEvents ] = useState<Event[]>([])

  useEffect(()=>{
    const getEvents = async () => {
      const events = await eventsServices.getAll()
      setCurrentEvents(events)
    }

    getEvents()

  }, [])


  return (
    <div className="p-3">
      <h2>Eventos</h2>
      {
        currrentEvents.map(event => <EventCard key={event.id} {...event}/>)
      }
    </div>
  )
}

export default EventsPage
