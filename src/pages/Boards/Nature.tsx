import { getPostByCategory } from '../../api/requestAPI';
import { useState, useEffect } from 'react';
import BoardHeader from '../../components/BoardHeader';
import BoardList from '../../components/BoardList';
import BoardItem from '../../components/BoardItem';

const Nature = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getPostByCategory('축제-자연/경관');
        setPosts(response);
      } catch (error) {
        console.error('Error', error);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <BoardHeader text='축제' showText='false' subText='자연/경관' />
      <BoardList>
        {posts.map((nature) => (
          <BoardItem
            key={nature.id}
            data={nature}
            linkPath={`/nature/${nature.id}`}
            showAddress={false}
          />
        ))}
      </BoardList>
    </>
  );
};

export default Nature;
