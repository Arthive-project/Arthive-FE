import BoardHeader from '../../components/BoardHeader';
import BoardList from '../../components/BoardList';
import BoardItem from '../../components/BoardItem';
import { getPostByCategory } from '../../api/requestAPI';
import { useState, useEffect } from 'react';

interface CulturePost {
  id: number;
  MAIN_IMG: string;
  TITLE: string;
}

const Culture = () => {
  const [posts, setPosts] = useState<CulturePost[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getPostByCategory('축제-문화/예술');
        setPosts(response);
      } catch (error) {
        console.error('Error', error);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <BoardHeader text='축제' showText={false} subText='문화/예술' />
      <BoardList>
        {posts.map((culture) => (
          <BoardItem
            key={culture.id}
            data={culture}
            linkPath={`/culture/${culture.id}`}
            showAddress={false}
          />
        ))}
      </BoardList>
    </>
  );
};

export default Culture;
