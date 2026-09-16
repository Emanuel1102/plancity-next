'use client'
import { use, useEffect, useState } from "react"
import { categoriesServices } from "../services/categories.service"
import { Category, DetailCategoryProps } from "../types/category.interface"

const DetailsCategoryPage = ({params}:DetailCategoryProps) => {
    const {id} = use(params)

    const [category, setCurrentCategory] = useState<Category | undefined>(undefined)

    useEffect(()=>{
        const getCategory = async (categoryId:string) => {
            const currentCategory = await categoriesServices.getById(categoryId)
            setCurrentCategory(currentCategory)
        }
        getCategory(id)
    }, [])

    
  return (
    <div className="p-3">
        <button onClick={()=>history.back()} className="cursor-pointer bg-blue-700 px-2 py-1 rounded">Volver</button>
        <h2>Nombre: {category?.name}</h2>
        <p>Descripción: {category?.description}</p>
    </div>
  )
}

export default DetailsCategoryPage
