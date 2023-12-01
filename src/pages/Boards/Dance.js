import { getExhibitions } from '../../api';
import BoardHeader from '../../components/BoardHeader';
import BoardList from '../../components/BoardList';
import BoardItem from '../../components/BoardItem';

const Dance = () => {
  const dances = getExhibitions();

  return (
    <>
      <BoardHeader text='공연' showText='false' subText='무용' />
      <BoardList>
        {dances.map((dance) => (
          <BoardItem
            key={dance.id}
            data={dance}
            linkPath={`/dance/${dance.id}`}
          />
        ))}
      </BoardList>
    </>
  );
};

export default Dance;
