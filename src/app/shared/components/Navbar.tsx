import NavItem from "./NavItem"

const Navbar = () => {
  
  return (
    <nav className="w-full bg-blue-700 p-2 flex  justify-center gap-10  ">
      <NavItem href="/">Inicio</NavItem>
      <NavItem href="/categories">Categorías</NavItem>
      <NavItem href="/events">Eventos</NavItem>
    </nav>
  )
} 

export default Navbar
