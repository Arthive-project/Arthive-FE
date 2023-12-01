import { getExhibitions } from '../../api';
import BoardHeader from '../../components/BoardHeader';
import BoardList from '../../components/BoardList';
import BoardItem from '../../components/BoardItem';

const Tradition = () => {
  const traditions = getExhibitions();

  return (
    <>
      <BoardHeader text='축제' showText='false' subText='전통/역사' />
      <BoardList>
        {traditions.map((tradition) => (
          <BoardItem
            key={tradition.id}
            data={tradition}
            linkPath={`/tradition/${tradition.id}`}
          />
        ))}
      </BoardList>
    </>
  );
};

export default Tradition;
