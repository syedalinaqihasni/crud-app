import React from "react";
import Navbar from "./Navbar";
import { Box, Grid, GridItem } from "@chakra-ui/react";
import Sidebar from "./Sidebar";

const Layout = ({ children }) => {
  return (
    <Grid
      templateAreas={`"header header"
                  "nav main"
                  "nav footer"`}
      gridTemplateRows={"50px 1fr 30px"}
      gridTemplateColumns={"150px 1fr"}
      h="100vh"
      gap="1"
      color="blackAlpha.700"
      fontWeight="bold"
    >
      <GridItem
        pos='fixed'
        backgroundColor="ButtonFace"
        area={"header"}
        h="15"
        w="100vw"
      >
        <Navbar />
      </GridItem>
      <GridItem
        mt="3%"
        pt="2%"
        bg="gray.200"
        h="100vh"
        pos="fixed"
        pl="2"
        area={"nav"}
        mx="30px"
      >
        <Sidebar />
      </GridItem>
      <GridItem mx="30px" mt="20px" area={"main"} bg="gray.100">
        {children}
      </GridItem>
    </Grid>
  );
};

export default Layout;
