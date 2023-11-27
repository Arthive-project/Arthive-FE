/** @jsxImportSource @emotion/react */
import { Global, css } from '@emotion/react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './components/App';
import Home from './pages/Home';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import MyPage from './pages/MyPage';
// import MyRegisterDetail from './pages/MyRegisterDetail';
import Search from './pages/Search';
import MyLikes from './pages/MyLikes';
import Exhibition from './pages/Boards/Exhibition';
import ExhibitionDetail from './pages/Boards/ExhibitionDetail';
import ExhibitionRegisterUser from './pages/Boards/ExhibitionRegisterUser';
import Gallery from './pages/Boards/Gallery';
import GalleryDetail from './pages/Boards/GalleryDetail';
import ExhibitionRegister from './pages/Admin/ExhibitionRegister';
import GalleryRegister from './pages/Admin/GalleryRegister';
import About from './pages/Boards/About';
import NotFound from './pages/NotFound';
import MyRegisterList from './components/MyRegisterList';

export const globalStyle = css`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: 'Noto Sans KR';
  }

  body {
    padding: 0px;
    margin: 0px;
    overflow-x: hidden;
  }
`;

function Main() {
  return (
    <BrowserRouter>
      <Global styles={globalStyle} />
      <Routes>
        <Route pate='/' element={<App />}>
          <Route index element={<Home />} />
          <Route path='login' element={<Login />} />
          <Route path='sign-up' element={<SignUp />} />
          <Route path='my-page' element={<MyPage />} />
          <Route path='my-register' element={<MyRegisterList />} />
          <Route path='search' element={<Search />} />
          <Route path='my-likes' element={<MyLikes />} />

          <Route path='exhibition'>
            <Route index element={<Exhibition />} />
            <Route path=':exhibitionId' element={<ExhibitionDetail />} />
            <Route path='register' element={<ExhibitionRegisterUser />} />
          </Route>

          <Route path='gallery'>
            <Route index element={<Gallery />} />
            <Route path=':galleryId' element={<GalleryDetail />} />
          </Route>

          <Route path='admin'>
            {/* <Route index element={<Admin />} /> */}
            <Route
              path='exhibition-register/:exhibitionId'
              element={<ExhibitionRegister />}
            />
            <Route
              path='gallery-register/:galleryId'
              element={<GalleryRegister />}
            />
          </Route>

          <Route path='about' element={<About />} />
          <Route path='*' element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Main;
