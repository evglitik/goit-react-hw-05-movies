import { Header, Link } from './Navigation.styled';

const Navigation = () => {
  return (
    <Header>
      <Link to="/" end >Home</Link>
      <Link to="/movies">Movies</Link>
    </Header>
  );
};

export default Navigation;
