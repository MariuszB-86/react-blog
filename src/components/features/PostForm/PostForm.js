import { Form, Button } from 'react-bootstrap';
import { useState } from 'react';

const PostForm = ({ action, actionText, ...props }) => {

  const [title, setTitle] = useState(props.title || '');
  const [author, setAuthor] = useState(props.author || '');
  const [publishedDate, setPublishedDate] = useState(props.publishedDate || '');
  const [shortDescription, setShortDescription] = useState(props.shortDescription || '');
  const [content, setContent] = useState(props.content || '');

  const handleSubmit = e => {
    e.preventDefault();
    action({ title, author, publishedDate, shortDescription, content });
  };

    return (
        <Form className="mx-auto w-75" onSubmit={handleSubmit}>
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
            <Button variant="primary" type="submit">
              {actionText}
            </Button>
        </Form>
    );
};

export default PostForm;