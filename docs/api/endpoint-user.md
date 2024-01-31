# Dokumentasi User Endpoint API

Berikut adalah daftar endpoint API yang tersedia:

## 1. \*\*POST `/v1/api/register` Membuat user.

```json
{
  "message": "Successfully create user"
}
```

## 2. \*\*POST `/v1/api/login` Login user.

```json
{
  "message": "Login successful",
  "token": "cookie token"
}
```

## 3. \*\*GET `/v1/api/logout` Logout user.

```json
{
  "message": "Logout successful"
}
```
