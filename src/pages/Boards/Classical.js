import { getExhibitions } from '../../api';
import BoardHeader from '../../components/BoardHeader';
import BoardList from '../../components/BoardList';
import BoardItem from '../../components/BoardItem';

const Classical = () => {
  const classicals = getExhibitions();

  return (
    <>
      <BoardHeader text='공연' showText='false' subText='클래식' />
      <BoardList>
        {classicals.map((classical) => (
          <BoardItem
            key={classical.id}
            data={classical}
            linkPath={`/classical/${classical.id}`}
            showAddress={false}
          />
        ))}
      </BoardList>
    </>
  );
};

export default Classical;
