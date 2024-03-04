import { getPostByCategory } from '../../api/requestAPI';
import { useState, useEffect } from 'react';
import BoardHeader from '../../components/BoardHeader';
import BoardList from '../../components/BoardList';
import BoardItem from '../../components/BoardItem';

const ConcertAll = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const categories = [
          '연극',
          '뮤지컬/오페라',
          '무용',
          '클래식',
          '콘서트',
        ];
        const categoryPromises = categories.map((category) =>
          getPostByCategory(category)
        );
        const responses = await Promise.all(categoryPromises);
        const allPosts = responses.flat();
        setPosts(allPosts);
      } catch (error) {
        console.error('Error', error);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <BoardHeader text='공연' showText='false' subText='전체' />
      <BoardList>
        {posts.map((concert) => (
          <BoardItem
            key={concert.id}
            data={concert}
            linkPath={`/concert/${concert.id}`}
            showAddress={false}
          />
        ))}
      </BoardList>
    </>
  );
};

export default ConcertAll;
