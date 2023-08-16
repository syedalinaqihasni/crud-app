import React from "react";
import { Box, Flex, Image, Button } from "@chakra-ui/react";
import logo from "../Images/logo.png";
import { useNavigate } from "react-router-dom";

const Navbar = (props) => {
  const navigate = useNavigate();

  const handleClickHome = () => {
    navigate("/");
  };

  return (
    <Flex
      align="center"
      justifyContent="space-between"
      justify="flex start"
      px={10}
      py={1}
      bg='#f1f1f1'
    >
      <Box>
        <Image height="10" src={logo} alt="E-spark logo" />
      </Box>
      <Box mr="5">
        <Button
          colorScheme="teal"
          variant="ghost"
          // maxW="70vw"
          onClick={() => handleClickHome()}
        >
          Home
        </Button>
      </Box>
    </Flex>
  );
};

export default Navbar;
