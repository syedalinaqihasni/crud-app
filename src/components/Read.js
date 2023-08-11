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
  Text
} from "@chakra-ui/react";
import { DeleteIcon, EditIcon } from "@chakra-ui/icons";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import DOMPurify from "dompurify";

const Read = () => {
  const navigate = useNavigate();
  
  //  dangerouslySetInnerHTML={{ __html: DOMPurify?.sanitize(data) }}

  const [apiData, setApiData] = useState([]);

  useEffect(() => {
    const getData = () => {
      axios
        .get("https://demo.tagdiv.com/newspaper_pro/wp-json/wp/v2/posts")
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
    navigate(`/postpage/${id}`);
  };
  console.log(apiData, 'espark careers')

 
  return (
    
    <>
      <TableContainer mt={8}>
        <Table
          variant="striped"
          colorScheme="gray"
          size="sm"
   
        >
          <Thead background='gray.300'>
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
                  <Td onClick={() => handleClick(item.id)} whiteSpace="initial">
                    <Heading
                      size="sm"
                      _hover={{ bg: "blue.100" }}
                      colorScheme="linkedin"
                      style={{cursor: 'pointer'}}
                    >
                      {item.title.rendered}
                    </Heading>
                    <br />
                    <Text style={{ textWrap: "balance" }} dangerouslySetInnerHTML={{ __html: DOMPurify?.sanitize(item.excerpt.rendered) }}>

                    </Text>
                  </Td>
                  <Td>{item.status}</Td>
                  <Td>{item.modified}</Td>
                  <Td>
                    <Button mr={2} colorScheme="teal" variant="outline">
                      {<DeleteIcon viewBox="20" w={8} h={8} color="red.500" />}
                    </Button>
                    <Button colorScheme="teal" variant="outline">
                      {<EditIcon viewBox="15" w={7} h={7} color="green.500" />}
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
