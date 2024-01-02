import { getPostByCategory } from '../../api/requestAPI';
import { useState, useEffect } from 'react';
import BoardHeader from '../../components/BoardHeader';
import BoardList from '../../components/BoardList';
import BoardItem from '../../components/BoardItem';

const FestivalAll = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const categories = [
          '축제-전통/역사',
          '축제-자연/경관',
          '축제-시민/화합',
          '축제-문화/예술',
          '축제-기타',
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
      <BoardHeader text='축제' showText='false' subText='전체' />
      <BoardList>
        {posts.map((festival) => (
          <BoardItem
            key={festival.id}
            data={festival}
            linkPath={`/festival/${festival.id}`}
          />
        ))}
      </BoardList>
    </>
  );
};

export default FestivalAll;
