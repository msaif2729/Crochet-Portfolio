import React, { useRef, useState } from "react";

export default function Navbar() {

  const div1 = useRef(null);
  const div2 = useRef(null);
  const div3 = useRef(null);
  const option = useRef(null);

  const [open,setOpen] = useState({opened:true})

  const handleclick = () => {
    if (open.opened) {
      div1.current.style.transform = "translateY(0.1rem) rotate(-45deg)";
      div2.current.style.transform = "translateY(-0.315rem) rotate(45deg)";
      div3.current.style.display = "none";
      option.current.style.display = "block";
      setOpen({opened:false});
      console.log(open.opened)
    } else {
      div1.current.style.transform = "rotate(0deg)";
      div2.current.style.transform = "rotate(0deg)";
      div3.current.style.display = "block";
      option.current.style.display = "none";
      setOpen({opened:true});
      console.log(open.opened)
    }
  };



  return (
    <div className=" bg-yellow-100 fixed flex w-full z-[101] ">
      <nav className=" justify-between flex w-full p-3 lg:p-4 bg-yellow-100">
        <p className=" cursor-pointer font-extrabold text-2xl lg:text-3xl"> 🧶 <span className="text-red-600">CROCHET</span> HEAVEN.</p>
        <ul className="flex xl:space-x-10 lg:space-x-5   font-semibold self-center text-xl px-10 hidden lg:flex ">
          <a href="#home"><li className=" cursor-pointer " > Home</li></a>
          <a href="#about"><li className=" cursor-pointer " > About</li></a>
          <a href="#work"><li className=" cursor-pointer " > Our Work</li></a>
          <a href="#customer"><li className=" cursor-pointer " > Our Customers</li></a>
          <a href="#service"><li className=" cursor-pointer " > Our Service</li></a>
          <a href="#review"><li className=" cursor-pointer " > Contact</li></a>
        </ul>
        <div
              className="flex space-y-1 flex-col self-center p-1 lg:hidden "
              onClick={handleclick}
            >
              <div
                className=" bg-black w-5 h-[2px] transition-all duration-75"
                ref={div1}
              ></div>
              <div
                className=" bg-black w-5 h-[2px] transition-all duration-75"
                ref={div2}
              ></div>
              <div
                className=" bg-black w-5 h-[2px] transition-all duration-75"
                ref={div3}
              ></div>
            </div>
      </nav>
      <svg viewBox="0 0 487 45" preserveAspectRatio="none" className="w-full fixed rotate-180 top-14 lg:top-16   ">
        <path
          d="
              M0,35 
              C12.5,25 25,25 37.5,35 
              C50,45 62.5,45 75,35
              C87.5,25 100,25 112.5,35
              C125,45 137.5,45 150,35
              C162.5,25 175,25 187.5,35
              C200,45 212.5,45 225,35
              C237.5,25 250,25 262.5,35
              C275,45 287.5,45 300,35
              C312.5,25 325,25 337.5,35
              C350,45 362.5,45 375,35
              C387.5,25 400,25 412.5,35
              C425,45 437.5,45 450,35
              C462.5,25 475,25 487.5,35
      L500,50 L0,50 Z"
          className="fill-yellow-100 self-center"
        />
      </svg>
      <div
        className="bg-gray-200 -z-10 px-5 pb-7 pt-12   fixed w-full mt-[50px] hidden md:hidden transition-all duration-100"
        ref={option}
      >
        <ul className="space-y-10 text-xl font-semibold  ">
        <a href="#home"><li className=" cursor-pointer " > Home</li></a>
          <a href="#about"><li className=" cursor-pointer " > About</li></a>
          <a href="#work"><li className=" cursor-pointer " > Our Work</li></a>
          <a href="#customer"><li className=" cursor-pointer " > Our Customers</li></a>
          <a href="#service"><li className=" cursor-pointer " > Our Service</li></a>
          <a href="#review"><li className=" cursor-pointer " > Contact</li></a>
        </ul>
      </div>

    </div>
    
  );
}
