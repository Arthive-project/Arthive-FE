import { getExhibitions } from '../../api';
import BoardHeader from '../../components/BoardHeader';
import BoardList from '../../components/BoardList';
import BoardItem from '../../components/BoardItem';

const Musical = () => {
  const musicals = getExhibitions();

  return (
    <>
      <BoardHeader text='공연' showText='false' subText='뮤지컬/오페라' />
      <BoardList>
        {musicals.map((musical) => (
          <BoardItem
            key={musical.id}
            data={musical}
            linkPath={`/musical/${musical.id}`}
            showAddress={false}
          />
        ))}
      </BoardList>
    </>
  );
};

export default Musical;
