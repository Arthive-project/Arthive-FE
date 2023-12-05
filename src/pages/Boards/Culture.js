import { getExhibitions } from '../../api';
import BoardHeader from '../../components/BoardHeader';
import BoardList from '../../components/BoardList';
import BoardItem from '../../components/BoardItem';

const Culture = () => {
  const cultures = getExhibitions();

  return (
    <>
      <BoardHeader text='축제' showText='false' subText='문화/예술' />
      <BoardList>
        {cultures.map((culture) => (
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
