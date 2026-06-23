import './globals.css';

export const metadata = {
  title: 'SportGrid News Network',
  description: 'Your ultimate destination for live football news.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
