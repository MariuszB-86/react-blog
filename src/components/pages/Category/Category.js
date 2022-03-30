import { useSelector } from 'react-redux';
import { getPostsByCategory } from '../../../redux/postRedux';
import { useParams } from 'react-router';
import { Row, Col, Button} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { dateToStr } from '../../../utils/dateToStr';

const Category = () => {

    const { catName } = useParams();
    const postsByCategory = useSelector(state => getPostsByCategory(state, catName));

    return (
        <div>
            <h1>Category: {`${catName}`}</h1>
            <div>
            <Row className=" my-4 d-flex">
              {postsByCategory.map(post => 
                <Col className="border p-3 m-2 col-12 col-lg-3 flex-grow-1" 
                  key={post.id}>
                  <h4>{post.title}</h4>
                  <p className="m-0"><span className="fw-bold">Author:</span> {post.author}</p>
                  <p className="m-0"><span className="fw-bold">Published:</span> {dateToStr(post.publishedDate)}</p>
                  <p><span className="fw-bold">Category:</span> {post.category}</p>
                  <p>{post.shortDescription}</p>
                  <Link to={`/post/${post.id}`}>
                    <Button variant="primary">Read more</Button>
                  </Link> 
                </Col>)}
            </Row>
      </div>
        </div>
    );
};

export default Category;