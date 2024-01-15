import BoardHeader from '../../components/BoardHeader';
import BoardList from '../../components/BoardList';
import BoardItem from '../../components/BoardItem';
import { getPostByCategory } from '../../api/requestAPI';
import { useState, useEffect } from 'react';

const Exhibition = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getPostByCategory('전시/미술');
        setPosts(response);
      } catch (error) {
        console.error('Error', error);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      <BoardHeader text='전시' showText='false' subText='전시/미술' />
      <BoardList>
        {posts.map((exhibition) => (
          <BoardItem
            key={exhibition.id}
            data={exhibition}
            linkPath={`/exhibition/${exhibition.id}`}
            showAddress={false}
          />
        ))}
      </BoardList>
    </div>
  );
};

export default Exhibition;
