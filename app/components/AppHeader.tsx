import { Link } from '@remix-run/react';
import { AppHeaderLink } from './AppHeaderLink';
import { useAuth } from 'hooks/useAuth';

export const AppHeader = () => {
  const user = useAuth();

  return (
    <nav className="navbar navbar-light">
      <div className="container">
        <Link className="navbar-brand ng-binding" to="/">
          conduit
        </Link>
        <ul
          className="nav navbar-nav pull-xs-right"
          style={{ display: 'inherit' }}
        >
          {user === null ? (
            <>
              <li className="nav-item">
                <AppHeaderLink caption="Home" linkTo="/"></AppHeaderLink>
              </li>
              <li className="nav-item">
                <AppHeaderLink
                  caption="Sign in"
                  linkTo="/login"
                ></AppHeaderLink>
              </li>
              <li className="nav-item">
                <AppHeaderLink
                  caption="Sign up"
                  linkTo="/register"
                ></AppHeaderLink>
              </li>
            </>
          ) : (
            <></>
          )}
        </ul>
      </div>
    </nav>
  );
};
