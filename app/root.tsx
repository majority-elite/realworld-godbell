import {
  json,
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData,
} from '@remix-run/react';
import { AppHeader } from './components/AppHeader';
import { LoaderFunction } from '@remix-run/node';
import { getUser } from './tools/auth';
import { UserProvider } from './components/UserData';

export const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="stylesheet"
          type="text/css"
          href="//code.ionicframework.com/ionicons/2.0.1/css/ionicons.min.css"
        ></link>
        <link
          rel="stylesheet"
          type="text/css"
          href="//fonts.googleapis.com/css?family=Titillium+Web:700|Source+Serif+Pro:400,700|Merriweather+Sans:400,700|Source+Sans+Pro:400,300,600,700,300italic,400italic,600italic,700italic"
        ></link>
        <link rel="stylesheet" href="//demo.productionready.io/main.css"></link>
        <Meta />
        <Links />
      </head>
      <body>
        <LiveReload></LiveReload>
        <AppHeader></AppHeader>
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
};

export default function App() {
  const data = useLoaderData<typeof loader>();

  return (
    <UserProvider user={data.user}>
      <Outlet />
    </UserProvider>
  );
}

export const loader: LoaderFunction = async () => {
  return json({ user: getUser() });
};
