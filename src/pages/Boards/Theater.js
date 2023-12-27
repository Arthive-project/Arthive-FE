import BoardHeader from '../../components/BoardHeader';
import BoardList from '../../components/BoardList';
import BoardItem from '../../components/BoardItem';
import { getPostByCategory } from '../../api/requestAPI';
import { useState, useEffect } from 'react';

const Theater = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getPostByCategory('연극');
        setPosts(response);
      } catch (error) {
        console.error('Error', error);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <BoardHeader text='공연' showText='false' subText='연극' />
      <BoardList>
        {posts.map((theater) => (
          <BoardItem
            key={theater.id}
            data={theater}
            linkPath={`/theater/${theater.id}`}
          />
        ))}
      </BoardList>
    </>
  );
};

export default Theater;
