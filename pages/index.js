import { Grid, GridItem, Button } from "@chakra-ui/react";

import Header from "src/components/Header";


function HomePage() {  
  return (
    <>
      <Header/>
      <main>
        <section className="bodyContent">
          <Grid
          h="150vh"
          templateRows="repeat(12, 1fr)"
          templateColumns="repeat(12, 1fr)"
          gap={4}
        >
          <GridItem padding="20px" rowSpan={8} colSpan={6} bg="brand.800">
            <Button colorScheme="blue">Button</Button>
          </GridItem>
          <GridItem padding="20px" rowSpan={4} colSpan={6} bg="brand.900" />
          <GridItem padding="20px" rowSpan={4} colSpan={6} bg="brand.700" />
          <GridItem padding="20px" rowSpan={4} colSpan={12} bg="brand.800" />
        </Grid>
        </section>
      </main>
    </>
  )
};


export default HomePage;