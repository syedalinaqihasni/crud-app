// import { FormControl, FormHelperText, FormLabel, Input } from '@chakra-ui/react'
import axios from "axios";
import ReactDOM from 'react-dom/client';
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
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

import 'froala-editor/css/froala_style.min.css';
import 'froala-editor/css/froala_editor.pkgd.min.css';
import FroalaEditorComponent from 'react-froala-wysiwyg';
import FroalaEditor from "react-froala-wysiwyg";
import FroalaEditorView from "react-froala-wysiwyg/FroalaEditorView";

const Create = () => {
  const [title, setTitle] = useState([]);
  const [excerpt, setExcerpt] = useState([]);
  const [content, setContent] = useState([]);

  const root = ReactDOM.createRoot(document.getElementById('editor'));
  root.render(
    <FroalaEditorComponent tag='textarea'/>
  )

  const [model,setModel] = useState("Example Set");  
  const handleModelChange= (event)=>{
    setModel(event)
  }

  const navigate = useNavigate();

  const authToken = '';

  const headers = {
    Authorization: `Bearer ${authToken}`
  };

  const handleSubmit = (event) => {
    event.preventDefault();
   
    axios
      .post("https://esparkconsultants.com/old/wp-json/wp/v2/posts", { headers }, {
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

  const config ={
    placeholderText: 'Edit Your Content Here!',
    charCounterCount: false
  }

  return (
<>
<div id="editor">
      {/* <FroalaEditor
          tag='textarea'
          config={config}
          // model={model}
          // onModelChange={handleModelChange}
    /> */}
        <FroalaEditorComponent 
      tag='textarea'
      onModelChange={handleModelChange}
    />
    <FroalaEditorView
      model={model}
  />
    </div>
    {/* <div className="App">

  </div> */}
</>

    
    // <form onSubmit={(event) => {
    //     event.preventDefault();
    //     handleSubmit();
    //   }}>
    //   <Flex
    //     minH={"100vh"}
    //     align={"center"}
    //     justify={"center"}
    //     bg={useColorModeValue("gray.50", "gray.800")}
    //   >
    //     <Container
    //       maxW={"lg"}
    //       bg={useColorModeValue("white", "whiteAlpha.100")}
    //       boxShadow={"xl"}
    //       rounded={"lg"}
    //       p={6}
    //     >
    //       <Heading
    //         as={"h2"}
    //         fontSize={{ base: "xl", sm: "2xl" }}
    //         textAlign={"center"}
    //         mb={5}
    //       >
    //         Create your Blog page
    //       </Heading>
    //       <Stack
    //         direction={{ base: "column", md: "row" }}
    //         as={"form"}
    //         spacing={"12px"}
    //       >
    //         <FormControl>
    //           <Input
    //             variant={"solid"}
    //             borderWidth={1}
    //             color={"gray.800"}
    //             _placeholder={{
    //               color: "gray.400",
    //             }}
    //             borderColor={useColorModeValue("gray.300", "gray.700")}
    //             id={"content"}
    //             type={"content"}
    //             //   required
    //             placeholder={"Write your content here"}
    //             aria-label={"Content"}
    //             value={content}
    //             onChange={(e) => setContent(e.target.value)}
    //           />
    //         </FormControl>
    //         <FormControl w={{ base: "100%", md: "40%" }}>
    //           <Button
    //             type="submit"
    //             w="100%"
    //           >
    //             Publish
    //           </Button>
    //         </FormControl>
    //       </Stack>
    //     </Container>
    //   </Flex>
    // </form>
  );
};

export default Create;



// // Your API endpoint URL
// const apiUrl = 'https://example.com/api/endpoint';

// // Authentication token
// const authToken = 'your-auth-token';

// // Data to send in the POST request
// const postData = {
//   key1: 'value1',
//   key2: 'value2',
//   // ...other data
// };

// // Headers containing authentication token
// const headers = {
//   Authorization: `Bearer ${authToken}`
// };

// // Make the POST request
// axios.post(apiUrl, postData, { headers })
//   .then(response => {
//     // Handle successful response
//     console.log('Response:', response.data);
//   })
//   .catch(error => {
//     // Handle error
//     console.error('Error:', error);
//   });

//   basic (authkey)
//   boas