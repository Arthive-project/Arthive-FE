import { getExhibitions } from '../../api';
import BoardHeader from '../../components/BoardHeader';
import BoardList from '../../components/BoardList';
import BoardItem from '../../components/BoardItem';

const Theater = () => {
  const theaters = getExhibitions();

  return (
    <>
      <BoardHeader text='공연' showText='false' subText='연극' />
      <BoardList>
        {theaters.map((theater) => (
          <BoardItem
            key={theater.id}
            data={theater}
            linkPath={`/dance/${theater.id}`}
          />
        ))}
      </BoardList>
    </>
  );
};

export default Theater;
