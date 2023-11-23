import { getExhibitions } from '../../api';
import BoardHeader from '../../components/BoardHeader';
import BoardList from '../../components/BoardList';
import BoardItem from '../../components/BoardItem';
import ExhibitionFilter from '../../components/ExhibitionFilter';

const Exhibition = () => {
  const exhibitions = getExhibitions();

  return (
    <div>
      <BoardHeader text='Exhibition' showHr={true} />
      <ExhibitionFilter />
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
