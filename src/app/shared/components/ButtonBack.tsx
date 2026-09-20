import { useRouter } from "next/navigation"

const ButtonBack = () => {
  const router = useRouter()
  return <button onClick={()=>router.back()} className="cursor-pointer bg-blue-700 px-2 py-1 rounded">Volver</button>
}

export default ButtonBack
