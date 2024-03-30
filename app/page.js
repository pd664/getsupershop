import Image from "next/image";
import Boostsales from "./_components/_body/Boostsales";
import SalesChannel from "./_components/_body/SalesChannel";
import Accelarate from "./_components/_body/accelerate/Accelarate";
import Products from "./_components/_body/_products/Products";
import productsData from "./_components/_body/_products/productsData";

export default function Home() {
  return (
   <div>
     <Boostsales />
    <SalesChannel />
    
    <Products  productsData={productsData} />
    <Accelarate />
   </div>
  );
}
