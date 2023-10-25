import React from "react";

function Header() {
  return (
    <div>
      <header className="bg-black w-screen h-48"></header>

      <section className="text-center flex gap-1 flex-col mt-4">
        <h1 className="text-white font-bold text-2xl">
          Alexandru-Gabriel Morariu
        </h1>
        <p className="text-[#F3BF99]">Computer Science Student</p>
        <p className="text-[#F5F5F5]">alexmorariu.website</p>
      </section>
    </div>
  );
}

export default Header;
