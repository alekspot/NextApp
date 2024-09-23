export type Note = {
  id: number;
  title: string;
  description: string;
  pinned: boolean;
  icon: string;
};

export type CreateNoteRequestBody = {
  title: string;
  description: string;
  icon?: string;
};

export type UpdateNoteRequestBody = {
  id: number;
  title?: string;
  description?: string;
  username: string;
  pinned?: boolean;
  icon?: string;
};
