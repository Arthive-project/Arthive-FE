import { getExhibitions } from '../../api';
import BoardHeader from '../../components/BoardHeader';
import BoardList from '../../components/BoardList';
import BoardItem from '../../components/BoardItem';

const OtherFestival = () => {
  const others = getExhibitions();

  return (
    <>
      <BoardHeader text='축제' showText='false' subText='기타' />
      <BoardList>
        {others.map((other) => (
          <BoardItem
            key={other.id}
            data={other}
            linkPath={`/other/${other.id}`}
            showAddress={false}
          />
        ))}
      </BoardList>
    </>
  );
};

export default OtherFestival;
