'use client'
import { use, useEffect, useState } from "react"
import { Event, EventDetailsProps } from "../types/events.interface"
import { eventsServices } from "../services/events.service"

const EventDetailsPage =  ({params}:EventDetailsProps) => {
    const {id} = use(params)

    const [currentEvent, setCurrentEvent] = useState<Event | undefined>(undefined)

    useEffect( ()=>{
        const getEvent = async (eventId:string) => {
            const event = await eventsServices.getById(eventId)
            setCurrentEvent(event)
        }
        getEvent(id)
    }, [])
    
    

  return (
    <div className="p-2">
      <h2>Nombre del evento: {currentEvent?.name}</h2>
      <p>Descripción: {currentEvent?.description}</p>
      <span>Pertenece a: {currentEvent?.category.name}</span>
    </div>
  )
}

export default EventDetailsPage
