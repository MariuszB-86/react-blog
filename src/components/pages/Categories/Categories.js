import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getAllCategories } from '../../../redux/categoryRedux';
import { Card } from 'react-bootstrap';

const Categories = () => {

    const categories = useSelector(getAllCategories);

    return (
        <div>
            <h1>All categories</h1>
            {categories.map(category => 
              <Card key={category}>
                <Card.Body><Link  to={`/category/${category}`}>{category}</Link></Card.Body>
              </Card>
            )}
        </div>
    );
};

export default Categories;