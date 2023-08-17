import { useState, useEffect } from "react";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  Button,
  Heading,
  Text,
  Box,
  HStack,
} from "@chakra-ui/react";
import { DeleteIcon, EditIcon } from "@chakra-ui/icons";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import DOMPurify from "dompurify";

const Read = () => {
  const navigate = useNavigate();

  //  dangerouslySetInnerHTML={{ __html: DOMPurify?.sanitize(data) }}

  const [apiData, setApiData] = useState([]);

  useEffect(() => {
    const getData = () => {
      axios
        .get("https://esparkconsultants.com/old/wp-json/wp/v2/posts")
        .then((res) => {
          setApiData(res.data);
          console.log(res.data);
        })
        .catch((err) => {
          setApiData(err);
        });
    };
    getData();
  }, []);
  const handleClick = (id) => {
    console.log(id, "id");
    navigate(`/blogs/${id}`);
  };

  return (
    <>
      <HStack justify="flex-end" my={3} color="teal" pr="20">
        <Button colorScheme="teal" variant='solid'>
          <Link to="/create">Add New Blog</Link>
        </Button>
      </HStack>

      <TableContainer>
        <Table
          // variant="striped"
          colorScheme="gray"
          size="sm"
        >
          <Thead background="#b9cccf">
            <Tr>
              <Th>S.no</Th>
              <Th>Post Title</Th>
              <Th>Post Status</Th>
              <Th>Last Modified</Th>
              <Th>Action</Th>
            </Tr>
          </Thead>

          {apiData?.map((item, index) => {
            return (
              <Tbody>
                <Tr>
                  <Td>{index + 1}</Td>
                  <Td whiteSpace="initial">
                    <Text
                      as="b"
                      onClick={() => handleClick(item.id)}
                      _hover={{ bg: "#f9f9f9" }}
                      colorScheme="linkedin"
                      style={{ cursor: "pointer" }}
                    >
                      {item.title.rendered}
                    </Text>
                    <br />
                    <Text
                      style={{ textWrap: "balance" }}
                      dangerouslySetInnerHTML={{
                        __html: DOMPurify?.sanitize(item.excerpt.rendered),
                      }}
                    ></Text>
                  </Td>
                  <Td>
                    <Button
                      size="sm"
                      colorScheme="teal"
                      variant="solid"
                      style={{ cursor: "pointer" }}
                    >
                      {item.status}
                    </Button>
                  </Td>
                  <Td>{item.modified}</Td>
                  <Td>
                    <Button variant="ghost" mr="-2">
                      {<DeleteIcon color="red.500" />}
                    </Button>
                    <Button variant="ghost">
                      {<EditIcon color="green.500" />}
                    </Button>
                  </Td>
                </Tr>
              </Tbody>
            );
          })}
        </Table>
      </TableContainer>
    </>
  );
};
export default Read;
