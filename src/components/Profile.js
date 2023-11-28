import Image from "next/image";
import React, { useEffect } from "react";
import Logo from "../../public/images/mmg-logo-negro.png";
const Profile = ({ profileData }) => {
  const {
    nombre_apellido,
    description,
    images: { foto_perfil },
  } = profileData.attributes;

  const src = foto_perfil.data.attributes.url;
  const myLoader = ({ src }) => {
    return src;
  };

  return (
    <>
      <div className="-space-x-1 mt-[-45%] relative z-10 shadow-md sha rounded-3xl">
        <div className="flex items-center bg-transparent rounded-3xl">
          <Image
            className="rounded-l-3xl inline-block object-contain h-48 max-w-[50%]"
            src={Logo}
            width={500}
            height={500}
            alt={`Foto de ${nombre_apellido}`}
          />
          {/* <Image
            className="rounded-l-3xl inline-block object-cover h-52 w-52"
            loader={myLoader}
            src={src}
            width={500}
            height={500}
            alt={`Foto de ${nombre_apellido}`}
          /> */}
          <div className="bg-white h-48 rounded-tr-lg rounded-br-lg">
            <div className="text-black w-full flex flex-col items-start gap-y-3.5 p-5">
              {/* <Image src={Logo} height={100} width={100} /> */}
              <h1 className="font-bold text-3xl text-left">{nombre_apellido}</h1>
              <p className="text-xs tracking-wider font-bold">{description}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
