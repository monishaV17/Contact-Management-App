***Contact Management Application***

A multi-user contact management application built using React for the frontend and Flask for the backend. The application allows users to register, log in, and securely manage their own contact details. Each authenticated user can add, view, update, delete, and search contacts, and the backend uses JWT-based authentication to protect user-specific data stored in MySQL.

***Features***

* User registration and login
* JWT-based authentication
* Multi-user access with user-specific contact management
* Add new contacts
* View saved contacts
* Update contact details
* Delete contacts
* Search contacts
* Protected API access for authenticated users only

***Tech Stack***

* Frontend: React, JavaScript, CSS
* Backend: Flask, Python
* Database: MySQL
* Authentication: JWT
* Routing: React Router
* Testing Tool: Postman
* Version Control: Git and GitHub

***📁 Project Structure***

```
contact-management-app/
│
├── frontend/
│   ├── src/
│   │   ├── App.js
│   │   ├── Login.jsx
│   │   ├── SignUp.jsx
│   │   ├── Contacts.jsx
│   │   ├── ContactDetail.jsx
│   │   ├── UpdateContacts.jsx
│   │   └── styles/
│   ├── public/
│   └── package.json
│
├── backend/
│   ├── app.py
│   ├── requirements.txt
│   └── .env
│
└── README.md
```

***How It Works***

1. A new user registers an account in the application.
2. The user logs in using valid credentials.
3. After successful login, the Flask backend generates a JWT token.
4. The frontend sends the token in the Authorization header for protected API requests.
5. Each logged-in user can manage only their own contacts.
6. Contact data is stored in MySQL and linked to the authenticated user.

***API Endpoints***
```
POST   /signup
POST   /login
POST   /addContact
GET    /getContact
GET    /getContact/<id>
PUT    /updateContact/<id>
DELETE /deleteContact/<id>
POST   /logout
```

***Installation and Setup***

1. Clone the repository
```
git clone <your-repository-link>
cd contact-management-app
```
2. Setup the frontend
```
cd frontend
npm install
npm start
```
3. Setup the backend
```
cd backend
pip install -r requirements.txt
python app.py
```
4. Setup the database
   
* Create a MySQL database.
* Create the required tables for users and contacts.
* Configure database credentials in your Flask backend.
* Make sure the backend is connected to MySQL before running the project.

***Authentication Flow***

* JWT authentication is used to secure protected routes in the backend. After login, the generated token is sent from the frontend in the request headers to access contact-related APIs such as fetch, add, update, and delete operations.
* Because the application is multi-user, the backend ensures that each user accesses only their own contact records. This makes the project more practical and closer to a real-world application design.

***Future Improvements***

* Add profile management for users
* Add pagination for contact lists
* Improve UI styling and responsiveness
* Add advanced validation for forms
* Add duplicate email or phone handling per user

***Author***

Monisha V

