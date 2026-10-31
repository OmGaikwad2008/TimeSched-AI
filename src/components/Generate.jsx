import { useState } from 'react';
import { Cpu, CheckCircle2, Loader2, Trash2, Database, RotateCcw } from 'lucide-react';
import { INITIAL_TEACHERS, INITIAL_SUBJECTS, INITIAL_ROOMS, INITIAL_TIMETABLES } from '../data/mockData';

export default function Generate({
  teachers, subjects, rooms,
  onGenerate, onLoadDemo, onClearTimetable, onResetAll,
}) {
  const [generating, setGenerating] = useState(false);
  const [yearFilter, setYearFilter] = useState('All Years');
  const [toast, setToast] = useState('');

  const showToast = (msg) => {
    setToast(msg);
    setTimeout(() => setToast(''), 3000);
  };

  const handleGenerate = async () => {
    setGenerating(true);
    showToast('Generating timetable... Please wait.');
    await new Promise((r) => setTimeout(r, 2000));
    onGenerate(yearFilter);
    setGenerating(false);
    showToast('Timetable generated successfully!');
  };

  const handleLoadDemo = () => {
    onLoadDemo();
    showToast('Demo data loaded successfully!');
  };

  const checks = [
    { label: 'Teachers Added', ok: teachers.length > 0 },
    { label: 'Subjects Added', ok: subjects.length > 0 },
    { label: 'Rooms & Labs Added', ok: rooms.length > 0 },
  ];

  return (
    <div className="max-w-xl mx-auto animate-fade-in">
      {/* Toast */}
      {toast && (
        <div className="fixed top-20 right-6 z-50 bg-white border border-purple-200 shadow-2xl rounded-xl px-5 py-3 text-sm font-medium text-gray-800 animate-slide-up">
          {toast}
        </div>
      )}

      <div className="bg-white rounded-2xl border border-purple-100 shadow-xl shadow-purple-950/10 p-8">
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-6">
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-fuchsia-500 to-purple-600 flex items-center justify-center shadow-xl shadow-purple-500/30 mb-4">
            <Cpu className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-xl font-bold text-gray-800">Generate Timetable</h2>
          <p className="text-sm text-gray-500 mt-1">
            AI engine will create a conflict-free schedule
          </p>
        </div>

        {/* Checklist */}
        <div className="space-y-2 mb-6">
          {checks.map((c) => (
            <div
              key={c.label}
              className={`flex items-center gap-3 p-3 rounded-xl border ${
                c.ok
                  ? 'bg-emerald-50 border-emerald-200 text-emerald-700'
                  : 'bg-gray-50 border-gray-200 text-gray-400'
              }`}
            >
              <CheckCircle2 className={`w-5 h-5 ${c.ok ? 'text-emerald-500' : 'text-gray-300'}`} />
              <span className="text-sm font-medium">{c.label}</span>
              {c.ok && <span className="ml-auto text-xs font-semibold">✓</span>}
            </div>
          ))}
        </div>

        {/* Year Dropdown */}
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-1.5">
            Generate Timetable For
          </label>
          <select
            value={yearFilter}
            onChange={(e) => setYearFilter(e.target.value)}
            className="w-full px-4 py-2.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent bg-white"
          >
            <option>All Years</option>
            <option>1st Year</option>
            <option>2nd Year</option>
            <option>3rd Year</option>
          </select>
        </div>

        {/* Action Buttons */}
        <div className="space-y-3">
          <button
            onClick={handleGenerate}
            disabled={generating || !checks.every((c) => c.ok)}
            className="w-full py-3 rounded-xl bg-gradient-to-r from-fuchsia-500 to-purple-600 hover:from-fuchsia-600 hover:to-purple-700 text-white font-semibold shadow-lg shadow-purple-500/25 transition-all duration-200 disabled:opacity-50 flex items-center justify-center gap-2 cursor-pointer"
          >
            {generating ? (
              <>
                <Loader2 className="w-5 h-5 animate-spin" />
                Generating...
              </>
            ) : (
              <>
                <Cpu className="w-5 h-5" />
                Generate Timetable
              </>
            )}
          </button>

          <button
            onClick={handleLoadDemo}
            className="w-full py-2.5 rounded-xl bg-slate-800 hover:bg-slate-900 text-white font-medium transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer"
          >
            <Database className="w-4 h-4" />
            Load Demo Data
          </button>

          <button
            onClick={() => { onClearTimetable(); showToast('Timetable cleared.'); }}
            className="w-full py-2.5 rounded-xl bg-amber-500 hover:bg-amber-600 text-white font-medium transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer"
          >
            <RotateCcw className="w-4 h-4" />
            Clear Timetable Only
          </button>

          <button
            onClick={() => { onResetAll(); showToast('All data has been reset.'); }}
            className="w-full py-2.5 rounded-xl border border-rose-200 text-rose-600 hover:bg-rose-50 font-medium transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer"
          >
            <Trash2 className="w-4 h-4" />
            Reset All Data
          </button>
        </div>
      </div>
    </div>
  );
}
