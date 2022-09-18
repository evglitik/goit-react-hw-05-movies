import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const MovieDetailsContainer = styled.main`
margin-top: 10px;
`

export const LinkBeack = styled(NavLink)`
  display: inline-block;
  border: black, solid, 1px;
  border-radius: 8px;
  padding: 6px;
  margin-left: 10px;
  text-decoration: none;
  background-color: ivory;
`;
