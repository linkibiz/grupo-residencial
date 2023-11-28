import Link from "next/link";
import React from "react";

const Links = ({ linksList }) => {
  console.log(linksList[0].url)
  return (
    <div className="flex flex-col gap-3 w-full items-center">
      {linksList.map((link) => (
        <Link href={link.url} target={link.target} className="border-2 border-[#C0C0C0] mt-3 text-white w-[300px] text-center rounded-full p-3" key={link.id}>
            {link.titulo}
        </Link>
      ))}
    </div>
  );
};

export default Links;
