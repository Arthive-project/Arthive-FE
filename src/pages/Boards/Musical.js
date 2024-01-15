import { getPostByCategory } from '../../api/requestAPI';
import { useState, useEffect } from 'react';
import BoardHeader from '../../components/BoardHeader';
import BoardList from '../../components/BoardList';
import BoardItem from '../../components/BoardItem';

const Musical = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getPostByCategory('뮤지컬/오페라');
        setPosts(response);
      } catch (error) {
        console.error('Error', error);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <BoardHeader text='공연' showText='false' subText='뮤지컬/오페라' />
      <BoardList>
        {posts.map((musical) => (
          <BoardItem
            key={musical.id}
            data={musical}
            linkPath={`/musical/${musical.id}`}
            showAddress={false}
          />
        ))}
      </BoardList>
    </>
  );
};

export default Musical;
