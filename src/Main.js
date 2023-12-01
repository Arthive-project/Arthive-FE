/** @jsxImportSource @emotion/react */
import { Global, css } from '@emotion/react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './components/App';
import Home from './pages/Home';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import MyPage from './pages/MyPage';
import Search from './pages/Search';
import MyLikes from './pages/MyLikes';
import ExhibitionDetail from './pages/Boards/ExhibitionDetail';
import ExhibitionRegisterUser from './pages/Boards/ExhibitionRegisterUser';
import About from './pages/Boards/About';
import NotFound from './pages/NotFound';
import MyRegisterList from './pages/MyRegisterList';
import MyRegisterDetail from './pages/MyRegisterDetail';

// 카테고리
import Exhibition from './pages/Boards/Exhibition';
import Tradition from './pages/Boards/Tradition';
import Citizen from './pages/Boards/Citizen';
import Classical from './pages/Boards/Classical';
import Nature from './pages/Boards/Nature';
import Culture from './pages/Boards/Culture';
import OtherFestival from './pages/Boards/OtherFestival';
import Theater from './pages/Boards/Theater';
import Musical from './pages/Boards/Musical';
import Dance from './pages/Boards/Dance';
import Concert from './pages/Boards/Concert';

// 어드민
import ExhibitionRegister from './pages/Admin/ExhibitionRegister';
import GalleryRegister from './pages/Admin/GalleryRegister';

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
        <Route path='/' element={<App />}>
          <Route index element={<Home />} />
          <Route path='login' element={<Login />} />
          <Route path='sign-up' element={<SignUp />} />
          <Route path='my-page' element={<MyPage />} />
          <Route path='my-register' element={<MyRegisterList />} />
          <Route
            path='my-register/:registerId'
            element={<MyRegisterDetail />}
          />
          <Route path='search' element={<Search />} />
          <Route path='my-likes' element={<MyLikes />} />

          <Route path='exhibition'>
            <Route index element={<Exhibition />} />
            <Route path=':exhibitionId' element={<ExhibitionDetail />} />
            <Route path='register' element={<ExhibitionRegisterUser />} />
          </Route>

          <Route path='tradition'>
            <Route index element={<Tradition />} />
            <Route path=':traditionId' element={<ExhibitionDetail />} />
          </Route>

          <Route path='nature'>
            <Route index element={<Nature />} />
            <Route path=':natureId' element={<ExhibitionDetail />} />
          </Route>

          <Route path='citizen'>
            <Route index element={<Citizen />} />
            <Route path=':citizenId' element={<ExhibitionDetail />} />
          </Route>

          <Route path='culture'>
            <Route index element={<Culture />} />
            <Route path=':cultureId' element={<ExhibitionDetail />} />
          </Route>

          <Route path='other-festival'>
            <Route index element={<OtherFestival />} />
            <Route path=':otherId' element={<ExhibitionDetail />} />
          </Route>

          <Route path='theater'>
            <Route index element={<Theater />} />
            <Route path=':theaterId' element={<ExhibitionDetail />} />
          </Route>

          <Route path='musical'>
            <Route index element={<Musical />} />
            <Route path=':musicalId' element={<ExhibitionDetail />} />
          </Route>

          <Route path='dance'>
            <Route index element={<Dance />} />
            <Route path=':danceId' element={<ExhibitionDetail />} />
          </Route>

          <Route path='classical'>
            <Route index element={<Classical />} />
            <Route path=':classicalId' element={<ExhibitionDetail />} />
          </Route>

          <Route path='concert'>
            <Route index element={<Concert />} />
            <Route path=':concertId' element={<ExhibitionDetail />} />
          </Route>

          {/* Admin */}

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
