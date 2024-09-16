# BookStore API

A robust API for managing a bookstore's inventory, authors, and user authentication.

## 🚀 Getting Started

### Prerequisites

- Node.js
- npm
- MongoDB

### Installation

1. Install dependencies:
   ```bash
   cd BookStore-Api
   npm install
   ```

2. Create a `.env` file and add your configurations:
   ```
   PORT=5000
   MONGO_URI=your-mongodb-uri
   JWT_SECRET=your-secret-key
   ```

3. Start the server:
   ```bash
   npm start
   ```

## 🛣️ API Endpoints

### 🔑 Authentication

* **POST** `/api/auth/register` – Register a new user.
* **POST** `/api/auth/login` – Login and get an authentication token.

### 📚 Books

* **GET** `/api/books` – Get a list of all books.
* **POST** `/api/books` – Add a new book.
* **PUT** `/api/books/:id` – Update book details.
* **DELETE** `/api/books/:id` – Remove a book.

### 🖊️ Authors

* **GET** `/api/authors` – Get all authors.
* **POST** `/api/authors` – Add a new author.
* **PUT** `/api/authors/:id` – Update author info.
* **DELETE** `/api/authors/:id` – Delete an author.

## 🔒 Security & Best Practices

* All endpoints are secured with JWT, ensuring only authenticated users can access protected routes.
* Sensitive data is stored securely in the `.env` file.
* Always validate incoming data using `express-validator` or similar tools for secure data handling.

## 🛠️ Future Enhancements

* **Advanced Search**: Implement full-text search for book titles, authors, and categories.
* **Wishlist**: Allow users to add books to their wishlist.
* **Reviews & Ratings**: Add the ability for users to leave reviews and rate books.
* **Recommendation System**: Recommend books based on user preferences.

## 🤝 Contributing

We welcome contributions! If you want to add new features or fix bugs, feel free to open an issue or submit a pull request.

## 📄 License

This project is licensed under the MIT License. See the LICENSE file for details.

**Made with ❤️ by Fahd Azmy**
