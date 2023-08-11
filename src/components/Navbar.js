import React from "react";
import { Box, Flex, Spacer, chakra, Image } from "@chakra-ui/react";
import logo from "../Images/logo.png";
import Read from "./Read";
import Sidebar from "./Sidebar";

const Navbar = (props) => {
  return (
    // <chakra.header  bg="gray.800" px={4} py={3}>
    //   <Flex alignItems="center" justifyContent="space-between">
    //     <Box>
    //       <chakra.a href="/" fontSize="xl" fontWeight="bold" color="white">
    //       <Image ml={60} height='10' src={logo} alt='Dan Abramov' />
    //       </chakra.a>
    //     </Box>
    //     <Spacer />
    //     <Box>
    //       <chakra.a href="/" mr={4} color="white">
    //         Home
    //       </chakra.a>
    //       {/* <chakra.a href="#" color="white">

    //       </chakra.a> */}
    //     </Box>
    //   </Flex>
    // </chakra.header>

    <Flex backgroundColor="li" align="center" justify="flex start" p="10px">
      <Box pl="20%" {...props}>
        <Image height="10" src={logo} alt="E-spark logo" />
      </Box>
      <Box pl="60%">Home</Box>
    </Flex>
  );
};

export default Navbar;
