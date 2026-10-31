import { useState } from 'react';
import { Printer, Pencil, PencilOff } from 'lucide-react';
import { TIME_SLOTS, DAYS } from '../data/mockData';

export default function Timetable({ timetables, role, onUpdateCell }) {
  const [selectedYear, setSelectedYear] = useState(1);
  const [editMode, setEditMode] = useState(false);
  const [editingCell, setEditingCell] = useState(null);
  const [editValue, setEditValue] = useState('');

  const yearData = timetables[selectedYear];
  const grid = yearData?.grid || {};

  const yearLabels = [
    { year: 1, label: '1st Year' },
    { year: 2, label: '2nd Year' },
    { year: 3, label: '3rd Year' },
  ];

  const handlePrint = () => window.print();

  const handleCellClick = (slotNo, day) => {
    if (!editMode) return;
    const cell = grid[slotNo]?.[day];
    if (cell?.batches) {
      setEditValue(cell.batches.map((b) => `${b.subject}-${b.batch} (${b.room})`).join(', '));
    } else if (cell) {
      setEditValue(cell.subject || '');
    } else {
      setEditValue('');
    }
    setEditingCell({ slotNo, day });
  };

  const handleCellSave = () => {
    if (editingCell && onUpdateCell) {
      const val = editValue.trim();
      onUpdateCell(selectedYear, editingCell.slotNo, editingCell.day, val ? { subject: val, teacher: '', room: '' } : null);
    }
    setEditingCell(null);
    setEditValue('');
  };

  const renderCellContent = (slotNo, day) => {
    const cell = grid[slotNo]?.[day];

    if (editingCell?.slotNo === slotNo && editingCell?.day === day) {
      return (
        <input
          autoFocus
          value={editValue}
          onChange={(e) => setEditValue(e.target.value)}
          onBlur={handleCellSave}
          onKeyDown={(e) => e.key === 'Enter' && handleCellSave()}
          className="w-full px-1 py-0.5 text-xs border border-purple-300 rounded focus:outline-none focus:ring-1 focus:ring-purple-400 bg-purple-50"
        />
      );
    }

    if (!cell) {
      return <span className="text-gray-300 text-xs">—</span>;
    }

    if (cell.batches) {
      return (
        <div className="space-y-0.5">
          {cell.batches.map((b, i) => (
            <div key={i} className="text-[10px] leading-tight">
              <span className="font-semibold text-purple-700">{b.subject}</span>
              <span className="text-gray-500">-{b.batch}</span>
              <span className="text-gray-400"> ({b.room})</span>
            </div>
          ))}
        </div>
      );
    }

    return (
      <div className="text-xs leading-tight">
        <div className="font-semibold text-gray-800">{cell.subject}</div>
        {cell.teacher && <div className="text-[10px] text-gray-400 truncate">{cell.teacher}</div>}
      </div>
    );
  };

  return (
    <div className="animate-fade-in">
      {/* Controls */}
      <div className="no-print flex flex-wrap items-center justify-between gap-3 mb-4">
        <div className="flex gap-1.5">
          {yearLabels.map((yl) => (
            <button
              key={yl.year}
              onClick={() => setSelectedYear(yl.year)}
              className={`px-4 py-2 text-sm font-medium rounded-xl border transition-all cursor-pointer ${
                selectedYear === yl.year
                  ? 'bg-purple-600 text-white border-purple-600 shadow-md shadow-purple-500/20'
                  : 'text-gray-600 border-gray-200 hover:bg-gray-50'
              }`}
            >
              {yl.label}
            </button>
          ))}
        </div>
        <div className="flex gap-2">
          {role === 'Admin' && (
            <button
              onClick={() => setEditMode(!editMode)}
              className={`flex items-center gap-1.5 px-4 py-2 text-sm font-medium rounded-xl border transition-all cursor-pointer ${
                editMode
                  ? 'bg-amber-50 text-amber-700 border-amber-200'
                  : 'text-gray-600 border-gray-200 hover:bg-gray-50'
              }`}
            >
              {editMode ? <PencilOff className="w-4 h-4" /> : <Pencil className="w-4 h-4" />}
              {editMode ? 'Disable Edit' : 'Enable Edit Mode'}
            </button>
          )}
          <button
            onClick={handlePrint}
            className="flex items-center gap-1.5 px-4 py-2 text-sm font-medium rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white transition-all shadow-md cursor-pointer"
          >
            <Printer className="w-4 h-4" />
            Print / Save PDF
          </button>
        </div>
      </div>

      {/* Timetable Card */}
      <div className="bg-white rounded-2xl border border-purple-100 shadow-xl shadow-purple-950/10 p-4 sm:p-6 timetable-print overflow-x-auto">
        {/* Official Header */}
        <div className="text-center mb-4">
          <h2 className="text-sm sm:text-base font-bold text-gray-800 uppercase tracking-wide">
            Example University
          </h2>
          <p className="text-xs sm:text-sm font-semibold text-gray-600 mt-0.5">
            Time-Table for Academic Session 2026-27
          </p>

          <div className="flex justify-center gap-4 sm:gap-8 mt-2 text-xs text-gray-600">
            <span>
              <strong>CLASS:</strong>{' '}
              {selectedYear === 1 ? 'FY (1st Year)' : selectedYear === 2 ? 'SY (2nd Year)' : 'TY (3rd Year)'}
            </span>
            <span><strong>CLASS TEACHER:</strong> {yearData?.classTeacher || '—'}</span>
            <span><strong>ROOM NO:</strong> {yearData?.roomNo || '—'}</span>
          </div>
        </div>

        {/* Timetable Grid */}
        <table className="w-full border-collapse text-center min-w-[700px]">
          <thead>
            <tr>
              <th className="border border-gray-200 bg-gradient-to-b from-purple-50 to-white px-2 py-2 text-xs font-bold text-gray-700 w-10">No</th>
              <th className="border border-gray-200 bg-gradient-to-b from-purple-50 to-white px-2 py-2 text-xs font-bold text-gray-700 w-28">Time</th>
              {DAYS.map((day) => (
                <th key={day} className="border border-gray-200 bg-gradient-to-b from-purple-50 to-white px-2 py-2 text-xs font-bold text-gray-700">
                  {day}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {TIME_SLOTS.map((slot) => {
              if (slot.isBreak) {
                return (
                  <tr key={slot.slotNo} className="break-row">
                    <td
                      colSpan={7}
                      className="border border-gray-200 bg-gradient-to-r from-gray-50 via-gray-100 to-gray-50 py-1.5 text-xs font-bold text-gray-500 tracking-widest uppercase"
                    >
                      {slot.time}
                    </td>
                  </tr>
                );
              }

              return (
                <tr key={slot.slotNo} className="hover:bg-purple-50/30 transition-colors">
                  <td className="border border-gray-200 px-2 py-2 text-xs font-medium text-gray-500">
                    {slot.slotNo}
                  </td>
                  <td className="border border-gray-200 px-2 py-2 text-[11px] font-medium text-gray-500 whitespace-nowrap">
                    {slot.time}
                  </td>
                  {DAYS.map((day) => (
                    <td
                      key={day}
                      onClick={() => handleCellClick(slot.slotNo, day)}
                      className={`border border-gray-200 px-1.5 py-1.5 align-top ${
                        editMode ? 'cursor-pointer hover:bg-purple-50' : ''
                      } ${
                        grid[slot.slotNo]?.[day]?.batches ? 'bg-purple-50/40' : ''
                      }`}
                    >
                      {renderCellContent(slot.slotNo, day)}
                    </td>
                  ))}
                </tr>
              );
            })}
          </tbody>
        </table>

        {!yearData && (
          <div className="text-center py-12">
            <p className="text-gray-400 text-sm">
              No timetable generated for this year yet. Go to the Generate tab to create one.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
