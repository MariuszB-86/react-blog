import { Form, Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { addPost } from '../../../redux/postRedux';
import { useState } from 'react';
import { useNavigate } from "react-router-dom";

const AddPostForm = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [publishedDate, setPublishedDate] = useState('');
  const [shortDescription, setShortDescription] = useState('');
  const [content, setContent] = useState('');
  

  const handleAddPost = e => {
      e.preventDefault();
      dispatch(addPost({ title, author, publishedDate, shortDescription, content }));
      navigate("/");
  }; 

  return (
    <Form className="mx-auto w-75">
      <Form.Group className="mb-3 w-25">
        <Form.Label>Title</Form.Label>
        <Form.Control type="text" placeholder="Enter title" value={title} onChange={e => setTitle(e.target.value)} />
      </Form.Group>
      <Form.Group className="mb-3 w-25">
        <Form.Label>Author</Form.Label>
        <Form.Control type="text" placeholder="Enter author" value={author} onChange={e => setAuthor(e.target.value)} />
      </Form.Group>
      <Form.Group className="mb-3 w-25">
        <Form.Label>Published</Form.Label>
        <Form.Control type="text" placeholder="Enter date" value={publishedDate} onChange={e => setPublishedDate(e.target.value)} />
      </Form.Group>
      <Form.Group className="mb-3 w-75">
        <Form.Label>Short description</Form.Label>
        <Form.Control as="textarea" rows={4} placeholder="Leave a comment here" value={shortDescription} onChange={e => setShortDescription(e.target.value)} />
      </Form.Group>
      <Form.Group className="mb-3 w-75">
        <Form.Label>Main content</Form.Label>
        <Form.Control as="textarea" rows={8} placeholder="Leave a comment here" value={content} onChange={e => setContent(e.target.value)} />
      </Form.Group>
      <Button variant="primary" type="button" onClick={handleAddPost} >
        Add post
      </Button>
    </Form>
  );
};

export default AddPostForm;