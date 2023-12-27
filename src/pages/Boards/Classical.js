import { getPostByCategory } from '../../api/requestAPI';
import { useState, useEffect } from 'react';
import BoardHeader from '../../components/BoardHeader';
import BoardList from '../../components/BoardList';
import BoardItem from '../../components/BoardItem';

const Classical = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getPostByCategory('클래식');
        setPosts(response);
      } catch (error) {
        console.error('Error', error);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <BoardHeader text='공연' showText='false' subText='클래식' />
      <BoardList>
        {posts.map((classical) => (
          <BoardItem
            key={classical.id}
            data={classical}
            linkPath={`/classical/${classical.id}`}
            showAddress={false}
          />
        ))}
      </BoardList>
    </>
  );
};

export default Classical;
