import ListProducts from "@/components/ListProducts";
import { Container } from "@mui/material";

export default function Home() {

  return (
    <div className="">
      <Container className="mt-28">
        <ListProducts/>
      </Container>
    </div>
  );
}
