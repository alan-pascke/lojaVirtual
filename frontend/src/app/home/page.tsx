import ListProducts from "@/components/ListProducts";
// import { Container } from "@mui/material";

export default function Home() {

  return (
    <div className="flex justify-center">
      <div className="mt-28 w-11/12 ">
        <ListProducts/>
      </div>
    </div>
  );
}
