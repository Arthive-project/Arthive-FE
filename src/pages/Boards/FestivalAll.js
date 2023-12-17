import { getExhibitions } from '../../api';
import BoardHeader from '../../components/BoardHeader';
import BoardList from '../../components/BoardList';
import BoardItem from '../../components/BoardItem';

const FestivalAll = () => {
  const festivalAll = getExhibitions();

  return (
    <>
      <BoardHeader text='축제' showText='false' subText='전체' />
      <BoardList>
        {festivalAll.map((festival) => (
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
