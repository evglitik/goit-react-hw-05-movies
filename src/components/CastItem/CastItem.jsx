const CastItem = ({ cast }) => {
  const { id, name, character, profile_path } = cast;
  let baseUrlImg = `https://image.tmdb.org/t/p/w500${profile_path}`;

  if (!profile_path) {
    baseUrlImg = `https://netsh.pp.ua/wp-content/uploads/2017/08/Placeholder-1.png`;
  }

  return (
    <li key={id}>
      <img src={`${baseUrlImg}`} alt={`cast: ${name}`} width="150" />
      <p>{name}</p>
      <p>{character}</p>
    </li>
  );
};

export default CastItem;
