import React from 'react'
import Etfs from './Etfs'

import { Metadata } from "next";

export const metadata : Metadata = {
    title: "ETFS",
  };
  
const etfs = () => {
  return (
    <div>
      <Etfs/>
    </div>
  )
}

export default etfs
