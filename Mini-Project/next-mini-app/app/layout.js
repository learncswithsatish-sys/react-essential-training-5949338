import "./globals.css";

export const metadata = {
  title: "Next.js Mini Project",
  description: "A small Next.js app with server and client components.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
