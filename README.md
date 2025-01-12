# Task Approval System

This is a Task Approval System built using **React** for the frontend and **Node.js/Express** for the backend. The application allows users to create tasks, approve them, and track approval logs.

## Features
- **Task Creation**: Users can create tasks with a title, description, and deadline.
- **Task Listing**: Displays all tasks with their status (Pending/Approved).
- **Approval Mechanism**: Admin users can approve tasks, which logs the approval time and the user's name who approved the task.
- **Authentication**: Basic login system for two types of users:
  - **Admin**: Can create tasks and approve them.
  - **User**: Can only view tasks.

## Technologies Used
- Frontend: React.js
- Backend: Node.js with Express
- Authentication: In-memory storage (no database required)

## Setup Instructions

### Prerequisites
Ensure you have **Node.js** and **npm** installed on your machine. You can check this by running the following commands:
node -v npm -v

If you don't have Node.js and npm installed, download and install it from [here](https://nodejs.org/).

### Clone the repository
First, clone the repository to your local machine:
git clone https://github.com/sweta07as/task-approval-system.git cd task-approval-system

### Install dependencies
Navigate to both the frontend and backend directories and install the required dependencies.

#### Frontend (React)
1. Go to the frontend directory:
cd frontend

2. Install the dependencies:
npm install

#### Backend (Node.js/Express)
1. Go to the backend directory:
cd backend

2. Install the dependencies:
npm install

### Running the application
1. Start the backend server:
cd backend npm start

This will start the backend server on `http://localhost:5000`.

2. Start the frontend server:
cd frontend npm start

This will start the frontend React app on `http://localhost:3000`.

### Logging In
- **Admin Login**: Username: `admin`, Password: `admin123`
- **User Login**: Username: `user`, Password: `user123`

### Task Approval Workflow
- **Admin** users can:
- Create tasks by providing a title, description, and deadline.
- Approve tasks, which logs the approval time and username in the audit log.
- **User** users can only view the tasks but cannot approve them.

## Functionality Implemented
1. **Login System**:
- Basic login system with two user roles: `admin` and `user`.
- Admin users have additional privileges such as creating and approving tasks.

2. **Task Management**:
- Admin can create tasks with title, description, and deadline.
- Tasks are listed with their current status: Pending or Approved.

3. **Approval Mechanism**:
- Admin can approve tasks.
- Task approval is logged with the name of the approving user and the timestamp.

4. **Audit Log**:
- Every task that is approved contains an approval log with the approving user and the time of approval.

5. **User Interface**:
- Clean and intuitive UI to manage tasks, with a simple login interface.
