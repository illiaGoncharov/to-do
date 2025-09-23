# To‑Do (React + Vite + TypeScript)

Минималистичное To‑Do SPA на React 19 с Zustand и SCSS Modules. Цель — чистая архитектура, строгая типизация и готовность к расширению (i18n, тесты, CI).

## Технологии
- React 19, Vite 7
- TypeScript (strict)
- Zustand
- SCSS Modules
- ESLint (typescript-eslint, react-hooks, react-refresh)

## Требования
- Node.js 20+
- npm (или pnpm/yarn)

## Установка и запуск
```bash
npm i
npm run dev
```
Сборка production:
```bash
npm run build && npm run preview
```

## Скрипты
- `dev` — старт dev-сервера Vite
- `build` — typecheck + prod-сборка
- `lint` — проверка ESLint
- `preview` — предпросмотр сборки

## Структура проекта
```
src/
  assets/
  data/
    helpers.ts       # общие утилиты
    stores/
      useToDoStore.ts
  views/
    App/
      index.tsx
      index.module.scss
    components/      # UI-компоненты (позже)
    styles/
      reset.scss
      common.scss
```

## Архитектура и принципы
- Доменные типы (Todo и др.) — отдельным модулем (`src/entities/` планируется).
- Zustand-стор: CRUD, фильтрация, персист в `localStorage`, селекторы.
- Компоненты максимально «глупые»: бизнес-логика и побочные эффекты вне UI.
- Строгая типизация, явные интерфейсы API функций.
- Код и стили — читаемость в приоритете; единый стиль форматирования.

## Качество кода
- ESLint настроен. Будет усилен типо-осознанными проверками (parserOptions с проектами tsconfig).
- Prettier + Husky + lint-staged — планируется в ближайших коммитах.
- Тесты (Vitest + React Testing Library) — запланированы.

## Окружение
- Переменных окружения пока нет. Персист — через `localStorage`.

## Дорожная карта (Variant A)
1. Инженерная гигиена: `.editorconfig`, Prettier, Husky, CI
2. Доменные типы Todo и утилиты
3. Zustand‑стор с персистом и селекторами
4. UI‑каркас: `TodoInput`, `TodoList`, `TodoItem`, `Filters`, `Stats`
5. i18n заготовка (ru/en)
6. Тесты: Vitest + RTL


