import { create } from 'zustand';

interface Task {
  id: string;
  title: string;
  createdAt: number;
}

interface ToDoStore {
  tasks: Task[];
  createTask: (title: string) => void;
  updateTask: (id: string, title: string) => void;
  removeTask: (id: string) => void;
}

export const useToDoStore = create<ToDoStore>((set, get) => ({
  tasks: [],
  createTask: (title: string) => {
    const { tasks } = get();
    console.log(tasks);
  },
  updateTask: (id: string, title: string) => {},
  removeTask: (id: string) => {},
}));
