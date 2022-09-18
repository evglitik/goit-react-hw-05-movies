import { getReviews } from 'service/api';
import ReviewsItem from 'components/ReviewsItem/ReviewsItem';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ReviewsList = () => {
  const [reviews, setReviews] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    getReviews(id).then(r => {
      setReviews([...r]);
    });
  }, [id]);

  return (
    <ul>
      {reviews.length > 0 ? (
        reviews.map(e => {
          return <ReviewsItem revie={e} key={e.id} />;
        })
      ) : (
        <div>Not reviews</div>
      )}
    </ul>
  );
};

export default ReviewsList;
