import Photo from './photo';

const Photos = (list, selected) =>
  list.map((el) => {
    return <Photo photo={el} key={el.id} selected={selected} />;
  });

export default Photos;
