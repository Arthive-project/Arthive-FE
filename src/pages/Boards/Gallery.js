import BoardHeader from '../../components/BoardHeader';
import GalleryItem from '../../components/GalleryItem';
import { getGalleries } from '../../api';
import BoardList from '../../components/BoardList';

const Gallery = () => {
  const galleries = getGalleries();

  return (
    <div>
      <BoardHeader text='Gallery' showHr={true} />
      <BoardList>
        {galleries.map((gallery) => {
          return (
            <GalleryItem key={gallery.id} gallery={gallery} {...gallery} />
          );
        })}
      </BoardList>
    </div>
  );
};

export default Gallery;
