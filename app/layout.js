import './globals.css';

export const metadata = {
  title: 'SportGrid News Network',
  description: 'Your ultimate destination for live football news.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-slate-950 text-slate-100 min-h-screen font-sans">
        {/* Navigation Header */}
        <header className="border-b border-slate-800 bg-slate-900 sticky top-0 z-50">
          <div className="max-w-7xl mx-auto px-4 py-3 flex flex-col md:flex-row items-center justify-between gap-4">
            <h1 className="text-xl font-black tracking-wider text-red-500">SPORTGRID</h1>
            <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm font-medium text-slate-300">
              <a href="/" className="hover:text-red-500 transition-colors">Home</a>
              <a href="/matches" className="hover:text-red-500 transition-colors">Matches</a>
              <a href="/news" className="hover:text-red-500 transition-colors">News Archive</a>
              <a href="/transfers" className="hover:text-red-500 transition-colors">Transfer Centre</a>
              <a href="/tables" className="hover:text-red-500 transition-colors">Tables</a>
            </nav>
          </div>
        </header>

        {/* Main Feed Content */}
        <main className="max-w-7xl mx-auto px-4 py-6">
          {children}
        </main>
      </body>
    </html>
  );
}
