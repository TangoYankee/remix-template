import { StreetscapeProvider, Box, Heading } from "@nycplanning/streetscape";
import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";

function Document({
  children,
  title = "App title",
}: {
  children: React.ReactNode;
  title?: string;
}) {
  return (
    <html lang="en">
      <head>
        <Meta />
        <title>{title}</title>
        <Links />
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  // throw new Error("💣💥 Booooom");

  return (
    <Document>
      <StreetscapeProvider>
        <Outlet />
      </StreetscapeProvider>
    </Document>
  );
}

// How StreetscapeProvider should be used on CatchBoundary
export function CatchBoundary() {

  return (
    <Document>
      <StreetscapeProvider>
        <Box>
          <Heading as="h1" bg="purple.600">
            [CatchBoundary]: 
          </Heading>
        </Box>
      </StreetscapeProvider>
    </Document>
  );
}

// How StreetscapeProvider should be used on ErrorBoundary
export function ErrorBoundary({ error }: { error: Error }) {
  return (
    <Document title="Error!">
      <StreetscapeProvider>
        <Box>
          <Heading as="h1" bg="blue.500">
            [ErrorBoundary]: There was an error: {error.message}
          </Heading>
        </Box>
      </StreetscapeProvider>
    </Document>
  );
}
