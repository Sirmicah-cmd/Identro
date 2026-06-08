export const metadata = {
  title: "Identro",
  description: "Fast, secure and reliable identity services.",
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