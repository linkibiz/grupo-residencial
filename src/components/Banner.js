import Image from "next/image";
import React from "react";
import BannerImage from "../../public/images/patron-negro.png";
import Logo from "../../public/images/linki-logo.png";

const Banner = () => {
  // bg-gradient-to-r from-[#4eb1c7] via-[#384a74] to-[#483e83]
  return (
    <div className="relative w-full">
      <Image src={Logo} className="z-10 max-h-8 object-contain absolute top-6  left-3 w-32" />
      {/* <Image src={Logo} className="z-10 max-h-8 object-contain sticky top-4 right-4  max-w-fit" /> */}
      <div className="brightness-50">
        <Image className="h-full max-h-60" src={BannerImage} alt="banner" />
      </div>
    </div>
  );
};

export default Banner;
