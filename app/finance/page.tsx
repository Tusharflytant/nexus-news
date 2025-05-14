import Navlist from '@/components/Navlist';
import money from '@/constants/money';
import { Metadata } from "next";

export const metadata : Metadata = {
    title: "FINANCE",
  };

const Finance = () => {
  return <Navlist pageTitle="FINANCE" posts={money} />;
};

export default Finance;