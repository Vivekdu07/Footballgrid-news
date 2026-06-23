import './globals.css';

export const metadata = {
  title: 'SportGrid News Network',
  description: 'Your ultimate destination for live football news and data matrices.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
