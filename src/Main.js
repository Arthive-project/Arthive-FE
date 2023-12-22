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
import DetailPage from './pages/Boards/DetailPage';
import ApplicationFormPage from './pages/Boards/ApplicationFormPage';
import ConcertAll from './pages/Boards/ConcertAll';
import FestivalAll from './pages/Boards/FestivalAll';
import Review from './pages/Boards/Review';
import ReviewWrite from './pages/Boards/ReviewWrite';
import ReviewDetail from './pages/Boards/ReviewDetail';
// 어드민
import ScrollToTop from './components/ScrollToTop';
import Admin from './pages/Admin/Admin';
import Posts from './pages/Admin/Posts';
import PostsDetail from './pages/Admin/PostDetail';
import Application from './pages/Admin/Application';
import ApplicationDetail from './pages/Admin/ApplicationDetail';
import PostRegister from './pages/Admin/PostRegister';

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
  { name: 'concert-all', component: <ConcertAll /> },
  { name: 'theater', component: <Theater /> },
  { name: 'musical', component: <Musical /> },
  { name: 'dance', component: <Dance /> },
  { name: 'classical', component: <Classical /> },
  { name: 'concert', component: <Concert /> },
  { name: 'festival-all', component: <FestivalAll /> },
  { name: 'tradition', component: <Tradition /> },
  { name: 'nature', component: <Nature /> },
  { name: 'citizen', component: <Citizen /> },
  { name: 'culture', component: <Culture /> },
  { name: 'other-festival', component: <OtherFestival /> },
  { name: 'review', component: <Review /> },
];

function Main() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Global styles={globalStyle} />
      <Routes>
        <Route path='/' element={<App />}>
          <Route index element={<Home />} />
          <Route path='login' element={<Login />} />
          <Route path='sign-up' element={<SignUp />} />
          <Route path='application' element={<ApplicationFormPage />} />
          <Route path='my-page' element={<MyPage />} />
          <Route path='my-register' element={<MyRegisterList />} />
          <Route
            path='my-register/:registerId'
            element={<MyRegisterDetail />}
          />
          <Route path='search' element={<Search />} />
          <Route path='my-likes' element={<MyLikes />} />
          <Route path='review-write' element={<ReviewWrite />} />
          <Route path='review/:itemId' element={<ReviewDetail />} />

          {categoryList.map((category) => (
            <Route
              key={category.name}
              path={category.name}
              element={category.component}
            />
          ))}

          {categoryList.map((category) => (
            <Route
              key={`${category.name}-detail`}
              path={`${category.name}/:itemId`}
              element={<DetailPage category={category.name} />}
            />
          ))}

          <Route path='*' element={<NotFound />} />

          {/* Admin */}

          <Route path='admin'>
            <Route index element={<Admin />} />
            <Route path='posts' element={<Posts />} />
            <Route path='post-detail/:postId' element={<PostsDetail />} />
            <Route path='post-register' element={<PostRegister />} />
            <Route path='application' element={<Application />} />
            <Route
              path='application-detail/:applicationId'
              element={<ApplicationDetail />}
            />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Main;
