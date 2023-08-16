// import { FormControl, FormHelperText, FormLabel, Input } from '@chakra-ui/react'
import axios from "axios";
import { useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { FormEvent, ChangeEvent } from "react";
import {
  Stack,
  FormControl,
  Input,
  Button,
  useColorModeValue,
  Heading,
  Container,
  Flex,
} from "@chakra-ui/react";
// import { CheckIcon } from "@chakra-ui/icons";

const Create = () => {
  const [title, setTitle] = useState([]);
  const [excerpt, setExcerpt] = useState([]);
  const [content, setContent] = useState([]);

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
   
    axios
      .post("https://esparkconsultants.com/old/wp-json/wp/v2/posts", {
        title: title,
        content: content,
        excerpt: excerpt,
      })
      .then(() => {
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  console.log(content);
  return (
    
    <form onSubmit={(event) => {
        event.preventDefault();
        handleSubmit();
      }}>
      <Flex
        minH={"100vh"}
        align={"center"}
        justify={"center"}
        bg={useColorModeValue("gray.50", "gray.800")}
      >
        <Container
          maxW={"lg"}
          bg={useColorModeValue("white", "whiteAlpha.100")}
          boxShadow={"xl"}
          rounded={"lg"}
          p={6}
        >
          <Heading
            as={"h2"}
            fontSize={{ base: "xl", sm: "2xl" }}
            textAlign={"center"}
            mb={5}
          >
            Create your Blog page
          </Heading>
          <Stack
            bg="red"
            direction={{ base: "column", md: "row" }}
            as={"form"}
            spacing={"12px"}
          >
            <FormControl>
              <Input
                variant={"solid"}
                borderWidth={1}
                color={"gray.800"}
                _placeholder={{
                  color: "gray.400",
                }}
                borderColor={useColorModeValue("gray.300", "gray.700")}
                id={"content"}
                type={"content"}
                //   required
                placeholder={"Write your content here"}
                aria-label={"Content"}
                value={content}
                onChange={(e) => setContent(e.target.value)}
              />
            </FormControl>
            <FormControl w={{ base: "100%", md: "40%" }}>
              <Button
                type="submit"
                w="100%"
              >
                Publish
              </Button>
            </FormControl>
          </Stack>
        </Container>
      </Flex>
    </form>
  );
};

export default Create;
