# Sistem Review Kantin

Project Praktikum RSI: backend Express + SQL Server dan frontend React untuk mengelola data warung kantin beserta autentikasi pengguna.

## Teknologi

- **Backend:** Express 5, TypeScript, Drizzle ORM, Zod, JWT, bcryptjs, Swagger
- **Frontend:** React 19, TypeScript, Vite, React Router DOM, Fetch API
- **Database:** SQL Server

## Cara Menjalankan

### 1. Database

Jalankan script di `backend/db/` secara berurutan di SSMS:

1. `01-create-login.sql`
2. `02-schema.sql`
3. `03-seed.sql`
4. `04-akun-uji.sql` (mengaktifkan password akun uji)

### 2. Backend

```bash
cd backend
cp .env.example .env
npm install
npm run dev
```

Isi `.env` dengan koneksi database dan `JWT_SECRET`. Backend berjalan di `http://localhost:3000`, dokumentasi API di `http://localhost:3000/docs`.

### 3. Frontend

```bash
cd frontend
cp .env.example .env
npm install
npm run dev
```

Buka `http://localhost:5173`.

## Akun Uji

Password semua akun: `Password123`

| Role     | Email                |
|----------|----------------------|
| Admin    | `admin@kantin.test`  |
| Owner    | `tini@kantin.test`   |
| Customer | `bagas@student.test` |

## Endpoint Utama

Base URL: `/api/v1`

| Method | Endpoint                        | Akses        |
|--------|---------------------------------|--------------|
| GET    | `/stalls`, `/stalls/:id`        | Publik       |
| POST   | `/stalls`                       | Owner, Admin |
| PUT    | `/stalls/:id`                   | Owner, Admin |
| DELETE | `/stalls/:id`                   | Admin        |
| POST   | `/auth/register`, `/auth/login` | Publik       |
| GET    | `/auth/me`                      | Login        |

## Fitur

- Daftar warung dengan pencarian, filter kategori, dan pagination
- Detail, tambah, ubah, dan hapus warung sesuai role
- Registrasi, login, logout, dan profil pengguna
- Tampilan loading, empty, dan error state
