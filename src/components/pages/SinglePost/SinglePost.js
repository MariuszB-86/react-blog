import { useParams } from 'react-router';
import { useSelector } from 'react-redux';
import { getPostById } from '../../../redux/postRedux';
import { Row, Col, Button, Modal} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { removePost } from '../../../redux/postRedux';
import { Navigate } from 'react-router-dom';

const SinglePost = () => {

  const dispatch = useDispatch();
  const { postId } = useParams();
  const singlePost = useSelector(state => getPostById(state, postId));
  const [show, setShow] = useState(false);

  const handleShow = e => {
    e.preventDefault();
    setShow(true);
  }
  const handleClose = e => {
    e.preventDefault();
    setShow(false);
  }
  const handleRemovePost = e => {
    e.preventDefault();
    dispatch(removePost( postId ));
  };
  
  if(!singlePost) return <Navigate to="/" />
  else return (
    <div> 
      <Row>
        <Col className="mx-auto w-50 p-3 col-12">
          <div className="d-flex justify-content-between mb-3">
            <h2>{singlePost.title}</h2>
            <div>
              <Link to={`/post/edit/${postId}`} className="mx-2">
                <Button variant="outline-info">Edit</Button>
              </Link> 
              <Button variant="outline-danger" onClick={handleShow}>Delete</Button>
            </div>
          </div>
          <p className="m-0"><span className="fw-bold">Author:</span> {singlePost.author}</p>
          <p><span className="fw-bold">Published:</span> {singlePost.publishedDate}</p>
          <p>{singlePost.content}</p> 
        </Col>
      </Row>
      <Modal show={show} > 
        <Modal.Dialog>
          <Modal.Header closeButton>
            <Modal.Title>Are you sure?</Modal.Title>
          </Modal.Header>
        
          <Modal.Body>
            <p>This operation will remove this post.</p>
          </Modal.Body>
        
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>Cancel</Button>
            <Button variant="primary" onClick={handleRemovePost}>Remove</Button>
          </Modal.Footer>
        </Modal.Dialog>
      </Modal>
    </div>
  );
};

export default SinglePost;