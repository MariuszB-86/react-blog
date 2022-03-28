import { Row, Col, Button} from 'react-bootstrap';
import { getAllPosts } from '../../../redux/postRedux';
import { useSelector} from 'react-redux';
import { Link } from 'react-router-dom';
import { dateToStr } from '../../../utils/dateToStr';

const RenderPosts = () => {

    const posts = useSelector(getAllPosts);

    return (
      <div>
        <Row>
          <Col><h1>All posts</h1></Col>
          <Col className="text-end">
            <Link to="/post/add">
              <Button variant="outline-info">Add post</Button>
            </Link>    
          </Col>
        </Row>
        <Row className=" my-4 d-flex">
          {posts.map(post => 
            <Col className="border p-3 m-2 col-12 col-lg-3 flex-grow-1" 
              key={post.id}>
              <h4>{post.title}</h4>
              <p className="m-0"><span className="fw-bold">Author:</span> {post.author}</p>
              <p><span className="fw-bold">Published:</span> {dateToStr(post.publishedDate)}</p>
              <p>{post.shortDescription}</p>
              <Link to={`/post/${post.id}`}>
                <Button variant="primary">Read more</Button>
              </Link> 
            </Col>)}
        </Row>
      </div>
    );
};

export default RenderPosts;