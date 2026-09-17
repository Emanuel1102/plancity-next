import { api } from "@/api"
import { Event } from "@/app/events/types/events.interface"

export const getEventsByCategory = async (categoryId:string) : Promise<Event[]> => {

    const { data } = await api.get<Event[]>(`/events?categoryId=${categoryId}`)

    return data

}