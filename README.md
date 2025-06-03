# Codex Todo

This project contains a simple todo application with a React frontend and an Express backend written in TypeScript.

## Backend

```
cd backend
npm install
npm run dev
```

The server connects to MongoDB using the `MONGO_URL` environment variable. Default: `mongodb://localhost:27017/codex-todo`.

## Frontend

```
cd frontend
npm install
npm run dev
```

The app will communicate with the backend at `http://localhost:3000/api` (set `VITE_API_URL` in `.env`).

## Docker

To run the full application with Docker:

```bash
docker compose up --build
```

The frontend will be available at [http://localhost:5173](http://localhost:5173) and the backend at [http://localhost:3000](http://localhost:3000).
