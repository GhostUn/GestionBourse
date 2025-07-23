import Image from "next/image";
import styles from "./page.module.css";
import Navbar from "@/component/navbar";
import { LandingPage } from "@/component/LandingPage";
<link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css " rel="stylesheet" />

export default function Home() {
  return (
    
   <div className="flex md:ms-5">
    <Navbar/>
    <LandingPage/>
   </div>
  

   
  );
}
