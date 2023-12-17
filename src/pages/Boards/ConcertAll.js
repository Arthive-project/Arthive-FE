import { getExhibitions } from '../../api';
import BoardHeader from '../../components/BoardHeader';
import BoardList from '../../components/BoardList';
import BoardItem from '../../components/BoardItem';

const ConcertAll = () => {
  const concertAll = getExhibitions();

  return (
    <>
      <BoardHeader text='공연' showText='false' subText='전체' />
      <BoardList>
        {concertAll.map((concert) => (
          <BoardItem
            key={concert.id}
            data={concert}
            linkPath={`/concert/${concert.id}`}
            showAddress={false}
          />
        ))}
      </BoardList>
    </>
  );
};

export default ConcertAll;
