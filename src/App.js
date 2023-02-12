import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import SearchPage from "./components/main/SearchPage";
import HomePage from "./components/main/HomePage";
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import ErrorPage from "./components/ErrorPage";
import CardAndReview from "./components/main/CardAndReview";

function App() {
  return (
    <BrowserRouter>
    <Header/>
        <Routes>
          <Route path='/' element={<SearchPage/>} />
          <Route path='*' element={<ErrorPage/>} />
          <Route path='/Homepage' element={<HomePage/>}/>
        </Routes>
        <CardAndReview/>
      <Footer/>
    </BrowserRouter>
  );
}
export default App;
