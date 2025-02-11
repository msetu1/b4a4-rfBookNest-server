# Hello !!

## This is setu Akther

Please take a look at my README file, and if there are any mistakes or shortcomings, kindly point them out with forgiveness and understanding.

# Blog Project

## Overview

The goal of this assignment is to develop a backend for a blogging platform where users can write, update, and delete their blogs. The system will have two roles: Admin and User. The Admin has special permissions to manage users and their blogs, while users can perform CRUD operations on their own blogs. The backend will include secure authentication, role-based access control, and a public API for viewing blogs with search, sort, and filter functionalities.It is developed using **TypeScript**, **Node.js**, **Express.js**, and **MongoDB with Mongoose**.

---

## Features

1. **User Roles**:

i. **Admin**:

- Will be created manually in the database with predefined credentials.
- Can delete any blog.
- Can block any user by updating a property isBlocked.
- Cannot update any blog.

2. **User**:

- Can register and log in.
- Can create blogs (only when logged in).
- Can update and delete their own blogs.
- Cannot perform admin actions.

3. **Authentication & Authorization**:

- Authentication:
  Users must log in to perform write, update, and delete operations.

- Authorization:
  Admin and User roles must be differentiated and secured.

4. **Blog API**:

- Publicly accessible API for:
  - **Search**: Find blogs by keywords in the title or content.
  - **Sort**: Sort blogs by fields like `createdAt` or `title`.
  - **Filter**: Filter blogs based on author IDs or other criteria.

---

# Authentication

---

### Register User

---

Endpoint : POST **/api/auth/register**

Description: Registers a new user with the platform. It validates user data and saves it to the database.

example

```
{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "securepassword"
}
```

### Login User

---

Endpoint : POST **/api/auth/login**

Description: Authenticates a user with their email and password and generates a JWT token.

example

```
{
  "email": "john@example.com",
  "password": "securepassword"
}
```

# Authentication

---

### Create Blog

---

Endpoint : POST **/api/blogs**

Description: Allows a logged-in user to create a blog by providing a title and content.

example

```
{
  "title": "My First Blog",
  "content": "This is the content of my blog."
}
```

### Update Blog

---

Endpoint : PATCH **/api/blogs/:id**

Description: Allows a logged-in user to update their own blog by its ID.

example

```
{
  "title": "Updated Blog Title",
  "content": "Updated content."
}
```

### Delete Blog

---

Endpoint : DELETE **/api/blogs/:id**

Description: Allows a logged-in user to delete their own blog by its ID.

### Get All Blogs (Public)

---

Endpoint : PATCH **/api/blogs**

Description: Provides a public API to fetch all blogs with options for searching, sorting, and filtering.

**Query Parameters:**

- search: Search blogs by title or content (e.g., search=blogtitle).
- sortBy: Sort blogs by specific fields such as createdAt or - title (e.g., sortBy=title).
- sortOrder: Defines the sorting order. Accepts values asc (ascending) or desc (descending). (e.g., sortOrder=desc).
- filter: Filter blogs by author ID (e.g., author=authorId).

**Example Request URL:**

```
/api/blogs?search=technology&sortBy=createdAt&sortOrder=desc&filter=60b8f42f9c2a3c9b7cbd4f18
```

# Admin Actions

---

### Block User

---

Endpoint : PATCH **/api/admin/users/:userId/block**

Description: Allows an admin to block a user by updating the isBlocked property to true .

### Delete Blog

---

Endpoint : DELETE **/api/admin/blogs/:id**

Description: Allows an admin to delete any blog by its ID.

### Types of Errors Handled

- Zod Validation Error (ZOD_ERROR): Errors arising from invalid data inputs based on Zod schema validation.
- Not Found Error (NOT_FOUND_ERROR): When requested resources (e.g., a user, item, or page) are not found.
- Validation Error (VALIDATION_ERROR): General validation errors (e.g., incorrect data format, missing required fields).
- Authentication Error (AUTH_ERROR): Issues related to failed authentication (e.g., invalid token or expired session).
- Authorization Error (AUTHORIZATION_ERROR): When the user lacks the necessary permissions to access a resource.
- Internal Server Error (INTERNAL_SERVER_ERROR): Unhandled errors or unexpected server issues.

---

## Technologies

- TypeScript
- Node.js
- Express.js
- MongoDB with Mongoose

## Project Setup

1. Setup

   ```
   npm init -y
   ```

   ```
   npm i express cors dotenv
   ```

   ```
   npm install typescript --save-dev
   ```

   ```
   npm install mongoose --save
   ```

   ```
   npm i ts-node-dev --save-dev
   ```

   ```
   tsc -init
   ```

2. Typescript related setup----

   ```
   npm i --save-dev @types/node
   ```

   ```
   npm i --save-dev @types/express
   ```

   ```
   npm i --save-dev @types/cors
   ```

3. eslint and prettier setup----

   ```
   npm i -D eslint@9.14.0 @eslint/js @types/eslint__js typescript typescript-eslint
   ```

   ```
   npm i -D eslint@9.14.0
   ```

   ```
   npm i -D --exact prettier
   ```

4. Validation ---

   ```
   npm i zod
   ```

5. bcrypt install:

   ```
   npm i bcrypt
   ```

   ```
   npm i --save-dev @types/bcrypt
   ```

6. jwt install:

   ```
   npm i jsonwebtoken
   ```

   ```
   npm i --save-dev @types/jsonwebtoken
   ```

## Blog Management

### 1. Create a Blog

- POST /api/blogs<br>
- Description: Allows a logged-in user to create a blog by providing a title and content.<br>
- Request Header:Authorization: Bearer <token> <br>
  Request Body: <br> <br>

Examples:
{
"title": "My First Blog",
"content": "This is the content of my blog."
}

### 2. All Blogs

- GET /api/blogs <br>
- Description: Provides a public API to fetch all blogs with options for searching, sorting, and filtering.

### 3. Specific Blog

- GET /api/blogs/:id<br>
- Description: Allows a logged-in user to Single their own blog by its ID.<br>
- Request Header:Authorization: Bearer <token> <br>

### 4. Update a Blog

- PATCH /api/blogs/:id<br>
- Description: Description: Allows a logged-in user to update their own blog by its ID.<br>
- Request Header:Authorization: Bearer <token> <br>
  Request Body: <br> <br>

Examples:
{
"title": "Updated Blog Title",
"content": "Updated content."
}

### 5. Delete a Blog

- DELETE /api/blogs/:id<br>
- Description: Allows a logged-in user to delete their own blog by its ID.<br>
- Request Header:Authorization: Bearer <token> <br>
