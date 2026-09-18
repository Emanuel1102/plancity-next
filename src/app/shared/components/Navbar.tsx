import Link from "next/link"

const Navbar = () => {
  return (
    <nav className="w-full bg-blue-700 p-2 flex  justify-center gap-10  ">
      <Link className="hover:text-blue-200 hover:underline" href='/'>Inicio</Link>
      <Link className="hover:text-blue-200 hover:underline" href='/categories'>Categorias</Link>
      <Link className="hover:text-blue-200 hover:underline" href='/events'>Eventos</Link>
    </nav>
  )
} 

export default Navbar
