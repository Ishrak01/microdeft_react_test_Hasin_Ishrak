import Link from "next/link"
const Navbar = () => {
  return (
    <div className='p-5 bg-blue-500 mx-[120px]'>
      <div>
        <Link href="/Registration">Registration</Link>
      </div>
      <div>
        <Link href="">Login</Link>
      </div>
    </div>
  )
}

export default Navbar