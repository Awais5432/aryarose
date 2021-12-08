import dynamic from "next/dynamic";
// import Container from '@components/ui/container';
const Container = dynamic(() => import("@components/ui/container"));

// import Layout from '@components/layout/layout';
const Layout = dynamic(() => import("@components/layout/layout"));

// import Map from '@components/ui/map';
const Map = dynamic(() => import("@components/ui/map"));
// import PageContactHeroSection from '@components/ui/page-contact-hero-section';
const PageContactHeroSection = dynamic(() => import("@components/ui/page-contact-hero-section"));

import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
// import DownloadApps from '@components/common/download-apps';
const DownloadApps = dynamic(() => import("@components/common/download-apps"));
// import ContactForm from '@components/common/form/contact-form';
const ContactForm = dynamic(() => import("@components/common/form/contact-form"));
// import ContactSupport from '@components/contact/contact-support';
const ContactSupport = dynamic(() => import("@components/contact/contact-support"));
// import ContactInformation from '@components/contact/contact-information';
const ContactInformation = dynamic(() => import("@components/contact/contact-information"));
// import Seo from '@components/seo/seo';
const Seo = dynamic(() => import("@components/seo/seo"));

export default function ContactUsPage() {
  return (
    <>
      <Seo
        title="Contact Us"
        description="Fastest E-commerce template built with React, NextJS, TypeScript, React-Query and Tailwind CSS."
        path="contact-us"
      />
      <PageContactHeroSection />
      <Container>
        <div className="max-w-[1420px] mx-auto mb-12 lg:mb-14 xl:mb-16">
          <div className="flex flex-wrap bg-skin-fill w-full p-5 md:p-7 lg:p-10 xl:p-16 3xl:px-[70px] xl:py-12 shadow-contact rounded-md -mt-8 relative z-10">
            <div className="w-full md:w-[53%] xl:w-[60%] md:pe-8 lg:pe-0 2xl:pe-24 lg:mb-0 mb-8">
              <ContactSupport />
            </div>
            <div className="w-full md:w-[47%] xl:w-[40%] pb-0.5 lg:ps-12 pt-1.5">
              <ContactForm />
            </div>
          </div>
        </div>
        <ContactInformation />
      </Container>
      <div className="mt-12 md:mt-16 xl:mt-20 2xl:mt-24 bg-skin-three relative h-[420px]">
        <Map
          lat={1.295831}
          lng={103.76261}
          height={'420px'}
          zoom={15}
          showInfoWindow={true}
        />
      </div>
      <DownloadApps />
    </>
  );
}

ContactUsPage.Layout = Layout;

export const getStaticProps = async ({ locale }: any) => {
  return {
    props: {
      ...(await serverSideTranslations(locale, [
        'common',
        'forms',
        'menu',
        'footer',
      ])),
    },
  };
};
