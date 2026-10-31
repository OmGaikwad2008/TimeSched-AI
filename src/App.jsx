import { useState, useEffect } from 'react';
import Login from './components/Login';
import Header from './components/Header';
import Dashboard from './components/Dashboard';
import Teachers from './components/Teachers';
import Subjects from './components/Subjects';
import Rooms from './components/Rooms';
import Generate from './components/Generate';
import Timetable from './components/Timetable';
import {
  INITIAL_TEACHERS,
  INITIAL_SUBJECTS,
  INITIAL_ROOMS,
  INITIAL_TIMETABLES,
} from './data/mockData';

// ---------- localStorage helpers ----------
function loadState(key, fallback) {
  try {
    const raw = localStorage.getItem(key);
    return raw ? JSON.parse(raw) : fallback;
  } catch {
    return fallback;
  }
}

function saveState(key, value) {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch {
    // storage full or unavailable
  }
}

// ---------- App ----------
export default function App() {
  const [user, setUser] = useState(() => loadState('tsa_user', null));
  const [activeTab, setActiveTab] = useState('Dashboard');
  const [teachers, setTeachers] = useState(() => loadState('tsa_teachers', INITIAL_TEACHERS));
  const [subjects, setSubjects] = useState(() => loadState('tsa_subjects', INITIAL_SUBJECTS));
  const [rooms, setRooms] = useState(() => loadState('tsa_rooms', INITIAL_ROOMS));
  const [timetables, setTimetables] = useState(() => loadState('tsa_timetables', INITIAL_TIMETABLES));

  // Persist to localStorage
  useEffect(() => saveState('tsa_user', user), [user]);
  useEffect(() => saveState('tsa_teachers', teachers), [teachers]);
  useEffect(() => saveState('tsa_subjects', subjects), [subjects]);
  useEffect(() => saveState('tsa_rooms', rooms), [rooms]);
  useEffect(() => saveState('tsa_timetables', timetables), [timetables]);

  // ---- Auth ----
  const handleLogin = (u) => {
    setUser(u);
    setActiveTab('Dashboard');
  };
  const handleLogout = () => {
    setUser(null);
    setActiveTab('Dashboard');
  };

  // ---- Teachers ----
  const addTeacher = (t) => setTeachers((prev) => [...prev, t]);
  const deleteTeacher = (id) => setTeachers((prev) => prev.filter((t) => t.id !== id));

  // ---- Subjects ----
  const addSubject = (s) => setSubjects((prev) => [...prev, s]);
  const deleteSubject = (id) => setSubjects((prev) => prev.filter((s) => s.id !== id));

  // ---- Rooms ----
  const addRoom = (r) => setRooms((prev) => [...prev, r]);
  const deleteRoom = (id) => setRooms((prev) => prev.filter((r) => r.id !== id));

  // ---- Generate ----
  const handleGenerate = () => {
    // In mock mode just reload initial timetables
    setTimetables(INITIAL_TIMETABLES);
  };

  const handleLoadDemo = () => {
    setTeachers(INITIAL_TEACHERS);
    setSubjects(INITIAL_SUBJECTS);
    setRooms(INITIAL_ROOMS);
    setTimetables(INITIAL_TIMETABLES);
  };

  const handleClearTimetable = () => setTimetables({});
  const handleResetAll = () => {
    setTeachers([]);
    setSubjects([]);
    setRooms([]);
    setTimetables({});
  };

  // ---- Timetable Cell Update ----
  const handleUpdateCell = (year, slotNo, day, value) => {
    setTimetables((prev) => {
      const updated = { ...prev };
      if (!updated[year]) updated[year] = { classTeacher: '', roomNo: '', grid: {} };
      if (!updated[year].grid[slotNo]) updated[year].grid[slotNo] = {};
      updated[year].grid[slotNo][day] = value;
      return { ...updated };
    });
  };

  // ---- Render ----
  if (!user) {
    return <Login onLogin={handleLogin} />;
  }

  const renderTab = () => {
    switch (activeTab) {
      case 'Dashboard':
        return <Dashboard teachers={teachers} subjects={subjects} rooms={rooms} timetables={timetables} />;
      case 'Teachers':
        return <Teachers teachers={teachers} onAdd={addTeacher} onDelete={deleteTeacher} />;
      case 'Subjects':
        return <Subjects subjects={subjects} teachers={teachers} onAdd={addSubject} onDelete={deleteSubject} />;
      case 'Rooms & Labs':
        return <Rooms rooms={rooms} onAdd={addRoom} onDelete={deleteRoom} />;
      case 'Generate':
        return (
          <Generate
            teachers={teachers}
            subjects={subjects}
            rooms={rooms}
            onGenerate={handleGenerate}
            onLoadDemo={handleLoadDemo}
            onClearTimetable={handleClearTimetable}
            onResetAll={handleResetAll}
          />
        );
      case 'View Timetable':
        return <Timetable timetables={timetables} role={user.role} onUpdateCell={handleUpdateCell} />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-purple-950 to-slate-950">
      {/* Ambient background highlights */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/3 w-[600px] h-[600px] bg-purple-600/8 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-fuchsia-600/8 rounded-full blur-3xl" />
      </div>

      <Header
        role={user.role}
        activeTab={activeTab}
        onTabChange={setActiveTab}
        onLogout={handleLogout}
      />

      <main className="relative max-w-7xl mx-auto px-4 sm:px-6 py-6">
        {renderTab()}
      </main>
    </div>
  );
}
