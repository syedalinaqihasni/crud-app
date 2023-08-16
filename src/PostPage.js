import {
  Text,
  Heading,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
} from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import DOMPurify from "dompurify";
import "../src/components/style.css";
import { findByText } from "@testing-library/react";

const PostPage = () => {
  const { id } = useParams();

  const [apiData, setApiData] = useState("");
  const [categories, setCategories] = React.useState([]);
  const [postCategory, setPostCategory] = useState([]);
  const [finalcategory, setFinalCategory] = useState([]);

  useEffect(() => {
    const getData = () => {
      axios
        .get(`https://esparkconsultants.com/old/wp-json/wp/v2/posts/${id}`)
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
        .get(`https://esparkconsultants.com/old/wp-json/wp/v2/categories`)
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

  // console.log(apiData);Categories

  return (
    <>
   
        <Card align="center" h='100vh'>  
          <CardHeader>
            <Heading size="lg" textAlign='center' mb='10px'> Complete Blog</Heading>
            <Text className="post-page-title" color='teal.600'>{apiData?.title?.rendered}</Text>
          </CardHeader>
          <CardBody>
            <Text className="content-data"
              dangerouslySetInnerHTML={{ __html: DOMPurify?.sanitize(data) }}
            >
            </Text>
          
          </CardBody>
          <CardFooter>
            <Text color='teal.600' fontWeight='bold' >
              Category : 
            </Text>
            <Text textAlign="center" color='black' ml='5px'> 
            {finalcategory}
            </Text>
          </CardFooter>
        </Card>
    </>
  );
};

export default PostPage;
