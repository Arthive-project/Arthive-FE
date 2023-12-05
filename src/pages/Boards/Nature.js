import { getExhibitions } from '../../api';
import BoardHeader from '../../components/BoardHeader';
import BoardList from '../../components/BoardList';
import BoardItem from '../../components/BoardItem';

const Nature = () => {
  const natures = getExhibitions();

  return (
    <>
      <BoardHeader text='축제' showText='false' subText='자연/경관' />
      <BoardList>
        {natures.map((nature) => (
          <BoardItem
            key={nature.id}
            data={nature}
            linkPath={`/nature/${nature.id}`}
            showAddress={false}
          />
        ))}
      </BoardList>
    </>
  );
};

export default Nature;
