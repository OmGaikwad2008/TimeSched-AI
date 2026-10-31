import { useState } from 'react';
import { Building } from 'lucide-react';

export default function Rooms({ rooms, onAdd, onDelete }) {
  const [form, setForm] = useState({ name: '', type: 'Classroom', capacity: 60 });
  const [filter, setFilter] = useState('All');

  const handleChange = (field, value) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name.trim()) return;
    onAdd({ ...form, id: Date.now(), capacity: Number(form.capacity) });
    setForm({ name: '', type: 'Classroom', capacity: 60 });
  };

  const classrooms = rooms.filter((r) => r.type === 'Classroom');
  const labs = rooms.filter((r) => r.type === 'Lab');
  const filteredRooms =
    filter === 'Classrooms' ? classrooms : filter === 'Labs' ? labs : rooms;

  return (
    <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 animate-fade-in">
      {/* Add Room Form */}
      <div className="lg:col-span-2">
        <div className="bg-white rounded-2xl border border-purple-100 shadow-xl shadow-purple-950/10 p-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-5 flex items-center gap-2">
            <Building className="w-5 h-5 text-emerald-500" />
            Add Room/Lab
          </h3>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Room Name</label>
              <input
                type="text"
                value={form.name}
                onChange={(e) => handleChange('name', e.target.value)}
                placeholder="e.g., Room 101 or Lab A"
                className="w-full px-4 py-2.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:border-transparent"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Room Type</label>
              <select
                value={form.type}
                onChange={(e) => handleChange('type', e.target.value)}
                className="w-full px-4 py-2.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:border-transparent bg-white"
              >
                <option value="Classroom">Classroom</option>
                <option value="Lab">Computer Lab</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Capacity</label>
              <input
                type="number"
                min="1"
                value={form.capacity}
                onChange={(e) => handleChange('capacity', e.target.value)}
                placeholder="e.g., 70"
                className="w-full px-4 py-2.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:border-transparent"
              />
            </div>

            <button
              type="submit"
              className="w-full py-2.5 rounded-xl bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-600 hover:to-green-700 text-white font-medium shadow-md shadow-emerald-500/25 transition-all duration-200 cursor-pointer"
            >
              Save Room/Lab
            </button>
          </form>
        </div>
      </div>

      {/* Rooms List */}
      <div className="lg:col-span-3">
        <div className="bg-white rounded-2xl border border-purple-100 shadow-xl shadow-purple-950/10 p-6">
          <div className="flex items-center justify-between mb-4 flex-wrap gap-2">
            <h3 className="text-lg font-semibold text-gray-800">All Rooms & Labs</h3>
            <div className="flex gap-1.5">
              {[
                { key: 'All', label: `All Rooms & Labs` },
                { key: 'Classrooms', label: `${classrooms.length} Classrooms` },
                { key: 'Labs', label: `${labs.length} Labs` },
              ].map((f) => (
                <button
                  key={f.key}
                  onClick={() => setFilter(f.key)}
                  className={`px-3 py-1 text-xs font-medium rounded-full border transition-all cursor-pointer ${
                    filter === f.key
                      ? 'bg-purple-50 text-purple-700 border-purple-200'
                      : 'text-gray-500 border-gray-200 hover:bg-gray-50'
                  }`}
                >
                  {f.label}
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-2 max-h-[500px] overflow-y-auto pr-1">
            {filteredRooms.map((room) => (
              <div
                key={room.id}
                className="flex items-center justify-between p-3 rounded-xl hover:bg-gray-50 transition-colors group"
              >
                <div className="flex items-center gap-3">
                  <div
                    className={`w-9 h-9 rounded-full flex items-center justify-center text-white text-sm font-semibold shadow-sm ${
                      room.type === 'Lab' ? 'bg-emerald-500' : 'bg-rose-500'
                    }`}
                  >
                    {room.type === 'Lab' ? 'L' : 'R'}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-800">{room.name}</p>
                    <p className="text-xs text-gray-400">
                      {room.type.toLowerCase()} | Capacity: {room.capacity}
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => onDelete(room.id)}
                  className="text-sm text-rose-500 hover:text-rose-700 hover:bg-rose-50 px-3 py-1 rounded-lg transition-all opacity-70 group-hover:opacity-100 cursor-pointer"
                >
                  Delete
                </button>
              </div>
            ))}
            {filteredRooms.length === 0 && (
              <p className="text-sm text-gray-400 text-center py-8">No rooms found.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
