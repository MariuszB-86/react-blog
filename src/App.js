import Home from './components/pages/Home/Home';
import { Routes, Route} from 'react-router-dom';
import SinglePost from './components/pages/SinglePost/SinglePost';
import AddPost from './components/pages/AddPost/AddPost';
import EditPost from './components/pages/EditPost/EditPost';
import About from './components/pages/About/About';
import NotFound from './components/pages/NotFound/NotFound';
import Header from './components/views/Header/Header';
import Footer from './components/views/Footer/Footer';
import Categories from './components/pages/Categories/Categories';
import Category from './components/pages/Category/Category';
import { Container } from 'react-bootstrap';

function App() {
  return (
    <div>
      <Container>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/post/:postId" element={<SinglePost />} />
          <Route path="/post/add" element={<AddPost />} />
          <Route path="/post/edit/:postId" element={<EditPost />} />
          <Route path="/about" element={<About />} />
          <Route path="/*" element={<NotFound />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/category/:catName" element={<Category />} /> 
        </Routes>
        <Footer />
      </Container>
    </div>
  );
}

export default App;
