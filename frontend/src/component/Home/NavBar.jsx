// import Link from "next/link";
// import DropDown from "./Dropdown";

// function NavBar() {
//  return (
//   <header>
//    <section className="container mx-auto flex justify-between items-center p-6">
//     <h1>School Logo</h1>
//    <div className="flex justify-center items-center gap-8">
//     <div className="border-r pr-6 flex gap-4">
//     <Link href={'/'}>Home</Link>
//     <Link href={'/about-us'}>About Us</Link>
//     <Link href={'/accounts'}><DropDown></DropDown></Link>
//     <Link href={'/gallery'}>Gallery</Link>
//     <Link href={'/contact-us'}>Contact Us</Link>
//    </div>
//    <div className="flex gap-4">
//     <Link href={'/login'}>Login</Link>
//     <Link href={'/register'}>Register</Link>
//    </div>
//    </div>
//    </section>
//  </header>
//  );
// };

// export default NavBar;

import Link from "next/link";
import DropDown from "./Dropdown";
import StudentRegister from "../Register/StudentRegister";

function NavBar() {
  return (
    <header>
      <section className="container mx-auto flex justify-between items-center p-6 sticky top-0 z-[9999]">
        <Link href='/home'>School Logo</Link>
        <div className="flex justify-center items-center gap-8">
          <div className="border-r-3 border-r-gray-300 pr-6 flex gap-4">
            <Link href="/">Home</Link>
            <Link href="/aboutus">About Us</Link>

            {/* Dropdown Menu for Accounts */}
            <DropDown />

            <Link href="/gallery">Gallery</Link>
            <Link href="/contactus">Contact Us</Link>
          </div>
          <div className="flex gap-4">
            <Link className="bg-[#E2F3F4] py-2 px-6 rounded-md font-semibold hover:bg-[#6DC7D1]" href="/signin">Sign In</Link>
            <Link className="bg-[#6DC7D1] py-2 px-6 rounded-md font-semibold hover:bg-[#E2F3F4]" href="/register">Register</Link>
          </div>
        </div>
      </section>
    </header>
  );
}

export default NavBar;
