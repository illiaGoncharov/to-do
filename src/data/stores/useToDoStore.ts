import { create } from 'zustand'
import type { TodoFilter, TodoItem, TodoId } from '../../entities/todo/types'

interface ToDoState {
  items: Record<TodoId, TodoItem>
  order: TodoId[]
  filter: TodoFilter
}

interface ToDoActions {
  add: (title: string) => void
  toggle: (id: TodoId) => void
  remove: (id: TodoId) => void
  clearCompleted: () => void
  setFilter: (filter: TodoFilter) => void
  rename: (id: TodoId, title: string) => void
}

interface ToDoSelectors {
  list: () => TodoItem[]
  filtered: () => TodoItem[]
  stats: () => { total: number; active: number; completed: number }
}

export type ToDoStore = ToDoState & ToDoActions & ToDoSelectors

// Заготовка стора. Реализацию CRUD, фильтров и персиста добавим по уроку.
export const useToDoStore = create<ToDoStore>(() => ({
  items: {},
  order: [],
  filter: 'all',

  add: () => {},
  toggle: () => {},
  remove: () => {},
  clearCompleted: () => {},
  setFilter: () => {},
  rename: () => {},

  list: () => [],
  filtered: () => [],
  stats: () => ({ total: 0, active: 0, completed: 0 }),
}))
