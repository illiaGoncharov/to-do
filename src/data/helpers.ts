// Утилиты проекта — чистые функции без побочных эффектов

// Генерация стабильного идентификатора задачи
export function generateId(): string {
  // Простая версия: время + случайная часть
  return `${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 8)}`
}

// Форматирование даты для отображения (YYYY-MM-DD HH:mm)
export function formatDate(date: Date | number): string {
  const d = typeof date === 'number' ? new Date(date) : date
  const yyyy = d.getFullYear()
  const mm = String(d.getMonth() + 1).padStart(2, '0')
  const dd = String(d.getDate()).padStart(2, '0')
  const hh = String(d.getHours()).padStart(2, '0')
  const mi = String(d.getMinutes()).padStart(2, '0')
  return `${yyyy}-${mm}-${dd} ${hh}:${mi}`
}

// Нормализация строки: обрезка и схлопывание пробелов
export function normalizeText(value: string): string {
  return value.replace(/\s+/g, ' ').trim()
}

// Проверка, что строка непустая после нормализации
export function isNonEmpty(value: string): boolean {
  return normalizeText(value).length > 0
}
