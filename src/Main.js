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
// import ExhibitionDetail from './pages/Boards/ExhibitionDetail';
// import ExhibitionRegisterUser from './pages/Boards/ExhibitionRegisterUser';
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
import DetailPage from './pages/Boards/DetailPage';

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

const categoryList = [
  { name: 'exhibition', component: <Exhibition /> },
  { name: 'tradition', component: <Tradition /> },
  { name: 'nature', component: <Nature /> },
  { name: 'citizen', component: <Citizen /> },
  { name: 'culture', component: <Culture /> },
  { name: 'other-festival', component: <OtherFestival /> },
  { name: 'theater', component: <Theater /> },
  { name: 'musical', component: <Musical /> },
  { name: 'dance', component: <Dance /> },
  { name: 'classical', component: <Classical /> },
  { name: 'concert', component: <Concert /> },
];

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

          {categoryList.map((category) => (
            <Route
              key={category.name}
              path={category.name}
              element={category.component}
            />
          ))}

          {/* 각 카테고리의 상세 페이지에 대한 동적 라우팅 설정 */}
          {categoryList.map((category) => (
            <Route
              key={`${category.name}-detail`}
              path={`${category.name}/:itemId`}
              element={<DetailPage category={category.name} />}
            />
          ))}

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
