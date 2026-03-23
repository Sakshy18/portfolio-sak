import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center py-6 px-8 max-w-7xl mx-auto">
      <div className="font-bold text-xl tracking-tight text-white">Available for hire</div>
      <div className="flex gap-4">
      
      <Link 
             to="/about"
           
            ><button className="px-6 py-2 rounded-full font-medium backdrop-blur-md bg-white/10 border border-white/20 text-white hover:bg-white/20 transition-all duration-300">
         About me
        </button></Link>
        
      </div>
    </nav>
  );
}
