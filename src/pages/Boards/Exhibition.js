import { getExhibitions } from '../../api';
import BoardHeader from '../../components/BoardHeader';
import BoardList from '../../components/BoardList';
import BoardItem from '../../components/BoardItem';
import ExhibitionFilter from '../../components/ExhibitionFilter';

const Exhibition = () => {
  const exhibitions = getExhibitions();

  return (
    <div>
      <BoardHeader text='전시' showText='false' subText='전시/미술' />
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
