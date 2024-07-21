import { Link, NavLink, useLocation } from '@remix-run/react';

interface Props {
  caption: string;
  linkTo: string;
}

export const AppHeaderLink = (props: Props) => {
  return (
    <NavLink
      className={({ isActive, isPending }) => {
        return isActive ? 'nav-link active' : 'nav-link';
      }}
      to={props.linkTo}
    >
      {props.caption}
    </NavLink>
  );
};
