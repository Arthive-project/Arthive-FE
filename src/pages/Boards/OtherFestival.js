import { getPostByCategory } from '../../api/requestAPI';
import { useState, useEffect } from 'react';
import BoardHeader from '../../components/BoardHeader';
import BoardList from '../../components/BoardList';
import BoardItem from '../../components/BoardItem';

const OtherFestival = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getPostByCategory('축제-기타');
        setPosts(response);
      } catch (error) {
        console.error('Error', error);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <BoardHeader text='축제' showText='false' subText='기타' />
      <BoardList>
        {posts.map((other) => (
          <BoardItem
            key={other.id}
            data={other}
            linkPath={`/other/${other.id}`}
            showAddress={false}
          />
        ))}
      </BoardList>
    </>
  );
};

export default OtherFestival;
