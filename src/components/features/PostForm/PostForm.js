import { Form, Button } from 'react-bootstrap';
import { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useForm } from "react-hook-form";
import { getAllCategories } from '../../../redux/categoryRedux';
import { useSelector } from 'react-redux';


const PostForm = ({ action, actionText, ...props }) => {

  const [title, setTitle] = useState(props.title || '');
  const [author, setAuthor] = useState(props.author || '');
  const [publishedDate, setPublishedDate] = useState(props.publishedDate || '');
  const [shortDescription, setShortDescription] = useState(props.shortDescription || '');
  const [content, setContent] = useState(props.content || '');
  const [contentError, setContentError] = useState(false);
  const [dateError, setDateError] = useState(false);
  const [category, setCategory] = useState(props.category || '');
   
  const categories = useSelector(getAllCategories);

  const { register, handleSubmit: validate, formState: { errors } } = useForm();
  
  const handleSubmit = () => {
    setContentError(!content);
    setDateError(!publishedDate);
    if(content && publishedDate){
      action({ title, author, publishedDate, category, shortDescription, content });
    }
  };
    return (
        <Form className="mx-auto w-75" onSubmit={validate(handleSubmit)}>
            <Form.Group className="mb-3 w-25">
              <Form.Label>Title</Form.Label>
              <Form.Control 
              {...register("title", {required: true, minLength: 3})}
              value={title}
              onChange={e => setTitle(e.target.value)} 
              type="text" placeholder="Enter title" 
            /> 
            {errors.title && <small className="d-block form-text text-danger mt-2">This field is required and must be longer than 3 letters</small>}
            </Form.Group>
            <Form.Group className="mb-3 w-25">
              <Form.Label>Author</Form.Label>
              <Form.Control
              {...register("author", {required: true, minLength: 3})}
              value={author} 
              onChange={e => setAuthor(e.target.value)}
               type="text" placeholder="Enter author"  
               />
              {errors.author && <small className="d-block form-text text-danger mt-2">This field is required and must be longer than 3 letters</small>}
            </Form.Group>
            <Form.Group className="mb-3 w-25">
              <Form.Label>Published</Form.Label>
              <DatePicker selected={publishedDate} onChange={(date) => setPublishedDate(date)} />
              {dateError && <small className="d-block form-text text-danger mt-2">The date field can't be empty</small>}
            </Form.Group>
            <Form.Group className="mb-3 w-75">
              <Form.Label>Category</Form.Label>
              <Form.Select aria-label="Default select example"  value={category} onChange={(e) => setCategory(e.target.value)}>
              <option>Select category...</option>
              {categories.map(category => <option key={category}>{category}</option>)}
              </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3 w-75">
              <Form.Label>Short description</Form.Label>
              <Form.Control 
              {...register("shortDescription", {required: true, minLength: 20})}
              value={shortDescription} 
              onChange={e => setShortDescription(e.target.value)} 
              as="textarea" rows={4} placeholder="Leave a comment here"  
              />
              {errors.shortDescription && <small className="d-block form-text text-danger mt-2">This field is required and must be longer than 20 letters</small>}
            </Form.Group>
            <Form.Group className="mb-3 w-75">
              <Form.Label>Main content</Form.Label>
              <ReactQuill theme="snow" placeholder="Leave a comment here" value={content} onChange={setContent}/>
              {contentError && <small className="d-block form-text text-danger mt-2">Content can't be empty</small>}
            </Form.Group>
            <Button variant="primary" type="submit">
              {actionText}
            </Button>
        </Form>
    );
};

export default PostForm;