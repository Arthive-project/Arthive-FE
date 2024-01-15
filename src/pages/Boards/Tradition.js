import { getPostByCategory } from '../../api/requestAPI';
import { useState, useEffect } from 'react';
import BoardHeader from '../../components/BoardHeader';
import BoardList from '../../components/BoardList';
import BoardItem from '../../components/BoardItem';

const Tradition = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getPostByCategory('축제-전통/역사');
        setPosts(response);
      } catch (error) {
        console.error('Error', error);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <BoardHeader text='축제' showText='false' subText='전통/역사' />
      <BoardList>
        {posts.map((tradition) => (
          <BoardItem
            key={tradition.id}
            data={tradition}
            linkPath={`/tradition/${tradition.id}`}
          />
        ))}
      </BoardList>
    </>
  );
};

export default Tradition;
