import React, { useState } from 'react';
import axios from 'axios';


const WordPressPostForm = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const username = 'admin'; // Replace with your WordPress username
  const password = '9EV5 UKhj 7N64 djFP jNT1 qvVZ'; // Replace with your WordPress password
  const base64Credentials = btoa(`${username}:${password}`);
  const handleCreatePost = async () => {
    const newPost = {
      title: title,
      content: content,
      status: 'publish'
    };
    try {
      const response = await axios.post(
        'https://esparkconsultants.com/old/wp-admin/',
        newPost,
        {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Basic ${base64Credentials}`
          },
        }
      );
      console.log('New Post:', response.data);
    } catch (error) {
      console.error('Error creating post:', error);
    }
  };
  return (
    <div className='flex'>
      <h2>Create a New WordPress Post</h2>
      <input className='title'
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        placeholder="Content"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <button onClick={handleCreatePost}>Create Post</button>
    </div>
  );
};
export default WordPressPostForm;