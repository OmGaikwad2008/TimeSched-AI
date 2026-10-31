import { Monitor, LogOut } from 'lucide-react';

const ADMIN_TABS = ['Dashboard', 'Teachers', 'Subjects', 'Rooms & Labs', 'Generate', 'View Timetable'];
const STUDENT_TABS = ['Dashboard', 'View Timetable'];

export default function Header({ role, activeTab, onTabChange, onLogout }) {
  const tabs = role === 'Admin' ? ADMIN_TABS : STUDENT_TABS;

  return (
    <header className="no-print sticky top-0 z-50 bg-gradient-to-r from-slate-900 via-purple-900/90 to-slate-900 border-b border-purple-800/40 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Top Bar */}
        <div className="flex items-center justify-between py-3">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-fuchsia-500 to-purple-600 flex items-center justify-center shadow-lg shadow-purple-600/30">
              <Monitor className="w-5 h-5 text-white" />
            </div>
            <div>
              <h1 className="text-lg font-bold text-white tracking-tight">TimeSchedAI</h1>
              <p className="text-xs text-purple-300/70">Academic Timetable Generator</p>
            </div>
          </div>

          <div className="hidden sm:block flex-1 mx-8">
            <p className="text-xs text-purple-300/50 italic">
              {role === 'Admin'
                ? 'Admin can add, delete, reset, and generate timetable data.'
                : 'Student can only view the final timetable.'}
            </p>
          </div>

          <div className="flex items-center gap-2">
            <span className="px-3 py-1 text-xs font-medium rounded-full bg-sky-500/10 text-sky-300 border border-sky-500/20">
              {role}
            </span>
            <span className="hidden sm:flex items-center gap-1.5 px-3 py-1 text-xs font-medium rounded-full bg-emerald-500/10 text-emerald-300 border border-emerald-500/20">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse-dot" />
              AI Engine Active
            </span>
            <button
              onClick={onLogout}
              className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-rose-300 hover:text-white hover:bg-rose-500/20 rounded-lg border border-rose-500/20 transition-all duration-200 cursor-pointer"
            >
              <LogOut className="w-3.5 h-3.5" />
              Logout
            </button>
          </div>
        </div>

        {/* Navigation Tabs */}
        <nav className="flex gap-1 -mb-px overflow-x-auto pb-0 scrollbar-hide">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => onTabChange(tab)}
              className={`px-4 py-2.5 text-sm font-medium whitespace-nowrap transition-all duration-200 border-b-2 cursor-pointer ${
                activeTab === tab
                  ? 'border-purple-400 text-white'
                  : 'border-transparent text-purple-300/60 hover:text-purple-200 hover:border-purple-500/30'
              }`}
            >
              {tab}
            </button>
          ))}
        </nav>
      </div>
    </header>
  );
}
