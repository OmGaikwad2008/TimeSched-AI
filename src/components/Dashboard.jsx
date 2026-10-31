import { Users, BookOpen, Building2, CalendarCheck, Cpu } from 'lucide-react';

export default function Dashboard({ teachers, subjects, rooms, timetables }) {
  const scheduledSessions = Object.values(timetables).reduce((total, yearData) => {
    if (!yearData?.grid) return total;
    return total + Object.values(yearData.grid).reduce((slotTotal, daySlots) => {
      return slotTotal + Object.values(daySlots).filter(Boolean).length;
    }, 0);
  }, 0);

  const subjectsByYear = [1, 2, 3].map(
    (y) => subjects.filter((s) => s.year === y).length
  );

  const stats = [
    { label: 'Teachers', value: teachers.length, icon: Users, color: 'bg-blue-500', lightBg: 'bg-blue-50' },
    { label: 'Subjects', value: subjects.length, icon: BookOpen, color: 'bg-purple-500', lightBg: 'bg-purple-50' },
    { label: 'Rooms & Labs', value: rooms.length, icon: Building2, color: 'bg-emerald-500', lightBg: 'bg-emerald-50' },
    { label: 'Scheduled Sessions', value: scheduledSessions, icon: CalendarCheck, color: 'bg-amber-500', lightBg: 'bg-amber-50' },
  ];

  const yearPills = [
    { label: '1st Year', value: subjectsByYear[0], bg: 'bg-blue-50 border-blue-100', text: 'text-blue-600' },
    { label: '2nd Year', value: subjectsByYear[1], bg: 'bg-rose-50 border-rose-100', text: 'text-rose-600' },
    { label: '3rd Year', value: subjectsByYear[2], bg: 'bg-emerald-50 border-emerald-100', text: 'text-emerald-600' },
  ];

  const features = [
    { label: 'No Clashes', color: 'text-blue-600 bg-blue-50 border-blue-200' },
    { label: 'Batch Support', color: 'text-emerald-600 bg-emerald-50 border-emerald-200' },
    { label: 'Smart Allocation', color: 'text-purple-600 bg-purple-50 border-purple-200' },
    { label: 'Constraint Handling', color: 'text-amber-600 bg-amber-50 border-amber-200' },
  ];

  return (
    <div className="space-y-6 animate-fade-in">
      {/* Stat Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat, i) => (
          <div
            key={stat.label}
            className="bg-white rounded-2xl border border-purple-100 shadow-xl shadow-purple-950/10 p-5 flex items-center gap-4 animate-slide-up"
            style={{ animationDelay: `${i * 80}ms` }}
          >
            <div className={`w-12 h-12 rounded-xl ${stat.color} flex items-center justify-center shadow-lg`}>
              <stat.icon className="w-6 h-6 text-white" />
            </div>
            <div>
              <p className="text-2xl font-bold text-gray-800">{stat.value}</p>
              <p className="text-sm text-gray-500">{stat.label}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Subjects by Year */}
      <div className="bg-white rounded-2xl border border-purple-100 shadow-xl shadow-purple-950/10 p-6 animate-slide-up" style={{ animationDelay: '320ms' }}>
        <h3 className="text-lg font-semibold text-gray-800 mb-4">Subjects by Year</h3>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {yearPills.map((pill) => (
            <div
              key={pill.label}
              className={`${pill.bg} border rounded-xl p-4 text-center transition-transform hover:scale-[1.02]`}
            >
              <p className={`text-3xl font-bold ${pill.text}`}>{pill.value}</p>
              <p className={`text-sm font-medium ${pill.text} opacity-70 mt-1`}>{pill.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* AI Engine Info */}
      <div className="bg-white rounded-2xl border border-purple-100 shadow-xl shadow-purple-950/10 p-6 animate-slide-up" style={{ animationDelay: '400ms' }}>
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-fuchsia-500 to-purple-600 flex items-center justify-center shadow-lg shadow-purple-500/30 shrink-0">
            <Cpu className="w-6 h-6 text-white" />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-800">AI Scheduling Engine</h3>
            <p className="text-sm text-gray-500 mt-1 leading-relaxed">
              The timetable engine generates a conflict-free schedule, handles teacher clashes, room clashes, lab allocation, and batch-wise practical display in one class timetable.
            </p>
            <div className="flex flex-wrap gap-2 mt-3">
              {features.map((f) => (
                <span
                  key={f.label}
                  className={`px-3 py-1 text-xs font-medium rounded-full border ${f.color}`}
                >
                  {f.label}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
