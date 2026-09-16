import Link from "next/link"
import { Event } from "../types/events.interface"

const EventCard = ({id, name}: Event) => {
  return (
    <div className="border p-2.5">
        <h2>Evento: {name}</h2>
        <Link href={`/events/${id}`} className="bg-blue-700 px-2 py-1 rounded">Detalles</Link>
    </div>
  )
}

export default EventCard
