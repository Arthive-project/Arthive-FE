import { getExhibitions } from '../../api';
import BoardHeader from '../../components/BoardHeader';
import BoardList from '../../components/BoardList';
import BoardItem from '../../components/BoardItem';

const Concert = () => {
  const concerts = getExhibitions();

  return (
    <>
      <BoardHeader text='공연' showText='false' subText='콘서트' />
      <BoardList>
        {concerts.map((concert) => (
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

export default Concert;
