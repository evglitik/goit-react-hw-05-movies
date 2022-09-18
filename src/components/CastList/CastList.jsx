import CastItem from 'components/CastItem/CastItem';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getCast } from 'service/api';

const CastList = () => {
  const [casts, setCasts] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    getCast(id).then(r => {
      setCasts([...r]);
    });
  }, [id]);

  return (
    <ul>
      {casts.length > 0 &&
        casts.map(e => {
          return <CastItem cast={e} key={e.id} />;
        })}
    </ul>
  );
};

export default CastList;
