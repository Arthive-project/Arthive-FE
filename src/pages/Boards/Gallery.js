import BoardHeader from '../../components/BoardHeader';
import { getGalleries } from '../../api';
import BoardList from '../../components/BoardList';
import BoardItem from '../../components/BoardItem';

const Gallery = () => {
  const galleries = getGalleries();

  return (
    <div>
      <BoardHeader text='Gallery' showHr={true} />
      <BoardList>
        {galleries.map((gallery) => (
          <BoardItem
            key={gallery.id}
            data={gallery}
            linkPath={`/gallery/${gallery.id}`}
          />
        ))}
      </BoardList>
    </div>
  );
};

export default Gallery;
