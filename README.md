# Unity Developer Portfolio Template

Готовый premium dark шаблон сайта-портфолио для Unity-разработчика.

Стек:
- Vite
- React
- TypeScript
- Tailwind CSS
- Framer Motion

Шаблон рассчитан на GitHub Pages, не использует backend и специально собран так, чтобы весь контент можно было быстро редактировать в одном месте.

---

## Что это за проект

Это статический сайт-портфолио для Unity Developer / Gameplay Programmer / Systems Programmer.

В шаблоне уже есть:
- hero-блок;
- блок «Обо мне»;
- блок сильных и актуальных проектов;
- блок образования;
- блок технологий;
- блок выпущенных проектов;
- блок контактов;
- футер;
- placeholder-изображения;
- анимации;
- адаптивная вёрстка;
- готовая настройка для GitHub Pages через GitHub Actions.

---

## Быстрый старт

### 1) Установить зависимости

```bash
npm install
```

### 2) Запустить проект локально

```bash
npm run dev
```

После запуска откройте адрес, который покажет Vite в терминале.

### 3) Собрать production-версию

```bash
npm run build
```

Готовая сборка появится в папке `dist`.

### 4) Локально проверить production-сборку

```bash
npm run preview
```

---

## Публикация на GitHub Pages

В проект уже добавлен workflow:

```text
.github/workflows/deploy.yml
```

Он автоматически собирает сайт и публикует его на GitHub Pages после пуша в ветку `main`.

### Пошагово

1. Создайте новый репозиторий на GitHub.
2. Загрузите в него этот проект.
3. Убедитесь, что основная ветка называется `main`.
4. Выполните:

```bash
git init
git add .
git commit -m "Initial portfolio setup"
git branch -M main
git remote add origin https://github.com/ВАШ-USERNAME/ВАШ-REPO.git
git push -u origin main
```

5. На GitHub откройте:
   - `Settings` → `Pages`
6. В разделе Build and deployment выберите:
   - `Source: GitHub Actions`
7. После этого GitHub автоматически запустит workflow и опубликует сайт.

### Где смотреть статус деплоя

Откройте вкладку:
- `Actions`

Там будет виден процесс сборки и публикации.

### Почему здесь не нужен repo name в Vite config

В `vite.config.ts` уже установлен:

```ts
base: './'
```

Это позволяет использовать относительные пути к ассетам и упрощает деплой на GitHub Pages без жёсткой привязки к имени репозитория.

---

## Как менять контент

### Главный файл с данными

Основной контент сайта меняется здесь:

```text
src/data/portfolioData.ts
```

Это главный конфиг проекта.

Именно в нём меняются:
- имя;
- роль;
- краткое описание;
- сильные стороны;
- специализации;
- блок проектов;
- образование;
- стек технологий;
- выпущенные проекты;
- контакты;
- футер;
- пути к картинкам.

---

## Что и где менять

### 1) Имя и hero-блок

Файл:

```text
src/data/portfolioData.ts
```

Секция:

```ts
hero: {
  name: 'Имя Фамилия',
  role: 'Middle Unity Developer',
  experienceNote: 'X+ лет опыта работы',
  location: 'Локация: РФ, Ростов-на-Дону',
  primaryCta: { label: 'Смотреть краткое CV', href: '#about' },
  secondaryCta: { label: 'Связаться', href: '#contacts' },
  avatar: './placeholders/avatar-placeholder.svg',
}
```

Здесь меняются:
- имя;
- роль;
- строка с опытом;
- подписи и ссылки кнопок;
- аватар;
- строка с локацией.

---

### 2) Описание «Обо мне»

Файл:

```text
src/data/portfolioData.ts
```

Секция:

```ts
about: {
  title: 'Обо мне',
  description: '...',
  strengths: [...],
  specializations: [...],
  favoriteGenres: [...],
  lookingFor: [...],
}
```

Здесь меняются:
- основной текст;
- сильные стороны;
- направления разработки;
- любимые жанры игр;
- какую роль и формат работы вы ищете.

---

### 3) Самые сильные проекты

Файл:

```text
src/data/portfolioData.ts
```

Секция:

```ts
featuredProjects: [
  {
    title: 'Project Placeholder Alpha',
    subtitle: '...',
    description: '...',
    role: '...',
    genre: '...',
    platform: '...',
    stack: ['Unity', 'C#'],
    linkLabel: '...',
    url: '#',
    image: './placeholders/project-placeholder.svg',
    highlights: ['...', '...', '...'],
  }
]
```

Здесь меняются:
- название проекта;
- краткое описание;
- жанр;
- платформа;
- роль;
- стек;
- ссылка;
- картинка;
- highlights.

Тег open-source, тексты карточек и стек также меняются здесь.

---

### 4) Образование

Файл:

```text
src/data/portfolioData.ts
```

Секция:

```ts
education: [
  {
    title: '...',
    period: '...',
    description: '...',
    achievements: ['...', '...'],
    image: './placeholders/education-placeholder.svg',
  }
]
```

Здесь меняются:
- учебное заведение или курс;
- период;
- описание;
- достижения;
- картинка.

---

### 5) Стек технологий

Файл:

```text
src/data/portfolioData.ts
```

Секция:

```ts
techStack: [
  {
    title: 'Core Development',
    description: '...',
    items: ['Unity', 'C#', 'Git'],
  }
]
```

Здесь меняются:
- названия категорий;
- описания категорий;
- список технологий внутри каждой категории.

---

### 6) Выпущенные проекты

Файл:

```text
src/data/portfolioData.ts
```

Секция:

```ts
releasedProjects: [
  {
    title: '...',
    description: '...',
    status: 'Released / Live',
    platform: 'Steam / App Store / Google Play',
    linkLabel: '...',
    url: '#',
    image: './placeholders/release-placeholder.svg',
  }
]
```

Здесь меняются:
- название;
- описание;
- статус;
- платформа;
- ссылка;
- обложка.

---

### 7) Контакты

Файл:

```text
src/data/portfolioData.ts
```

Секция:

```ts
contacts: [
  { label: 'GitHub', value: 'github.com/your-profile', url: 'https://github.com/', platform: 'github' }
]
```

Здесь меняются:
- название площадки;
- отображаемое значение;
- ссылка;
- тип платформы.

Поддерживаемые `platform`:
- `github`
- `telegram`
- `email`
- `linkedin`
- `artstation`
- `itch`
- `googlePlay`
- `appStore`

---

## Как поменять картинки

### Где лежат placeholder-изображения

```text
public/placeholders/
```

Там уже есть:
- `avatar-placeholder.svg`
- `project-placeholder.svg`
- `education-placeholder.svg`
- `release-placeholder.svg`

### Как заменить картинки

#### Вариант 1: просто подменить файлы

Можно заменить сами SVG-файлы своими изображениями, сохранив имена файлов.

#### Вариант 2: добавить свои файлы и поменять пути

Например, положите изображения сюда:

```text
public/images/
```

И затем укажите новые пути в `src/data/portfolioData.ts`:

```ts
avatar: './images/my-avatar.jpg'
```

или

```ts
image: './images/project-01.webp'
```

---

## Какие файлы отвечают за контент

### Контент

```text
src/data/portfolioData.ts
```

### Главная сборка страницы

```text
src/App.tsx
```

### Секции сайта

```text
src/components/sections/
```

### Навигация

```text
src/components/layout/Navbar.tsx
```

### Общие UI-компоненты

```text
src/components/common/
```

### Стили

```text
src/index.css
```

### Настройки Vite

```text
vite.config.ts
```

### Настройки Tailwind

```text
tailwind.config.js
```

### GitHub Pages workflow

```text
.github/workflows/deploy.yml
```

---

## Пример структуры заполнения данных

Ниже короткий пример того, как выглядит одна карточка проекта:

```ts
{
  title: 'Combat Systems Framework',
  subtitle: 'Gameplay systems',
  description: 'Краткое описание проекта и вашего вклада.',
  role: 'Unity Gameplay Programmer',
  genre: 'Action RPG',
  platform: 'PC / Console',
  stack: ['Unity', 'C#', 'Addressables', 'Zenject'],
  linkLabel: 'Смотреть кейс',
  url: 'https://your-link.example',
  image: './images/combat-framework.webp',
  highlights: [
    'Разработал архитектуру боевой системы.',
    'Снизил время интеграции новых фич.',
    'Подготовил систему к масштабированию.'
  ]
}
```

---

## Структура проекта

```text
unity-portfolio-template/
├─ .github/
│  └─ workflows/
│     └─ deploy.yml
├─ public/
│  ├─ favicon.svg
│  └─ placeholders/
│     ├─ avatar-placeholder.svg
│     ├─ education-placeholder.svg
│     ├─ project-placeholder.svg
│     └─ release-placeholder.svg
├─ src/
│  ├─ components/
│  │  ├─ common/
│  │  ├─ layout/
│  │  └─ sections/
│  ├─ data/
│  │  └─ portfolioData.ts
│  ├─ types/
│  │  └─ portfolio.ts
│  ├─ App.tsx
│  ├─ index.css
│  └─ main.tsx
├─ .gitignore
├─ index.html
├─ package.json
├─ postcss.config.js
├─ tailwind.config.js
├─ tsconfig.app.json
├─ tsconfig.json
├─ tsconfig.node.json
├─ vite.config.ts
└─ README.md
```

---

## Важные комментарии

- В `src/data/portfolioData.ts` уже оставлены пояснения, что и где менять.
- Все изображения сейчас являются заглушками и легко заменяются.
- Все ссылки сейчас шаблонные и их нужно заменить на реальные.
- Кнопка `Смотреть краткое CV` по умолчанию ведёт на секцию `#about`. При желании можно заменить её на ссылку на PDF-резюме.
- Контент намеренно сделан шаблонным без реальных персональных данных.

---

## Рекомендованный порядок кастомизации

1. Заменить имя и позиционирование в `hero`.
2. Обновить блок `about`.
3. Заполнить `featuredProjects` реальными кейсами.
4. Заполнить `releasedProjects` релизами.
5. Обновить `techStack`.
6. Подставить контакты.
7. Заменить placeholder-изображения.
8. Запушить в GitHub и включить Pages через GitHub Actions.

---

## Готово

После этого у вас будет полностью рабочий premium шаблон портфолио Unity-разработчика, который можно использовать как основу под GitHub Pages.
