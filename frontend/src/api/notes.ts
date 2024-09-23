import { CreateNoteRequestBody, Note, UpdateNoteRequestBody } from '../types/Note';
import { apiClient } from './apiRequest';

export const getNotes = (username: string): Promise<Note[]> => {
  return apiClient.get(`/notes/${username}/all`).then((res) => res.data);
};

export const getNote = (username: string, id: string): Promise<Note> => {
  return apiClient.get(`/notes/${username}/${id}`).then((res) => res.data);
};

export const createNote = (body: CreateNoteRequestBody): Promise<Note> => {
  return apiClient.post('/notes/add', body).then((res) => res.data);
};

export const deleteNote = (id: number) => {
  return apiClient.delete('/notes/' + id);
};

export const updateNote = (body: UpdateNoteRequestBody) => {
  return apiClient.put(`/notes/update/${body.username}/${body.id}`, body);
};

export const testReq = () => {
  return apiClient.get('/test');
};
