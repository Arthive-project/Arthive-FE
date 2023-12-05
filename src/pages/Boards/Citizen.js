import { getExhibitions } from '../../api';
import BoardHeader from '../../components/BoardHeader';
import BoardList from '../../components/BoardList';
import BoardItem from '../../components/BoardItem';

const Citizen = () => {
  const citizens = getExhibitions();

  return (
    <>
      <BoardHeader text='축제' showText='false' subText='시민/화합' />
      <BoardList>
        {citizens.map((citizen) => (
          <BoardItem
            key={citizen.id}
            data={citizen}
            linkPath={`/citizen/${citizen.id}`}
            showAddress={false}
          />
        ))}
      </BoardList>
    </>
  );
};

export default Citizen;
