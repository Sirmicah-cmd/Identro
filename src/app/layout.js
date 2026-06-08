import "./globals.css";

export const metadata = {
  title: "Identro",
  description: "Digital Identity & Business Services",
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}