import { useState } from 'react';
import { UserPlus, Trash2 } from 'lucide-react';

export default function Teachers({ teachers, onAdd, onDelete }) {
  const [name, setName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim()) return;
    onAdd({ id: Date.now(), name: name.trim() });
    setName('');
  };

  const getInitial = (n) => n.charAt(0).toUpperCase();
  const avatarColors = [
    'bg-blue-500', 'bg-purple-500', 'bg-emerald-500', 'bg-rose-500',
    'bg-amber-500', 'bg-cyan-500', 'bg-fuchsia-500', 'bg-indigo-500',
    'bg-teal-500', 'bg-orange-500',
  ];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 animate-fade-in">
      {/* Add Teacher Form */}
      <div className="lg:col-span-2">
        <div className="bg-white rounded-2xl border border-purple-100 shadow-xl shadow-purple-950/10 p-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-5 flex items-center gap-2">
            <UserPlus className="w-5 h-5 text-purple-500" />
            Add Teacher
          </h3>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5">Teacher Name</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="e.g., Mr. Satish Kale"
                className="w-full px-4 py-2.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent transition-all"
              />
            </div>
            <button
              type="submit"
              className="w-full py-2.5 rounded-xl bg-gradient-to-r from-fuchsia-500 to-purple-600 hover:from-fuchsia-600 hover:to-purple-700 text-white font-medium shadow-md shadow-purple-500/25 transition-all duration-200 cursor-pointer"
            >
              Save Teacher
            </button>
          </form>
        </div>
      </div>

      {/* Teachers List */}
      <div className="lg:col-span-3">
        <div className="bg-white rounded-2xl border border-purple-100 shadow-xl shadow-purple-950/10 p-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">All Teachers</h3>
          <div className="space-y-2 max-h-[500px] overflow-y-auto pr-1">
            {teachers.map((teacher, i) => (
              <div
                key={teacher.id}
                className="flex items-center justify-between p-3 rounded-xl hover:bg-gray-50 transition-colors group"
              >
                <div className="flex items-center gap-3">
                  <div
                    className={`w-9 h-9 rounded-full ${avatarColors[i % avatarColors.length]} flex items-center justify-center text-white text-sm font-semibold shadow-sm`}
                  >
                    {getInitial(teacher.name)}
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-800">{teacher.name}</p>
                    <p className="text-xs text-gray-400">Available for allocation</p>
                  </div>
                </div>
                <button
                  onClick={() => onDelete(teacher.id)}
                  className="text-sm text-rose-500 hover:text-rose-700 hover:bg-rose-50 px-3 py-1 rounded-lg transition-all opacity-70 group-hover:opacity-100 cursor-pointer"
                >
                  Delete
                </button>
              </div>
            ))}
            {teachers.length === 0 && (
              <p className="text-sm text-gray-400 text-center py-8">No teachers added yet.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
