import Banner from "@/components/Banner";
import ListProducts from "@/components/ListProducts";
// import { Container } from "@mui/material";

export default function Home() {

  return (
    <div>
      <Banner/>

      <div className="flex justify-center mt-14 ">
        <ListProducts/>
      </div>
    </div>
  );
}
