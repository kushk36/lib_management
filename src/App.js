import './App.css';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import SignUp from './Pages/SignUp';
import Login from './Pages/Login';
import Home from './Components/Home';
import AddBook from './Pages/AddBook';
import Profile from './Components/Profile'
import ViewBook from './Components/ViewBook';
import Layout from './Components/Layout';
import IssueBook from './Components/IssueBook';
import NonReturnedBook from './Components/NonReturnedBook';
import { BookProvider } from './Context/BookContext';

function App() {
  return (
    <BookProvider>
      <Router>
        <Routes>
          <Route path='/' element={<SignUp />} />
          <Route path='/sign-up' element={<SignUp />} />
          <Route path='/log-in' element={<Login />} />
          {/* <Route path='/add-book' element={<AddBook />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/:bookId/:bookTitle' element={<ViewBook />} />
        <Route path='/home' element={<Home />} /> */}
          <Route path='/add-book' element={<Layout><AddBook /></Layout>} />
          <Route path='/profile' element={<Layout><Profile /></Layout>} />
          <Route path='/:bookId/:bookTitle' element={<Layout><ViewBook /></Layout>} />
          <Route path='/home' element={<Layout><Home /></Layout>} />
          <Route path='/issueBooks' element={<Layout><IssueBook /> </Layout>} />
          <Route path='/nonReturnedBooks' element={<Layout><NonReturnedBook /> </Layout>} />
        </Routes>
      </Router>
    </BookProvider>
  );
}

export default App;
