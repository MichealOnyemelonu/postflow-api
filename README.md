This project is an intro to backend *PostFlow API*

PostFlow API is a **Node.js/Express** backend demonstrating RESTful API design with **MongoDB** and **Mongoose**. It handles user authentication (registration, login, logout) and post management (**create, read, update, delete**), with a clean separation of concerns across **routes, controllers, and data models**, and secure password hashing via bcrypt.

It implements two resources:
- **Users** — registration, login, and logout with hashed passwords
- **Posts** — full CRUD (create, read, update, delete)

## Tech Stack

- **Node.js** + **Express 5** — server and routing
- **MongoDB** + **Mongoose** — database and schema modeling
- **bcrypt** — password hashing
- **dotenv** — environment variable management
- **nodemon** — auto-restart during development

## Project Structure

```
├── backend
│   ├── src
│   │   ├── config
│   │   │   ├── constants.js
│   │   │   └── database.js
│   │   ├── controllers
│   │   │   ├── post.controller.js
│   │   │   └── user.controller.js
│   │   ├── models
│   │   │   ├── post.model.js
│   │   │   └── user.model.js
│   │   ├── routes
│   │   │   ├── post.route.js
│   │   │   └── user.route.js
│   │   ├── app.js
│   │   └── index.js
│   ├── package-lock.json
│   └── package.json
├── postman
│   ├── collections
│   ├── environments
│   ├── flows
│   ├── globals
│   │   └── workspace.globals.yaml
│   ├── mocks
│   └── specs
├── README.md
├── UNCUT.md
├── Uncut.md
├── errors_fixed.md
├── learning.txt
└── package-lock.json

```





## Getting Started

### 1. Clone the repo
```bash
git clone https://github.com/MichealOnyemelonu/postflow-api.git
cd postflow-api
```

### 2. Install dependencies
```bash
npm install
```

### 3. Set up environment variables
Create a `.env` file in the project root:
```env
PORT=4000
MONGODB_URI=your_mongodb_connection_string
```

### 4. Run the server
```bash
# development (auto-restart on changes)
npm run dev

# production
npm start
```
The server will start on `http://localhost:4000` (or whichever `PORT` you set).

## API Endpoints

### Users — `/api/v1/users`

| Method | Endpoint    | Description         |
|--------|-------------|----------------------|
| POST   | `/register` | Register a new user |
| POST   | `/login`    | Log in a user        |
| POST   | `/logout`   | Log out a user       |

### Posts — `/api/v1/posts`

| Method | Endpoint       | Description        |
|--------|----------------|----------------------|
| POST   | `/create`      | Create a new post   |
| GET    | `/getPosts`    | Get all posts       |
| PATCH  | `/update/:id`  | Update a post by ID |
| DELETE | `/delete/:id`  | Delete a post by ID |

## Notes

- Passwords are hashed with `bcrypt` before being saved to the database (via a Mongoose `pre("save")` hook).
- This is a learning/practice project, so authentication is intentionally simple — there's no session or JWT-based token handling yet. That would be a natural next step.

