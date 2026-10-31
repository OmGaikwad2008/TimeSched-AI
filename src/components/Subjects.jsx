import { useState } from 'react';
import { BookPlus } from 'lucide-react';

export default function Subjects({ subjects, teachers, onAdd, onDelete }) {
  const [form, setForm] = useState({
    name: '', year: 1, teacher: '', teacherPR: '', code: '',
    weeklyLectures: 4, weeklyPracticals: 0, practicalDuration: 1, requiresLab: false,
  });

  const handleChange = (field, value) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name.trim()) return;
    const newSubject = {
      ...form,
      id: Date.now(),
      year: Number(form.year),
      weeklyLectures: Number(form.weeklyLectures),
      weeklyPracticals: Number(form.weeklyPracticals),
      practicalDuration: Number(form.practicalDuration),
      teacher: form.teacher || teachers[0]?.name || '',
      code: form.code || form.name.split(' ').map((w) => w[0]).join('').toUpperCase(),
    };
    onAdd(newSubject);
    setForm({
      name: '', year: 1, teacher: '', teacherPR: '', code: '',
      weeklyLectures: 4, weeklyPracticals: 0, practicalDuration: 1, requiresLab: false,
    });
  };

  const yearLabel = (y) => {
    if (y === 1) return 'Year 1';
    if (y === 2) return 'Year 2';
    return 'Year 3';
  };

  const yearBadge = (y) => {
    if (y === 1) return 'bg-blue-50 text-blue-600 border-blue-200';
    if (y === 2) return 'bg-rose-50 text-rose-600 border-rose-200';
    return 'bg-emerald-50 text-emerald-600 border-emerald-200';
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 animate-fade-in">
      {/* Add Subject Form */}
      <div className="lg:col-span-2">
        <div className="bg-white rounded-2xl border border-purple-100 shadow-xl shadow-purple-950/10 p-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-5 flex items-center gap-2">
            <BookPlus className="w-5 h-5 text-purple-500" />
            Add Subject
          </h3>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Subject Name</label>
              <input
                type="text"
                value={form.name}
                onChange={(e) => handleChange('name', e.target.value)}
                placeholder="e.g., Data Structures"
                className="w-full px-4 py-2.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Year</label>
              <select
                value={form.year}
                onChange={(e) => handleChange('year', e.target.value)}
                className="w-full px-4 py-2.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent bg-white"
              >
                <option value={1}>1st Year</option>
                <option value={2}>2nd Year</option>
                <option value={3}>3rd Year</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Assigned Teacher</label>
              <select
                value={form.teacher}
                onChange={(e) => handleChange('teacher', e.target.value)}
                className="w-full px-4 py-2.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent bg-white"
              >
                <option value="">Select teacher</option>
                {teachers.map((t) => (
                  <option key={t.id} value={t.name}>{t.name}</option>
                ))}
              </select>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Abbreviation</label>
                <input
                  type="text"
                  value={form.code}
                  onChange={(e) => handleChange('code', e.target.value)}
                  placeholder="Auto if blank"
                  className="w-full px-4 py-2.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Course Code</label>
                <input
                  type="text"
                  placeholder="e.g., CS101"
                  className="w-full px-4 py-2.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent"
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Teacher TH</label>
                <input
                  type="text"
                  value={form.teacher}
                  onChange={(e) => handleChange('teacher', e.target.value)}
                  placeholder="Theory teacher"
                  className="w-full px-4 py-2.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Teacher PR</label>
                <input
                  type="text"
                  value={form.teacherPR}
                  onChange={(e) => handleChange('teacherPR', e.target.value)}
                  placeholder="Practical teacher"
                  className="w-full px-4 py-2.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent"
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Weekly Lectures</label>
                <input
                  type="number"
                  min="0"
                  max="10"
                  value={form.weeklyLectures}
                  onChange={(e) => handleChange('weeklyLectures', e.target.value)}
                  className="w-full px-4 py-2.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Weekly Practicals</label>
                <input
                  type="number"
                  min="0"
                  max="10"
                  value={form.weeklyPracticals}
                  onChange={(e) => handleChange('weeklyPracticals', e.target.value)}
                  className="w-full px-4 py-2.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Practical Duration</label>
              <select
                value={form.practicalDuration}
                onChange={(e) => handleChange('practicalDuration', e.target.value)}
                className="w-full px-4 py-2.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent bg-white"
              >
                <option value={1}>1 Hour</option>
                <option value={2}>2 Hours</option>
              </select>
            </div>

            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                checked={form.requiresLab}
                onChange={(e) => handleChange('requiresLab', e.target.checked)}
                className="w-4 h-4 rounded border-gray-300 text-purple-600 focus:ring-purple-400"
              />
              <span className="text-sm text-gray-700">Requires Lab</span>
            </label>

            <button
              type="submit"
              className="w-full py-2.5 rounded-xl bg-gradient-to-r from-fuchsia-500 to-purple-600 hover:from-fuchsia-600 hover:to-purple-700 text-white font-medium shadow-md shadow-purple-500/25 transition-all duration-200 cursor-pointer"
            >
              Save Subject
            </button>
          </form>
        </div>
      </div>

      {/* Subject List */}
      <div className="lg:col-span-3">
        <div className="bg-white rounded-2xl border border-purple-100 shadow-xl shadow-purple-950/10 p-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">All Subjects</h3>
          <div className="space-y-2 max-h-[600px] overflow-y-auto pr-1">
            {subjects.map((sub) => (
              <div
                key={sub.id}
                className="flex items-center justify-between p-3 rounded-xl hover:bg-gray-50 transition-colors group"
              >
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-purple-500 flex items-center justify-center text-white text-sm font-semibold shadow-sm">
                    S
                  </div>
                  <div>
                    <div className="flex items-center gap-2 flex-wrap">
                      <p className="text-sm font-semibold text-gray-800">{sub.name}</p>
                      <span className={`px-2 py-0.5 text-[10px] font-semibold rounded-full border ${yearBadge(sub.year)}`}>
                        {yearLabel(sub.year)}
                      </span>
                    </div>
                    <p className="text-xs text-gray-400">
                      {sub.teacher} | {sub.weeklyLectures}L{sub.weeklyPracticals > 0 ? ` + ${sub.weeklyPracticals}P` : ''}
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => onDelete(sub.id)}
                  className="text-sm text-rose-500 hover:text-rose-700 hover:bg-rose-50 px-3 py-1 rounded-lg transition-all opacity-70 group-hover:opacity-100 cursor-pointer"
                >
                  Delete
                </button>
              </div>
            ))}
            {subjects.length === 0 && (
              <p className="text-sm text-gray-400 text-center py-8">No subjects added yet.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
