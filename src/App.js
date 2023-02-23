import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import SearchPage from "./components/main/SearchPage/SearchPage";
import HomePage from "./components/main/HomePage/HomePage";
import InfoPage from "./components/main/infoPage/InfoPage";
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import ErrorPage from "./components/ErrorPage";
import PaymentPage from "./components/main/PaymentPage/PaymentPage";
function App() {
  return (
    <BrowserRouter>
    <Header/>
        <Routes>
          <Route path='/' element={<SearchPage/>} />
          <Route path='/Homepage' element={<HomePage/>}/>
          <Route path='/InfoPage' element={<InfoPage/>}/>
          <Route path='/PaymentPage' element={<PaymentPage/>}/>
          <Route path='*' element={<ErrorPage/>} />
        </Routes>
    <Footer/>
    </BrowserRouter>
  );
}
export default App;
