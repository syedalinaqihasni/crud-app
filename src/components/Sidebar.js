import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
import { Box, Button, List, ListItem, VStack, useDisclosure } from "@chakra-ui/react";
import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Sidebar = () => {
  return (
    <>
      <List spacing={6} fontSize='md'>
        <ListItem px={2} _hover={{ bg: "#f9f9f9" }} >
          <Link to={"/blogs"} colorScheme="teal.600" variant="ghost">
            eSpark Blogs
          </Link>
        </ListItem >
        <ListItem px={2} _hover={{ bg: "#f9f9f9" }}>
          <Link to={"/careers"} colorScheme="teal.600" variant="ghost">
            eSpark Careers
          </Link>
        </ListItem>
      </List>
    </>
  );
};

export default Sidebar;
