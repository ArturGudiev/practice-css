# Vue Router Project

A simple Vue 3 project with Vue Router demonstrating route-based component rendering.

## Setup

1. Install dependencies:
```bash
npm install
```

2. Run development server:
```bash
npm run dev
```

3. Open your browser and navigate to:
   - `http://localhost:3000` - Shows nothing (no route matched)
   - `http://localhost:3000/1` - Shows Component 1
   - `http://localhost:3000/2` - Shows Component 2
   - `http://localhost:3000/3` - Shows Component 3

## Project Structure

```
vue-router-project/
├── src/
│   ├── components/
│   │   ├── Component1.vue
│   │   ├── Component2.vue
│   │   └── Component3.vue
│   ├── App.vue
│   ├── main.js
│   └── router.js
├── index.html
├── package.json
└── vite.config.js
```

