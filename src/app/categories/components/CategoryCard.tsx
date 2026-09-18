import Link from "next/link"
import { Category } from "../types/category.interface"

const CategoryCard = ({id, name}:Category) => {
  return (
    <div className="border p-2.5 mb-2">
        <h2>{name}</h2>
        <Link href={`/categories/${id}`} className="cursor-pointer bg-blue-700 px-2 py-1 rounded">Detalles</Link>
    </div>
  )
}

export default CategoryCard
