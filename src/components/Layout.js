import React from "react";
import Navbar from "./Navbar";
import { Box } from "@chakra-ui/react";
import Sidebar from "./Sidebar";

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <Sidebar />
      <Box maxWidth="60%" margin="auto">
        {children}
      </Box>
    </>
  );
};

export default Layout;
