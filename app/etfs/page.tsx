
import Navlist from '@/components/Navlist';
import politics from '@/constants/politics';
import { Metadata } from "next";

export const metadata : Metadata = {
    title: "ETFS",
  };

const Etfs = () => {
  return <Navlist pageTitle="ETFS" posts={politics} />;
};

export default Etfs;
