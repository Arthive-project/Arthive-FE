import { getExhibitions } from '../../api';
import BoardHeader from '../../components/BoardHeader';
import BoardList from '../../components/BoardList';
import BoardItem from '../../components/BoardItem';

const Exhibition = () => {
  const exhibitions = getExhibitions();

  return (
    <div>
      <BoardHeader text='Exhibition' showHr={true} />
      <BoardList>
        {exhibitions.map((exhibition) => (
          <BoardItem
            key={exhibition.id}
            data={exhibition}
            linkPath={`/exhibition/${exhibition.id}`}
            showAddress={false}
          />
        ))}
      </BoardList>
    </div>
  );
};

export default Exhibition;
