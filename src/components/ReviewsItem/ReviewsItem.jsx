const ReviewsItem = ({ revie }) => {
  const { author_details, content } = revie;

  return (
    <li>
      <h4>Author: {author_details.username}</h4>
      <p>{content}</p>
    </li>
  );
};

export default ReviewsItem;
