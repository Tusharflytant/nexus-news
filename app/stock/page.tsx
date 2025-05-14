import Navlist from '@/components/Navlist';
import usNews from '@/constants/usnews';
import { Metadata } from "next";

export const metadata : Metadata = {
    title: "STOCK",
  };

const stock = () => {
  return <Navlist pageTitle="STOCK" posts={usNews} />;
};

export default stock;