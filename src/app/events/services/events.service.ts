import { api } from "@/api";
import { Event } from "../types/events.interface";

export const eventsServices = {
    async getAll ():Promise<Event[]> {
        const {data} = await api.get<Event[]>('/events')
        return data
    },

    async getById (eventId:string) : Promise<Event> {
        const {data} = await api.get<Event>(`/events/${eventId}`)
        return data
    }
}