import {
  VStack,
  Box,
  Stack,
  Text,
  StackDivider,
  Heading,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Container,
} from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import DOMPurify from "dompurify";
import "../src/components/style.css";

const PostPage = () => {
  const { id } = useParams();

  const [apiData, setApiData] = useState("");
  const [categories, setCategories] = React.useState([]);
  const [postCategory, setPostCategory] = useState([]);
  const [finalcategory, setFinalCategory] = useState([]);

  useEffect(() => {
    const getData = () => {
      axios
        .get(`https://demo.tagdiv.com/newspaper_pro/wp-json/wp/v2/posts/${id}`)
        .then((res) => {
          setApiData(res.data);
          setPostCategory(res.data.categories);
        })
        .catch((err) => {
          setApiData(err);
        });
    };
    const categoriesData = () => {
      axios
        .get(`https://demo.tagdiv.com/newspaper_pro/wp-json/wp/v2/categories`)
        .then((res) => {
          setCategories(res.data);
        })
        .catch((err) => err);
    };
    getData();
    categoriesData();
  }, []);

  useEffect(() => {
    console.log(categories.map((item) => item.id));
    console.log(postCategory);
    const categoryMatch = categories?.filter(
      (category) => category?.id === postCategory[0]
    );

    setFinalCategory(categoryMatch[0]?.name);
    console.log("categories", categoryMatch[0]?.name);
  }, [categories, postCategory]);

  const data = apiData?.content?.rendered;

  // console.log(apiData);

  return (
    <>
      {/* <Box>
        <Stack ml="30%">
          <VStack>
            <Heading textAlign="center">Content</Heading>
            <div
              dangerouslySetInnerHTML={{ __html: DOMPurify?.sanitize(data) }}
            ></div>
          </VStack>
          <VStack>
            <Heading textAlign="center" size="md">
              Categories
            </Heading>
            <Text textAlign="center" color="Highlight">
              {finalcategory}
            </Text>
          </VStack>
        </Stack>
      </Box> */}
      <Container ml="40%">
        <Card align="center">
          <CardHeader>
            <Heading size="md"> Content</Heading>
          </CardHeader>
          <CardBody>
            <Text
              dangerouslySetInnerHTML={{ __html: DOMPurify?.sanitize(data) }}
            ></Text>
          </CardBody>
          <CardFooter>
            <Text textAlign="center" color="Highlight">
              {finalcategory}
            </Text>
          </CardFooter>
        </Card>
      </Container>
    </>
  );
};

export default PostPage;
