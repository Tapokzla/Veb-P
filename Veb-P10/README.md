Цей проєкт реалізує CRUD-операції для таблиці книг на базі PostgreSQL з використанням Node.js та Express.

1. Клонувати репозиторій
2. Встановити залежності:

```bash
npm install
```

3. Налаштувати підключення до бази у `db.js`

```js
export const pool = new Pool({
  user: 'ваш_користувач',
  host: 'localhost',
  database: 'library',
  password: 'ваш_пароль',
  port: 5432
});
```

4. Створити базу даних:

```sql
CREATE DATABASE library;
```

5. Виконати `db.sql` для створення таблиці та заповнення даними.

6. Запустити сервер:

```bash
npm start
```

Реалізовані маршрути

| Метод | Маршрут            | Опис                              |
|-------|--------------------|-----------------------------------|
| GET   | /books             | Отримати всі книги                |
| GET   | /books/:id         | Отримати книгу за ID              |
| POST  | /books             | Додати нову книгу                 |
| PUT   | /books/:id         | Оновити книгу за ID               |
| DELETE| /books/:id         | Видалити книгу за ID              |

Тестування через Postman

- **GET** `/books` — отримати список книг.
- **POST** `/books` — додати книгу:
```json
{
  "title": "Node.js Guide",
  "author": "John Doe",
  "published_year": 2022
}
```
- **PUT** `/books/1` — оновити книгу з ID 1.
- **DELETE** `/books/1` — видалити книгу з ID 1.
