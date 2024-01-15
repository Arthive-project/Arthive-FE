import BoardHeader from '../../components/BoardHeader';
import BoardList from '../../components/BoardList';
import BoardItem from '../../components/BoardItem';
import { getPostByCategory } from '../../api/requestAPI';
import { useState, useEffect } from 'react';

const Dance = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getPostByCategory('무용');
        setPosts(response);
      } catch (error) {
        console.error('Error', error);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <BoardHeader text='공연' showText='false' subText='무용' />
      <BoardList>
        {posts.map((dance) => (
          <BoardItem
            key={dance.id}
            data={dance}
            linkPath={`/dance/${dance.id}`}
          />
        ))}
      </BoardList>
    </>
  );
};

export default Dance;
