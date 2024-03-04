import { getPostByCategory } from '../../api/requestAPI';
import { useState, useEffect } from 'react';
import BoardHeader from '../../components/BoardHeader';
import BoardList from '../../components/BoardList';
import BoardItem from '../../components/BoardItem';

const Concert = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getPostByCategory('콘서트');
        setPosts(response);
      } catch (error) {
        console.error('Error', error);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <BoardHeader text='공연' showText='false' subText='콘서트' />
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

export default Concert;
