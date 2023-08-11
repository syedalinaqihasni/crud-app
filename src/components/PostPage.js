
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { useParams } from 'react-router-dom';
// import {apiData} from './Read/apiData'

// const PostPage = () => {
//   const { postId } = useParams();
//   const [post, setPost] = useState({});
//   const filterData = apiData.filter((item) => item ?.id === postId)
// //   console.log(postId, 'postId');
// //   console.log(filterData);

// console.log(apiData,'post data');

//   useEffect(() => {
//     // axios.get(`/wp/v2/posts/${postId}`)
//     axios.get(`https://demo.tagdiv.com/newspaper_pro/wp-json/wp/v2/pages/${postId}`)
//       .then(response => {
//         setPost(response.data);
//       })
//       .catch(error => {
//         console.error('Error fetching post:', error);
//       });
//   }, [postId]);console.log(postId)

//   return (

//     // <div>
//     //   <h1>{post.title.rendered}</h1>
//     //   <div dangerouslySetInnerHTML={{ __html: post.content.rendered }} />
//     // </div>
//     <h1>post page</h1>
//   );
// };

// export default PostPage;