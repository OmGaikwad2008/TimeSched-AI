import axios from 'axios';
import {
  INITIAL_TEACHERS,
  INITIAL_SUBJECTS,
  INITIAL_ROOMS,
  INITIAL_TIMETABLES,
} from '../data/mockData';

const API_BASE = 'http://127.0.0.1:8000/api';

const api = axios.create({
  baseURL: API_BASE,
  timeout: 3000,
  headers: { 'Content-Type': 'application/json' },
});

// Generic wrapper: try API first, fallback to mock
async function withFallback(apiCall, mockFallback) {
  try {
    const res = await apiCall();
    return res.data;
  } catch {
    console.info('[TimeSchedAI] Backend unreachable, using mock data.');
    return mockFallback();
  }
}

// ---- Teachers ----
export const fetchTeachers = () =>
  withFallback(() => api.get('/teachers'), () => INITIAL_TEACHERS);

export const addTeacher = (teacher) =>
  withFallback(() => api.post('/teachers', teacher), () => ({ ...teacher, id: Date.now() }));

export const deleteTeacher = (id) =>
  withFallback(() => api.delete(`/teachers/${id}`), () => ({ success: true }));

// ---- Subjects ----
export const fetchSubjects = () =>
  withFallback(() => api.get('/subjects'), () => INITIAL_SUBJECTS);

export const addSubject = (subject) =>
  withFallback(() => api.post('/subjects', subject), () => ({ ...subject, id: Date.now() }));

export const deleteSubject = (id) =>
  withFallback(() => api.delete(`/subjects/${id}`), () => ({ success: true }));

// ---- Rooms ----
export const fetchRooms = () =>
  withFallback(() => api.get('/rooms'), () => INITIAL_ROOMS);

export const addRoom = (room) =>
  withFallback(() => api.post('/rooms', room), () => ({ ...room, id: Date.now() }));

export const deleteRoom = (id) =>
  withFallback(() => api.delete(`/rooms/${id}`), () => ({ success: true }));

// ---- Timetable ----
export const fetchTimetable = () =>
  withFallback(() => api.get('/timetable'), () => INITIAL_TIMETABLES);

export const generateTimetable = (year) =>
  withFallback(() => api.post('/timetable/generate', { year }), () => INITIAL_TIMETABLES);
