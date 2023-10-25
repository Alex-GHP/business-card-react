import React from "react";

function FirstSection() {
  return (
    <div>
      <section className="flex flex-row gap-4 justify-center mt-4">
        <a
          href="alex.morariu.dev@gmail.com"
          className="text-[#374151] border-2 border-solid border-white bg-white py-1 w-28 text-center rounded-md font-bold"
        >
          <img src="" alt="" />
          Email
        </a>
        <a
          href="https://www.linkedin.com/in/alexandru-gabriel-morariu-8657b0289/"
          className="text-white border-2 border-solid border-[#5093E2] py-1 w-28 text-center bg-[#5093E2] rounded-md font-bold"
        >
          <img src="" alt="" />
          LinkedIn
        </a>
      </section>
    </div>
  );
}

export default FirstSection;
