import dynamic from "next/dynamic";
// import Container from '@components/ui/container';
const Container = dynamic(() => import("@components/ui/container"));
// import Layout from '@components/layout/layout';
const Layout = dynamic(() => import("@components/layout/layout"));
// import OrderInformation from '@components/order/order-information';
const OrderInformation = dynamic(() => import("@components/order/order-information"));
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { GetStaticProps } from 'next';
// import Divider from '@components/ui/divider';
const Divider = dynamic(() => import("@components/ui/divider"));
import { useEffect } from 'react';
import { useCart } from '@contexts/cart/cart.context';
// import Seo from '@components/seo/seo';
const Seo = dynamic(() => import("@components/seo/seo"));

export default function Order() {
  const { resetCart } = useCart();
  useEffect(() => {
    resetCart();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
      <Seo
        title="Order"
        description="Fastest E-commerce template built with React, NextJS, TypeScript, React-Query and Tailwind CSS."
        path="complete-order"
      />
      <Divider />
      <Container>
        <OrderInformation />
      </Container>
      <Divider />
    </>
  );
}

Order.Layout = Layout;

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale!, [
        'common',
        'forms',
        'menu',
        'footer',
      ])),
    },
  };
};
