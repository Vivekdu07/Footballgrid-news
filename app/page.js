"use client";
import React, { useState } from 'react';

const tickerMatches = [
  { id: 1, home: "ARG", away: "FRA", score: "2 - 1", status: "82'", event: "LIVE" },
  { id: 2, home: "BRA", away: "GER", score: "0 - 0", status: "HT", event: "LIVE" },
  { id: 3, home: "ENG", away: "ESP", score: "1 - 3", status: "FT", event: "COMPLETED" },
  { id: 4, home: "MAR", away: "POR", score: "19:30", status: "TODAY", event: "UPCOMING" },
  { id: 5, home: "USA", away: "MEX", score: "22:00", status: "TODAY", event: "UPCOMING" },
];

const mainFeature = {
  title: "TACTICAL MASTERCLASS: HOW THE UNDERDOGS SHATTERED THE DEFENSIVE WALL",
  excerpt: "An in-depth analysis of tonight's historical tactical shift. We break down the high-pressing system that left the reigning tournament champions scrambling for answers in a chaotic second half.",
  category: "Tactical Analysis",
  author: "Alex Mercer",
  time: "15m ago",
  image: "https://images.unsplash.com/photo-1508098682722-e99c43a406b2?w=1200&auto=format&fit=crop&q=80"
};

const secondaryNews = [
  {
    id: 1,
    title: "Breaking: Star Winger Ruled Out of Crucial Knockout Stage Following Hamstring Scan",
    category: "Injury Update",
    time: "45m ago",
    image: "https://images.unsplash.com/photo-1517649763962-0c623066013b?w=400&auto=format&fit=crop&q=80"
  },
  {
    id: 2,
    title: "Golden Boot Standings: Top Strikers Going Head-to-Head as Final Rounds Approach",
    category: "Stats Hub",
    time: "2h ago",
    image: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=400&auto=format&fit=crop&q=80"
  }
];

const trendingHeadlines = [
  { id: 1, title: "Transfer Rumors: Giants eye $90m summer bid for midfield prodigy", views: "45K reads" },
  { id: 2, title: "Ref Review: Controversial VAR penalty decision explained by official board", views: "32K reads" },
  { id: 3, title: "Fan Voice: The best stadium banners and chants captured this weekend", views: "28K reads" },
  { id: 4, title: "Manager Presser: 'We didn't respect the game plan' says defeated boss", views: "19K reads" },
];

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#0b0f19] text-slate-100 font-sans antialiased selection:bg-lime-400 selection:text-slate-900">
      
      {/* 1. HORIZONTAL LIVE MATCH TICKER */}
      <div className="bg-[#05070c] border-b border-slate-800 py-2.5 overflow-x-auto whitespace-nowrap sticky top-0 z-50 shadow-md">
        <div className="flex items-center space-x-4 px-4 min-w-max">
          <div className="flex items-center space-x-1.5 bg-red-600/10 text-red-500 text-[11px] font-black tracking-widest uppercase px-2.5 py-1 rounded border border-red-500/20">
            <span className="h-1.5 w-1.5 rounded-full bg-red-500 animate-pulse"></span>
            <span>Live Center</span>
          </div>
          
          {tickerMatches.map((match) => (
            <div key={match.id} className="inline-flex items-center space-x-3 text-xs bg-[#111625] px-4 py-1.5 rounded border border-slate-800 hover:border-slate-700 transition cursor-pointer">
              <span className="font-bold tracking-wide text-slate-300">{match.home}</span>
              <span className={`px-2 py-0.5 rounded font-mono font-bold text-center min-w-[50px] ${
                match.event === 'LIVE' ? 'bg-slate-900 text-lime-400 border border-lime-500/30' : 'bg-slate-900 text-slate-400'
              }`}>
                {match.score}
              </span>
              <span className="font-bold tracking-wide text-slate-300">{match.away}</span>
              <span className={`text-[10px] font-bold uppercase tracking-wider pl-2 border-l border-slate-700 ${
                match.event === 'LIVE' ? 'text-lime-400' : 'text-slate-500'
              }`}>
                {match.status}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* 2. MAIN HEADER WITH NAV BAR */}
      <header className="border-b border-slate-800 bg-[#0b0f19]/90 backdrop-blur-md sticky top-[45px] z-40">
        <div className="max-w-7xl mx-auto px-4 h-20 flex items-center justify-between relative">
          
          <div className="flex items-center space-x-8">
            <h1 className="text-3xl font-black italic tracking-tighter uppercase text-white cursor-pointer">
              SPORT<span className="text-lime-400">GRID</span>
            </h1>
            
            <nav className="hidden lg:flex space-x-6 text-xs font-black uppercase tracking-widest text-slate-400">
              <a href="#" className="text-lime-400 border-b-2 border-lime-400 pb-7 pt-1">Home</a>
              <a href="#" className="hover:text-white transition pb-7 pt-1">Matches</a>
              <a href="#" className="hover:text-white transition pb-7 pt-1">News Archive</a>
              <a href="#" className="hover:text-white transition pb-7 pt-1">Transfer Centre</a>
              <a href="#" className="hover:text-white transition pb-7 pt-1">Tables</a>
            </nav>
          </div>

          <div className="flex items-center space-x-4">
            <span className="text-[11px] font-bold uppercase tracking-widest text-slate-400 hidden sm:inline-flex items-center gap-2 bg-slate-950 px-3 py-1.5 rounded-full border border-slate-800">
              <span className="h-1.5 w-1.5 rounded-full bg-lime-400"></span> Tournament Mode Active
            </span>

            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)} 
              className="p-2 text-white bg-slate-950 rounded-lg border border-slate-800 hover:bg-slate-900 transition focus:outline-none"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>

          {/* MOBILE DROPDOWN */}
          {isMenuOpen && (
            <div className="absolute right-4 top-20 w-72 bg-white text-slate-900 rounded-xl shadow-2xl border border-slate-200 p-4 z-50">
              <div className="flex gap-2 mb-4 border-b border-slate-100 pb-4">
                <button className="flex-1 border border-blue-600 text-blue-600 font-extrabold text-xs py-2.5 rounded-lg">Log In</button>
                <button className="flex-1 bg-blue-600 text-white font-extrabold text-xs py-2.5 rounded-lg">Get Alerts</button>
              </div>
              <nav className="flex flex-col space-y-3.5 text-sm font-black uppercase tracking-wider text-slate-800">
                <a href="#" className="text-blue-600">Home</a>
                <a href="#" className="hover:text-blue-600 flex justify-between items-center">Sports <span>▼</span></a>
                <a href="#" className="hover:text-blue-600 flex justify-between items-center">Live Scores <span>▼</span></a>
              </nav>
            </div>
          )}

        </div>
      </header>

      {/* 3. CORE NEWS CONTENT HUB */}
      <main className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* HERO */}
          <div className="lg:col-span-7">
            <div className="relative group rounded-xl overflow-hidden border border-slate-800 bg-[#111625] h-full flex flex-col justify-end min-h-[450px]">
              <div className="absolute top-4 left-4 z-20 bg-lime-400 text-slate-950 font-black text-[10px] uppercase tracking-widest px-2.5 py-1 rounded">
                {mainFeature.category}
              </div>
              <img src={mainFeature.image} alt="" className="absolute inset-0 w-full h-full object-cover brightness-[0.35]" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0b0f19] via-[#0b0f19]/30 to-transparent z-10"></div>
              <div className="p-6 md:p-8 space-y-3 relative z-20">
                <h2 className="text-2xl md:text-4xl font-black tracking-tight uppercase leading-none text-white">
                  {mainFeature.title}
                </h2>
                <p className="text-slate-300 text-xs md:text-sm line-clamp-2">
                  {mainFeature.excerpt}
                </p>
                <div className="text-[11px] text-slate-400 font-bold uppercase tracking-wider pt-2">
                  <span className="text-white">{mainFeature.author}</span> • {mainFeature.time}
                </div>
              </div>
            </div>
          </div>

          {/* SIDE CARDS */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            {secondaryNews.map((article) => (
              <div key={article.id} className="bg-[#111625] rounded-xl overflow-hidden border border-slate-800 flex p-4 gap-4 hover:border-slate-700 transition cursor-pointer">
                <div className="w-1/3 rounded-lg overflow-hidden relative min-h-[100px]">
                  <img src={article.image} alt="" className="w-full h-full object-cover" />
                </div>
                <div className="w-2/3 flex flex-col justify-between">
                  <div>
                    <span className="text-[10px] font-black uppercase tracking-wider text-lime-400 block mb-1">{article.category}</span>
                    <h3 className="font-extrabold text-sm text-white leading-snug line-clamp-3 uppercase">
                      {article.title}
                    </h3>
                  </div>
                  <span className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">{article.time}</span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </main>

      {/* 4. COMPLIANT FOOTER */}
      <footer className="border-t border-slate-800 bg-[#05070c] mt-20 py-12">
        <div className="max-w-7xl mx-auto px-4 flex flex-col items-center space-y-6">
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-xs font-bold tracking-wider uppercase text-slate-500">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
            <a href="#">Contact Us</a>
          </div>
          <div className="text-[11px] text-slate-600 font-medium tracking-wide">
            <p>© {new Date().getFullYear()} FOOTBALLGRID DIGITAL NETWORK.</p>
          </div>
        </div>
      </footer>

    </div>
  );
}

