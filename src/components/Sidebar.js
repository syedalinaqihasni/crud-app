import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
import {
  Box,
  IconButton,
  Button,
  Text,
  VStack,
  useDisclosure,
  Stack,
  Icon,
} from "@chakra-ui/react";
import React from "react";
import { useNavigate } from "react-router-dom";

const Sidebar = () => {
  const { isOpen, onToggle } = useDisclosure();
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/esparkBlogs");
  };

  const handleClickCareers = () => {
    navigate("./eSparkCareers");
  };
  return (
    <>
      <Box
        pos="fixed"
        left={0}
        top={0}
        h="100vh"
        w={isOpen ? "250px" : "100  px"}
        bg="green.90"
        color="white"
        boxShadow="lg"
        transition="width 0.3s"
      >
        <Button
          colorScheme="teal"
          variant="outline"
          icon={isOpen ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          aria-label="Collapse Sidebar"
          onClick={onToggle}
          mt={2}
          mx="auto"
          // w="100px"
        >
          {isOpen ? <ChevronLeftIcon /> : <ChevronRightIcon />}
        </Button>

        <VStack
          display="flex"
          justifyContent="space-between"
          gap="20px"
          pt="20px"
          color="black"
          visibility={isOpen ? "visible" : "hidden"}
        >
          <Button
            colorScheme="teal"
            variant="ghost"
            onClick={() => handleClick()}
          >
            eSpark Blogs
          </Button>

          <Button
            colorScheme="teal"
            variant="ghost"
            onClick={() => handleClickCareers()}
          >
            eSpark Careers
          </Button>
        </VStack>
      </Box>
    </>
  );
};

export default Sidebar;
