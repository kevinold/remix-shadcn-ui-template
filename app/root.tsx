import { cssBundleHref } from '@remix-run/css-bundle';
import type {
  LinksFunction,
  LoaderFunction,
  LoaderFunctionArgs,
  MetaFunction,
} from '@remix-run/node';
import { json } from '@remix-run/node';
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useFetcher,
  useLoaderData,
} from '@remix-run/react';

import { Header } from '~/components/header';
import { ThemeProvider } from '~/components/theme-provider';
import { getThemeFromCookie } from '~/lib/theme.server';
import globalStyles from '~/styles/global.css';

export const links: LinksFunction = () => [
  { rel: 'stylesheet', href: globalStyles },
  ...(cssBundleHref ? [{ rel: 'stylesheet', href: cssBundleHref }] : []),
];

export const loader: LoaderFunction = async ({
  request,
}: LoaderFunctionArgs) => {
  const theme = await getThemeFromCookie(request);
  return json({
    theme,
  });
};

export const meta: MetaFunction = () => {
  return [
    { title: 'Remix shadcn/ui' },
    {
      property: 'og:title',
      content: 'Remix shadcn/ui',
    },
    {
      property: 'og:image',
      content: '',
    },
    {
      name: 'description',
      content: '',
    },
    {
      name: 'og:description',
      content: '',
    },
    {
      name: 'og:url',
      content: '',
    },

    {
      property: 'twitter:title',
      content: 'Remix shadcn/ui',
    },
    {
      property: 'twitter:image',
      content: '',
    },
    {
      property: 'twitter:card',
      content: '',
    },
  ];
};

export default function App() {
  const { theme = 'system' } = useLoaderData<typeof loader>();
  const fetcher = useFetcher();
  const onThemeChange = (theme: string) => {
    fetcher.submit(
      { theme },
      {
        method: 'post',
        encType: 'application/json',
        action: '/api/toggleTheme',
      },
    );
  };
  return (
    <html lang="en" className={theme ?? 'theme'}>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body className="bg-slate-100 dark:bg-slate-900 text-slate-900 dark:text-slate-100">
        <ThemeProvider defaultTheme={theme} onThemeChange={onThemeChange}>
          <Header />
          <Outlet />
        </ThemeProvider>
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
