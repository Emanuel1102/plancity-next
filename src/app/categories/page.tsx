'use client'
import { useEffect, useState } from "react"
import { categoriesServices } from "./services/categories.service"
import { Category } from "./types/category.interface"
import Link from "next/link"
import CategoryCard from "./components/CategoryCard"

const CategoriesPage = () => {

  const [currentCategories, setCurrentCategories] = useState<Category[]>([])

  useEffect(()=>{
    const getCategories = async () => {
      const categories  = await categoriesServices.getAll()
      setCurrentCategories(categories)
    }

    getCategories()
  },[])

  

  return (
    <div className="p-3">
      <h1>Categorias</h1>
      {
        currentCategories.map( category =>  <CategoryCard key={category.id} {...category}/> )
      }
    </div>
  )
}

export default CategoriesPage
