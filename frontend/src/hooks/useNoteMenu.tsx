import { useMutation, useQueryClient } from '@tanstack/react-query';
import { createNote, deleteNote, updateNote } from '@/api/notes';
import { useParams, useRouter } from 'next/navigation';
import { Note } from '@/types/Note';
import { useProfile } from '@/providers/AuthProvider';

export const useNoteMenu = () => {
  const router = useRouter();
  const { username, noteId } = useParams();
  const id = Number(noteId);
  const queryClient = useQueryClient();
  const { username: usernameProfile } = useProfile();

  const { mutate: removeNote } = useMutation({
    mutationFn: deleteNote,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['notes'] });
      router.push('/' + username);
    },
  });

  const { mutate: update } = useMutation({
    mutationFn: updateNote,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['note', { id }] });
      queryClient.invalidateQueries({ queryKey: ['notes'] });
    },
  });

  const { mutate: addNote } = useMutation({
    mutationFn: createNote,
    onSuccess: (newNote) => {
      queryClient.invalidateQueries({ queryKey: ['notes'] });
      router.push(`/${username}/${newNote.id}`);
    },
  });

  const pinNote = (note: Note) => {
    update({ ...note, username: usernameProfile || '', pinned: !note.pinned });
  };

  return { deleteNote: removeNote, updateNote: update, createNote: addNote, pinNote };
};
