import Navlist from '@/components/Navlist';
import entertainment from '@/constants/entertainment';
import { Metadata } from "next";

export const metadata : Metadata = {
    title: "TRADING",
  };

const Trading = () => {
  return <Navlist pageTitle="TRADING" posts={entertainment} />;
};

export default Trading;