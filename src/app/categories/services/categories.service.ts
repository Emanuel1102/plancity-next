import { api } from "@/api";
import { Category } from "../types/category.interface";

export const categoriesServices = {
    async getAll ():Promise<Category[]> {
        const { data } = await api.get<Category[]>('/categories')
        return data
    },

    async getById ( categoryId:string ) : Promise<Category> {
        const { data } = await api.get<Category>(`/categories/${categoryId}`)
        return data
    }
}
