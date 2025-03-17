import Link from "next/link";
import Icons from "../Icons/icons";
import { XOutlined, FacebookOutlined, LinkedinOutlined } from "@ant-design/icons";

function Footer () {
 return (
  <section className="bg-[#364d79] text-white h-[50vh] grid place-items-center">
    <section className="container mx-auto p-6 grid grid-cols-3 gap-4">
     <div className="flex flex-col gap-4">
      <h1 className="font-bold">School Logo</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad quis minus illo aliquam modi distinctio rem fuga iste incidunt ut, itaque delectus deleniti? Incidunt nulla, repellendus ducimus veniam earum sapiente.</p>
      <div className="flex gap-3 items-center">
       <Link href='/#'><XOutlined /></Link>
       <Link href='/#'><FacebookOutlined /></Link>
       <Link href='/#'><LinkedinOutlined /></Link>
      </div>
     </div>

     <div className="flex flex-col gap-4">
      <h1 className="font-bold">Get in touch</h1>
      <p>Address</p>
      <p>Email</p>
      <p>Phone</p>
     </div>

     <div className="flex flex-col gap-4">
      <h1 className="font-bold">Quick Link</h1>
      <div className="flex flex-col gap-4">
       <Link href='/home'>Home</Link>
       <Link href='/about-us'>About Us</Link>
       <Link href='/accounts'>Acounts</Link>
       <Link href='/gallery'>Gallery</Link>
       <Link href='/blog'>Blog</Link>
       <Link href='/contact-us'>Contact Us</Link>
      </div>
     </div>
    </section>
  </section>
 );
};

export default Footer;