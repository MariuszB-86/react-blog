import { useDispatch } from 'react-redux';
import { editPost } from '../../../redux/postRedux';
import { useNavigate } from "react-router-dom";
import PostForm from '../PostForm/PostForm';
import { useParams } from 'react-router';
import { useSelector } from 'react-redux';
import { getPostById } from '../../../redux/postRedux';
import { Navigate } from 'react-router-dom';

const EditPostForm = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { postId } = useParams();
  const singlePost = useSelector(state => getPostById(state, postId));
  
  const handleSubmit = post => {
      dispatch(editPost({...post, postId}));
      navigate("/");
  }; 

  if(!singlePost) return <Navigate to="/" />
  else return (
    <PostForm action={handleSubmit} actionText="Edit post" {...singlePost} />
  );
};

export default EditPostForm;