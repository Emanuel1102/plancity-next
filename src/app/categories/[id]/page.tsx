'use client'
import { use, useEffect, useState } from "react"
import { categoriesServices } from "../services/categories.service"
import { Category, DetailCategoryProps } from "../types/category.interface"
import { getEventsByCategory } from "@/app/shared/services/events.service"
import { Event } from "@/app/events/types/events.interface"
import EventCard from "@/app/events/components/EventCard"

const DetailsCategoryPage = ({params}:DetailCategoryProps) => {
    const {id} = use(params)

    const [currentCategory, setCurrentCategory] = useState<Category | undefined>(undefined)

    const [currentEvents, setCurrenEvents] = useState<Event[] | undefined>([])

    useEffect(()=>{
        const getCategoryAndEvents = async (categoryId:string) => {
            const category = await categoriesServices.getById(categoryId)
            setCurrentCategory(category)

            const events = await getEventsByCategory(id)
            setCurrenEvents(events)

        }
        
        getCategoryAndEvents(id)

    }, [])

    
  return (
    <div className="p-3">
        <button onClick={()=>history.back()} className="cursor-pointer bg-blue-700 px-2 py-1 rounded">Volver</button>
        <h2>Nombre: {currentCategory?.name}</h2>
        <p>Descripción: {currentCategory?.description}</p>

        <div>
            <h2>Eventos:</h2>

            {
                currentEvents?.map(event => <EventCard key={event.id} {...event}/>)
            }

        </div>
    </div>
  )
}

export default DetailsCategoryPage
