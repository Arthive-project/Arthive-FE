import { getPostByCategory } from '../../api/requestAPI';
import { useState, useEffect } from 'react';
import BoardHeader from '../../components/BoardHeader';
import BoardList from '../../components/BoardList';
import BoardItem from '../../components/BoardItem';

const Citizen = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getPostByCategory('축제-시민/화합');
        setPosts(response);
      } catch (error) {
        console.error('Error', error);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <BoardHeader text='축제' showText='false' subText='시민/화합' />
      <BoardList>
        {posts.map((citizen) => (
          <BoardItem
            key={citizen.id}
            data={citizen}
            linkPath={`/citizen/${citizen.id}`}
            showAddress={false}
          />
        ))}
      </BoardList>
    </>
  );
};

export default Citizen;
