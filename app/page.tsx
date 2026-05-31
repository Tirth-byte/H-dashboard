export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 flex items-center justify-center p-4">
      <div className="text-center max-w-md">
        <h1 className="text-4xl font-bold text-white mb-4">🎯 Hackathon Dashboard</h1>
        <p className="text-slate-300 mb-8 text-lg">
          A powerful, standalone dashboard for managing hackathon participants and communications.
        </p>
        <div className="flex gap-4 justify-center flex-col sm:flex-row">
          <a
            href="/dashboard.html"
            className="inline-block px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors"
          >
            📊 Open Dashboard
          </a>
          <a
            href="https://github.com/Tirth-byte/dashbord-users"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 py-3 border border-slate-400 hover:bg-slate-700 text-white font-semibold rounded-lg transition-colors"
          >
            📖 View Repository
          </a>
        </div>
        <div className="mt-12 text-slate-400 text-sm">
          <p>✨ Standalone HTML • No Backend Required • LocalStorage Based</p>
        </div>
      </div>
    </div>
  );
}
