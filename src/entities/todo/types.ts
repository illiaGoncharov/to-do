export type TodoId = string

export type TodoStatus = 'active' | 'completed'

export interface TodoItem {
  id: TodoId
  title: string
  createdAt: number
  updatedAt: number
  status: TodoStatus
}

export type TodoFilter = 'all' | 'active' | 'completed'
