import { Link } from "react-router-dom";

export default function Navbar() {
 
  return (
    <div className="h-12 text-red-500 p-4 flex
       justify-between items-center border-b-2 border-b-red-500 uppercase md:h-24 lg:px-20 xl:px-40">
      {/* Left Links */}
      <div className="flex gap-4 flex-1 ">
        <Link to="/">Homepage</Link>
        <Link to="/data">Data</Link>
        <Link to="/login">Login</Link>
      </div>
    </div>
  )
}