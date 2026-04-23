import { Outlet, Link, createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";

import appCss from "../styles.css?url";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "AMTRIZ — Projetos Elétricos Residenciais" },
      { name: "description", content: "Engenharia elétrica residencial conforme NBR 5410." },
      { name: "author", content: "AMTRIZ" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:title", content: "AMTRIZ — Projetos Elétricos Residenciais" },
      { name: "twitter:title", content: "AMTRIZ — Projetos Elétricos Residenciais" },
      { property: "og:description", content: "Engenharia elétrica residencial conforme NBR 5410." },
      { name: "twitter:description", content: "Engenharia elétrica residencial conforme NBR 5410." },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/8814a9da-e426-42a9-ad5d-ee231c278c49/id-preview-ba3f96a3--d9b72030-8f9d-4633-a552-083a3b589d45.lovable.app-1776568442872.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/8814a9da-e426-42a9-ad5d-ee231c278c49/id-preview-ba3f96a3--d9b72030-8f9d-4633-a552-083a3b589d45.lovable.app-1776568442872.png" },
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss,
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  return <Outlet />;
}
