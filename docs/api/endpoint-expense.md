# Dokumentasi Data Pengeluaran Endpoint API

Berikut adalah daftar endpoint API yang tersedia:

### Login terlebih dahulu

```json
{
  "message": "Unauthorized"
}
```

## 1. \*\*GET `/v1/api/expense` Mendapatkan daftar pengeluaran.

```json
{
  "id": "4591cc60-0265-4501-ba05-71a05e85fd19",
  "username": "user",
  "createdAt": "2024-01-31T07:19:41.681Z",
  "expenses": []
}
```

## 2. \*\*POST `/v1/api/expense` Membuat pengeluaran baru.

```json
{
  "expense": {
    "id": "b85f1a36-387a-4147-a575-b4e54f6644ed",
    "amount": 10000,
    "category": "Shopping",
    "notes": "your note",
    "createdAt": "2024-01-31T09:24:39.070Z",
    "userId": "4591cc60-0265-4501-ba05-71a05e85fd19"
  },
  "message": "Successfully created expense!"
}
```

## 3. \*\*PATCH `/v1/api/expense/:id` Mengedit/update pengeluaran.

```json
{
  "message": "Successfully updated expense!",
  "data": {
    "id": "581eb28c-6887-44bb-8706-fe9bc2978b7d",
    "amount": 100,
    "category": "Shopping",
    "notes": null,
    "createdAt": "2024-01-31T08:55:05.477Z",
    "userId": "4591cc60-0265-4501-ba05-71a05e85fd19"
  }
}
```

## 4. \*\*DELETE `/v1/api/expense/:id` Menghapus pengeluaran.

```json
{
  "message": "Successfully deleted expense"
}
```
