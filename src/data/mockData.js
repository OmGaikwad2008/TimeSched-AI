// ============================================================
// TimeSchedAI - Pre-populated Mock Data
// Example University
// ============================================================

export const DEMO_USERS = [
  { username: 'admin', password: 'admin123', role: 'Admin' },
  { username: 'student', password: 'student123', role: 'Student' },
];

export const INITIAL_TEACHERS = [
  { id: 1, name: 'Angha Bade' },
  { id: 2, name: 'Gitanjali Thakur' },
  { id: 3, name: 'Kunda Kumaran' },
  { id: 4, name: 'Maya Salve' },
  { id: 5, name: 'Pratibha Tambewagh' },
  { id: 6, name: 'Prerana Mahajan' },
  { id: 7, name: 'Ranjeet Pawar' },
  { id: 8, name: 'Rupali Bosale' },
  { id: 9, name: 'Sameer Nimkar' },
  { id: 10, name: 'Vaishali Latke' },
  { id: 11, name: 'Priya Sharma' },
  { id: 12, name: 'Rahul Deshmukh' },
  { id: 13, name: 'Sneha Kulkarni' },
  { id: 14, name: 'Amit Joshi' },
  { id: 15, name: 'Deepa Nair' },
];

export const INITIAL_SUBJECTS = [
  // ---- 1st Year ----
  { id: 1, name: 'PROFESSIONAL COMMUNICATION', year: 1, teacher: 'Maya Salve', teacherPR: '', code: 'PC', weeklyLectures: 0, weeklyPracticals: 2, practicalDuration: 1, requiresLab: false },
  { id: 2, name: 'APPLIED MATHEMATICS', year: 1, teacher: 'Angha Bade', teacherPR: '', code: 'AM', weeklyLectures: 3, weeklyPracticals: 0, practicalDuration: 1, requiresLab: false },
  { id: 3, name: 'BASIC ELECTRICAL AND ELECTRONICS ENGINEERING', year: 1, teacher: 'Angha Bade', teacherPR: '', code: 'BEAEE', weeklyLectures: 4, weeklyPracticals: 4, practicalDuration: 2, requiresLab: true },
  { id: 4, name: 'LINUX BASICS', year: 1, teacher: 'Pratibha Tambewagh', teacherPR: '', code: 'LB', weeklyLectures: 2, weeklyPracticals: 2, practicalDuration: 2, requiresLab: true },
  { id: 5, name: 'Programming in C', year: 1, teacher: 'Vaishali Latke', teacherPR: '', code: 'PIC', weeklyLectures: 2, weeklyPracticals: 2, practicalDuration: 2, requiresLab: true },

  // ---- 2nd Year ----
  { id: 6, name: 'DATA COMMUNICATION AND COMPUTER NETWORK', year: 2, teacher: 'Pratibha Tambewagh', teacherPR: '', code: 'DCCN', weeklyLectures: 3, weeklyPracticals: 4, practicalDuration: 2, requiresLab: true },
  { id: 7, name: 'ENVIRONMENTAL EDUCATION AND SUSTAINABILITY', year: 2, teacher: 'Sameer Nimkar', teacherPR: '', code: 'EES', weeklyLectures: 3, weeklyPracticals: 0, practicalDuration: 1, requiresLab: false },
  { id: 8, name: 'INFORMATION SECURITY', year: 2, teacher: 'Ranjeet Pawar', teacherPR: '', code: 'IS', weeklyLectures: 3, weeklyPracticals: 2, practicalDuration: 2, requiresLab: true },
  { id: 9, name: 'PYTHON PROGRAMMING', year: 2, teacher: 'Prerana Mahajan', teacherPR: '', code: 'PP', weeklyLectures: 3, weeklyPracticals: 4, practicalDuration: 2, requiresLab: true },
  { id: 10, name: 'SOFTWARE ENGINEERING', year: 2, teacher: 'Gitanjali Thakur', teacherPR: '', code: 'SE', weeklyLectures: 3, weeklyPracticals: 2, practicalDuration: 2, requiresLab: false },

  // ---- 3rd Year ----
  { id: 11, name: 'ARTIFICIAL INTELLIGENCE', year: 3, teacher: 'Kunda Kumaran', teacherPR: '', code: 'AI', weeklyLectures: 3, weeklyPracticals: 2, practicalDuration: 2, requiresLab: true },
  { id: 12, name: 'CLOUD COMPUTING', year: 3, teacher: 'Ranjeet Pawar', teacherPR: '', code: 'CC', weeklyLectures: 3, weeklyPracticals: 2, practicalDuration: 2, requiresLab: true },
  { id: 13, name: 'DATA ANALYTICS', year: 3, teacher: 'Rupali Bosale', teacherPR: '', code: 'DA', weeklyLectures: 3, weeklyPracticals: 2, practicalDuration: 2, requiresLab: true },
  { id: 14, name: 'INTERNET OF THINGS', year: 3, teacher: 'Prerana Mahajan', teacherPR: '', code: 'IOT', weeklyLectures: 3, weeklyPracticals: 2, practicalDuration: 2, requiresLab: true },
  { id: 15, name: 'WEB APPLICATION DEVELOPMENT', year: 3, teacher: 'Gitanjali Thakur', teacherPR: '', code: 'WAD', weeklyLectures: 3, weeklyPracticals: 4, practicalDuration: 2, requiresLab: true },
];

export const INITIAL_ROOMS = [
  // Classrooms
  { id: 1, name: '309', type: 'Classroom', capacity: 60 },
  { id: 2, name: '334', type: 'Classroom', capacity: 60 },
  { id: 3, name: '395', type: 'Classroom', capacity: 60 },
  { id: 4, name: '408', type: 'Classroom', capacity: 60 },
  { id: 5, name: '412', type: 'Classroom', capacity: 60 },
  { id: 6, name: '432', type: 'Classroom', capacity: 60 },
  { id: 7, name: '435', type: 'Classroom', capacity: 60 },
  // Labs
  { id: 8, name: '303', type: 'Lab', capacity: 25 },
  { id: 9, name: '304', type: 'Lab', capacity: 25 },
  { id: 10, name: '305', type: 'Lab', capacity: 25 },
  { id: 11, name: '306', type: 'Lab', capacity: 25 },
  { id: 12, name: '307', type: 'Lab', capacity: 25 },
  { id: 13, name: '308', type: 'Lab', capacity: 25 },
  { id: 14, name: '310', type: 'Lab', capacity: 25 },
  { id: 15, name: '311', type: 'Lab', capacity: 25 },
  { id: 16, name: '312', type: 'Lab', capacity: 25 },
  { id: 17, name: '333A', type: 'Lab', capacity: 25 },
  { id: 18, name: '333B', type: 'Lab', capacity: 25 },
  { id: 19, name: '303A', type: 'Lab', capacity: 25 },
  { id: 20, name: '303B', type: 'Lab', capacity: 25 },
  { id: 21, name: '304A', type: 'Lab', capacity: 25 },
];

export const TIME_SLOTS = [
  { slotNo: 1, time: '08:25 - 09:25' },
  { slotNo: 2, time: '09:25 - 10:25' },
  { slotNo: 'B1', time: 'BREAK', isBreak: true },
  { slotNo: 3, time: '10:30 - 11:30' },
  { slotNo: 4, time: '11:30 - 12:30' },
  { slotNo: 'L', time: 'LUNCH BREAK', isBreak: true },
  { slotNo: 5, time: '12:50 - 01:50' },
  { slotNo: 6, time: '01:50 - 02:50' },
  { slotNo: 'B2', time: 'BREAK', isBreak: true },
  { slotNo: 7, time: '02:55 - 03:55' },
  { slotNo: 8, time: '03:55 - 04:55' },
];

export const DAYS = ['MON', 'TUE', 'WED', 'THU', 'FRI'];

// ============================================================
// Pre-populated Timetable Grids (1st, 2nd, 3rd Year)
// Each cell: { subject, teacher, room } or for practicals with batches:
// { batches: [{ batch: 'A', subject, teacher, room }, ...] }
// ============================================================

const cell = (subject, teacher, room) => ({ subject, teacher, room });
const practicalCell = (...batches) => ({ batches: batches.map(b => ({ batch: b[0], subject: b[1], teacher: b[2], room: b[3] })) });

export const INITIAL_TIMETABLES = {
  1: {
    classTeacher: 'Angha Bade',
    roomNo: '412',
    grid: {
      // slot 1
      1: {
        MON: cell('AM', 'Angha Bade', '412'),
        TUE: cell('BEAEE', 'Angha Bade', '412'),
        WED: cell('PIC', 'Vaishali Latke', '412'),
        THU: cell('LB', 'Pratibha Tambewagh', '412'),
        FRI: cell('AM', 'Angha Bade', '412'),
      },
      2: {
        MON: cell('PIC', 'Vaishali Latke', '412'),
        TUE: cell('AM', 'Angha Bade', '412'),
        WED: cell('BEAEE', 'Angha Bade', '412'),
        THU: cell('BEAEE', 'Angha Bade', '412'),
        FRI: cell('LB', 'Pratibha Tambewagh', '412'),
      },
      3: {
        MON: cell('LB', 'Pratibha Tambewagh', '412'),
        TUE: practicalCell(['A', 'BEAEE', 'Angha Bade', '333A'], ['B', 'LB', 'Pratibha Tambewagh', '303B'], ['C', 'PIC', 'Vaishali Latke', '304']),
        WED: cell('BEAEE', 'Angha Bade', '412'),
        THU: practicalCell(['A', 'PIC', 'Vaishali Latke', '304'], ['B', 'BEAEE', 'Angha Bade', '333A'], ['C', 'LB', 'Pratibha Tambewagh', '303B']),
        FRI: cell('BEAEE', 'Angha Bade', '412'),
      },
      4: {
        MON: cell('BEAEE', 'Angha Bade', '412'),
        TUE: practicalCell(['A', 'BEAEE', 'Angha Bade', '333A'], ['B', 'LB', 'Pratibha Tambewagh', '303B'], ['C', 'PIC', 'Vaishali Latke', '304']),
        WED: cell('AM', 'Angha Bade', '412'),
        THU: practicalCell(['A', 'PIC', 'Vaishali Latke', '304'], ['B', 'BEAEE', 'Angha Bade', '333A'], ['C', 'LB', 'Pratibha Tambewagh', '303B']),
        FRI: cell('PIC', 'Vaishali Latke', '412'),
      },
      5: {
        MON: practicalCell(['A', 'LB', 'Pratibha Tambewagh', '303B'], ['B', 'PIC', 'Vaishali Latke', '304'], ['C', 'BEAEE', 'Angha Bade', '333A']),
        TUE: cell('BEAEE', 'Angha Bade', '412'),
        WED: practicalCell(['A', 'PC', 'Maya Salve', '412'], ['B', 'PC', 'Maya Salve', '412']),
        THU: cell('BEAEE', 'Angha Bade', '412'),
        FRI: practicalCell(['A', 'LB', 'Pratibha Tambewagh', '303B'], ['B', 'PIC', 'Vaishali Latke', '304'], ['C', 'BEAEE', 'Angha Bade', '333A']),
      },
      6: {
        MON: practicalCell(['A', 'LB', 'Pratibha Tambewagh', '303B'], ['B', 'PIC', 'Vaishali Latke', '304'], ['C', 'BEAEE', 'Angha Bade', '333A']),
        TUE: cell('LB', 'Pratibha Tambewagh', '412'),
        WED: practicalCell(['A', 'PC', 'Maya Salve', '412'], ['B', 'PC', 'Maya Salve', '412']),
        THU: cell('PIC', 'Vaishali Latke', '412'),
        FRI: practicalCell(['A', 'LB', 'Pratibha Tambewagh', '303B'], ['B', 'PIC', 'Vaishali Latke', '304'], ['C', 'BEAEE', 'Angha Bade', '333A']),
      },
      7: {
        MON: null,
        TUE: null,
        WED: null,
        THU: null,
        FRI: null,
      },
      8: {
        MON: null,
        TUE: null,
        WED: null,
        THU: null,
        FRI: null,
      },
    },
  },
  2: {
    classTeacher: 'Pratibha Tambewagh',
    roomNo: '309',
    grid: {
      1: {
        MON: cell('DCCN', 'Pratibha Tambewagh', '309'),
        TUE: cell('PP', 'Prerana Mahajan', '309'),
        WED: cell('IS', 'Ranjeet Pawar', '309'),
        THU: cell('SE', 'Gitanjali Thakur', '309'),
        FRI: cell('EES', 'Sameer Nimkar', '309'),
      },
      2: {
        MON: cell('PP', 'Prerana Mahajan', '309'),
        TUE: cell('SE', 'Gitanjali Thakur', '309'),
        WED: cell('DCCN', 'Pratibha Tambewagh', '309'),
        THU: cell('IS', 'Ranjeet Pawar', '309'),
        FRI: cell('PP', 'Prerana Mahajan', '309'),
      },
      3: {
        MON: cell('SE', 'Gitanjali Thakur', '309'),
        TUE: practicalCell(['A', 'DCCN', 'Pratibha Tambewagh', '305'], ['B', 'PP', 'Prerana Mahajan', '306'], ['C', 'IS', 'Ranjeet Pawar', '307']),
        WED: cell('EES', 'Sameer Nimkar', '309'),
        THU: practicalCell(['A', 'PP', 'Prerana Mahajan', '306'], ['B', 'IS', 'Ranjeet Pawar', '307'], ['C', 'SE', 'Gitanjali Thakur', '309']),
        FRI: cell('DCCN', 'Pratibha Tambewagh', '309'),
      },
      4: {
        MON: cell('IS', 'Ranjeet Pawar', '309'),
        TUE: practicalCell(['A', 'DCCN', 'Pratibha Tambewagh', '305'], ['B', 'PP', 'Prerana Mahajan', '306'], ['C', 'IS', 'Ranjeet Pawar', '307']),
        WED: cell('PP', 'Prerana Mahajan', '309'),
        THU: practicalCell(['A', 'PP', 'Prerana Mahajan', '306'], ['B', 'IS', 'Ranjeet Pawar', '307'], ['C', 'SE', 'Gitanjali Thakur', '309']),
        FRI: cell('SE', 'Gitanjali Thakur', '309'),
      },
      5: {
        MON: practicalCell(['A', 'PP', 'Prerana Mahajan', '306'], ['B', 'DCCN', 'Pratibha Tambewagh', '305'], ['C', 'PP', 'Prerana Mahajan', '308']),
        TUE: cell('EES', 'Sameer Nimkar', '309'),
        WED: practicalCell(['A', 'IS', 'Ranjeet Pawar', '307'], ['B', 'SE', 'Gitanjali Thakur', '309'], ['C', 'DCCN', 'Pratibha Tambewagh', '305']),
        THU: cell('DCCN', 'Pratibha Tambewagh', '309'),
        FRI: practicalCell(['A', 'SE', 'Gitanjali Thakur', '309'], ['B', 'DCCN', 'Pratibha Tambewagh', '305'], ['C', 'PP', 'Prerana Mahajan', '306']),
      },
      6: {
        MON: practicalCell(['A', 'PP', 'Prerana Mahajan', '306'], ['B', 'DCCN', 'Pratibha Tambewagh', '305'], ['C', 'PP', 'Prerana Mahajan', '308']),
        TUE: cell('DCCN', 'Pratibha Tambewagh', '309'),
        WED: practicalCell(['A', 'IS', 'Ranjeet Pawar', '307'], ['B', 'SE', 'Gitanjali Thakur', '309'], ['C', 'DCCN', 'Pratibha Tambewagh', '305']),
        THU: cell('PP', 'Prerana Mahajan', '309'),
        FRI: practicalCell(['A', 'SE', 'Gitanjali Thakur', '309'], ['B', 'DCCN', 'Pratibha Tambewagh', '305'], ['C', 'PP', 'Prerana Mahajan', '306']),
      },
      7: {
        MON: cell('IS', 'Ranjeet Pawar', '309'),
        TUE: null,
        WED: cell('SE', 'Gitanjali Thakur', '309'),
        THU: null,
        FRI: null,
      },
      8: {
        MON: null,
        TUE: null,
        WED: null,
        THU: null,
        FRI: null,
      },
    },
  },
  3: {
    classTeacher: 'Kunda Kumaran',
    roomNo: '334',
    grid: {
      1: {
        MON: cell('AI', 'Kunda Kumaran', '334'),
        TUE: cell('WAD', 'Gitanjali Thakur', '334'),
        WED: cell('CC', 'Ranjeet Pawar', '334'),
        THU: cell('DA', 'Rupali Bosale', '334'),
        FRI: cell('IOT', 'Prerana Mahajan', '334'),
      },
      2: {
        MON: cell('WAD', 'Gitanjali Thakur', '334'),
        TUE: cell('CC', 'Ranjeet Pawar', '334'),
        WED: cell('AI', 'Kunda Kumaran', '334'),
        THU: cell('IOT', 'Prerana Mahajan', '334'),
        FRI: cell('DA', 'Rupali Bosale', '334'),
      },
      3: {
        MON: cell('DA', 'Rupali Bosale', '334'),
        TUE: practicalCell(['A', 'AI', 'Kunda Kumaran', '310'], ['B', 'WAD', 'Gitanjali Thakur', '311'], ['C', 'CC', 'Ranjeet Pawar', '312']),
        WED: cell('IOT', 'Prerana Mahajan', '334'),
        THU: practicalCell(['A', 'DA', 'Rupali Bosale', '310'], ['B', 'IOT', 'Prerana Mahajan', '311'], ['C', 'WAD', 'Gitanjali Thakur', '312']),
        FRI: cell('CC', 'Ranjeet Pawar', '334'),
      },
      4: {
        MON: cell('CC', 'Ranjeet Pawar', '334'),
        TUE: practicalCell(['A', 'AI', 'Kunda Kumaran', '310'], ['B', 'WAD', 'Gitanjali Thakur', '311'], ['C', 'CC', 'Ranjeet Pawar', '312']),
        WED: cell('WAD', 'Gitanjali Thakur', '334'),
        THU: practicalCell(['A', 'DA', 'Rupali Bosale', '310'], ['B', 'IOT', 'Prerana Mahajan', '311'], ['C', 'WAD', 'Gitanjali Thakur', '312']),
        FRI: cell('AI', 'Kunda Kumaran', '334'),
      },
      5: {
        MON: practicalCell(['A', 'WAD', 'Gitanjali Thakur', '311'], ['B', 'CC', 'Ranjeet Pawar', '312'], ['C', 'AI', 'Kunda Kumaran', '310']),
        TUE: cell('IOT', 'Prerana Mahajan', '334'),
        WED: practicalCell(['A', 'CC', 'Ranjeet Pawar', '312'], ['B', 'DA', 'Rupali Bosale', '310'], ['C', 'IOT', 'Prerana Mahajan', '311']),
        THU: cell('WAD', 'Gitanjali Thakur', '334'),
        FRI: practicalCell(['A', 'IOT', 'Prerana Mahajan', '311'], ['B', 'AI', 'Kunda Kumaran', '310'], ['C', 'DA', 'Rupali Bosale', '312']),
      },
      6: {
        MON: practicalCell(['A', 'WAD', 'Gitanjali Thakur', '311'], ['B', 'CC', 'Ranjeet Pawar', '312'], ['C', 'AI', 'Kunda Kumaran', '310']),
        TUE: cell('DA', 'Rupali Bosale', '334'),
        WED: practicalCell(['A', 'CC', 'Ranjeet Pawar', '312'], ['B', 'DA', 'Rupali Bosale', '310'], ['C', 'IOT', 'Prerana Mahajan', '311']),
        THU: cell('AI', 'Kunda Kumaran', '334'),
        FRI: practicalCell(['A', 'IOT', 'Prerana Mahajan', '311'], ['B', 'AI', 'Kunda Kumaran', '310'], ['C', 'DA', 'Rupali Bosale', '312']),
      },
      7: {
        MON: cell('IOT', 'Prerana Mahajan', '334'),
        TUE: cell('AI', 'Kunda Kumaran', '334'),
        WED: cell('DA', 'Rupali Bosale', '334'),
        THU: null,
        FRI: cell('WAD', 'Gitanjali Thakur', '334'),
      },
      8: {
        MON: null,
        TUE: null,
        WED: null,
        THU: null,
        FRI: null,
      },
    },
  },
};
