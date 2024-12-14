
User and Analytics Dashboard

Project Description

The User and Analytics Dashboard is a dynamic and responsive web application built using React with state management through Redux. It features various functionalities such as data visualization using Charts.js, dynamic user interaction like search, view details, and delete actions, and displays key metrics on cards.





Tech Stack

Frontend: React, Ant Design (UI components)

State Management: Redux Toolkit

Data Visualization: Charts.js

Routing: React Router DOM 

CSS Framework: Ant Design + Custom CSS



---

Features

1. Dynamic Metrics Display:

Total Users

Active Users

Inactive Users

Deleted Users



2. Interactive Dashboard Functionalities:

Search users dynamically using Redux state.

View detailed user information on a dedicated page.

Delete users and update metrics in real-time.



3. Data Visualization:

Charts.js used to display:

User registration trends over the last 6 months (Line Chart).

Role-wise distribution of users (Bar Chart).




4. Responsive Design:

Fully responsive layout with a Hamburger Menu for smaller screens.



5. Dynamic Data:

Uses mock data for users with realistic properties (name, email, role, etc.).





---



Folder Structure

/src  
  ├── components  
  │   ├── AppHeader  
  │   │   └── Navbar.js  
  │   ├── Dashboard  
  │   │   ├── Cards.js  
  │   │   ├── Dashboard.js  
  │   │   └── Table.js  
  │   ├── SideMenu  
  │       └── SideMenu.js  
  ├── redux  
  │   ├── store.js  
  │   └── slices  
  │       └── searchSlice.js  
  ├── App.js  
  ├── index.js  
  └── styles.css


---

Installation and Setup

1. Clone the repository:

git clone https://github.com/your-username/analytics-dashboard.git
cd redux


2. Install dependencies:

npm install


3. Start the development server:

npm start


4. Open the app in your browser at http://localhost:3000.




---

Usage

1. Search: Use the search bar at the top to filter users dynamically.


2. View User Details: Click on the View button in the table to see a user's full details.


3. Delete User: Click the Delete button to remove a user and update the dashboard metrics.


4. Charts: View user registration trends and role distributions.


