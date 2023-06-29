import Banner from "@/components/Banner";
import ContactButtons from "@/components/ContactButtons";
import Footer from "@/components/Footer";
import Layout from "@/components/Layout";
import Links from "@/components/Links";
import Profile from "@/components/Profile";
import QrImage from "@/components/QrImage";
import SocialLinks from "@/components/SocialLinks";
import Vcard from "@/components/Vcard";
import Wrapper from "@/components/Wrapper";
import { useRouter } from "next/router";
import React from "react";

const Perfil = ({ data }) => {
  const router = useRouter();
  const { slug } = router.query;
  const pageTitle = slug.split("-").join(" ").toUpperCase();
  console.log(data);
  return (
    <Layout pageName={pageTitle}>
      <Banner />
      <Wrapper>
        <Profile profileData={data} />
        <div className="flex w-full gap-4">
          <Vcard vcardData={data} />
          <QrImage value={slug} />
        </div>
        <ContactButtons contactData={data} />
        <Links linksList={data.attributes.links} />
        <SocialLinks socialLinks={data.attributes.redes_sociales} />
      </Wrapper>
    </Layout>
  );
};

export default Perfil;

export async function getServerSideProps({ query: { slug } }) {
  const url = `${process.env.NEXT_PUBLIC_STRAPI_URL}/profiles?filters[Slug][$eq]=${slug}&populate=deep`;
  const req = await fetch(url);
  const res = await req.json();
  const data = res.data[0];
  return {
    props: {
      data,
    },
  };
}
