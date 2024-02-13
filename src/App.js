import './App.css';
import Header from './Header'
import Footer from './Footer'
import Nav from './Nav'
import Home from './Home'
import PostPage from './PostPage'
import NewPost from './NewPost'
import About from './About'
import Missing from './Missing'
import EditPost from './EditPost';
import Post from './Post';
import { Routes, Route, Link, useNavigate } from 'react-router-dom';
import PostLayout from './PostLayout';

import { Dataprovider } from './Context/DataContext'

function App() {
    
  return (
    <div className="App">
      <Dataprovider>
        <Header title="Social Media App" />
        <Nav />
        <Routes>
          <Route path ="/" element= { <Home /> } />
          {/* <PostPage /> */}
          <Route path= "post" >
              <Route index element= { <NewPost />} />
              <Route path=':id' element={  <PostPage />} />
          </Route>
          <Route path='/edit/:id' element={  <EditPost />  } />
          <Route path="about" element= {
            <About />} 
          />
          <Route path="*" element= {
            <Missing /> }
          />
        </Routes>
        <Footer />
      </Dataprovider>
      
    </div>
  );
}

export default App;








// =============== Router concept code ======================

 {/* <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/postpage">PostPage</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/newpost
        " element={<NewPost />} />
        <Route path="postpage" element={<PostLayout />} >
          <Route index element={<PostPage />} />
          <Route path=":id" element={<Post />} />
          <Route path="newpost" element={<NewPost />} />  
        </Route>
        <Route path="*" element={<Missing/>} />
      </Routes> */}