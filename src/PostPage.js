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
  Container,
} from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import DOMPurify from "dompurify";

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
          //  console.log(res.data,'apiData')
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
          // console.log(res.data, 'line 30');
        })
        .catch((err) => err);
    };
    getData();
    categoriesData();
  }, []);

  useEffect(() => {
    const categoryMatch = categories?.filter(
      (category) => category?.id === postCategory[0]
    );

    setFinalCategory(categoryMatch[0]?.name);
    console.log("categories", categoryMatch[0]?.name);
  }, [categories, postCategory]);

  const data = apiData?.content?.rendered;

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
<Container ml='40%'> 
<Card  align='center'>
  <CardHeader>
    <Heading size='md'> Content</Heading>
  </CardHeader>
  <CardBody>
    <Text dangerouslySetInnerHTML={{ __html: DOMPurify?.sanitize(data) }}></Text>
  </CardBody>
  {/* <CardFooter>
    <Button colorScheme='blue'>View here</Button>
  </CardFooter> */}
</Card>
</Container>

    </>
  );
};

export default PostPage;
