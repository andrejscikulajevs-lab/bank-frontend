# Mini Bank Frontend

Simple banking frontend application built with Angular.  
The application provides a user interface for interacting with the Mini Bank API.

The system allows:
- Viewing users
- Viewing accounts for a selected user
- Viewing account details and transactions
- Loading transactions dynamically (pagination)
- Visualizing account balance over time
- Viewing transaction details
- Exporting transaction summary as PDF (print)

## Tech Stack

Angular (standalone components)  
TypeScript  
Chart.js  
HTML / CSS  

## How to Run

Install dependencies and start the development server:

npm install  
npm run dev  

Application starts on:  
http://localhost:4200

Backend API should be running on:  
http://localhost:8080

## Pages Overview

### Users Page

Displays list of users.
Navigation to user accounts.

Route:
/users

### Accounts Page

Displays all accounts for selected user.

Shows:
- Account ID
- Balance
- Currency

Navigation to account details.

Route:  
/user/{id}/accounts

### Account Overview Page

Displays details of a selected account.

Shows:
- Account balance
- Currency
- Transaction history

Features:
- Pagination (Load more transactions)
- Dynamic loading without page reload
- Line chart showing balance over time

Route:  
/account/{id}

### Transaction Page

Displays details of a single transaction.

Shows:
- Transaction date and time
- Transaction type (DEPOSIT / DEBIT)
- Transaction amount

Includes:
- Export to PDF functionality (via print)

Route:
/transaction/{id}

## Features

- Single Page Application (SPA)
- Angular Router navigation
- REST API integration
- Pagination using "Load more"
- Chart visualization (balance over time)
- Transaction detail view
- Print-friendly export

## API Integration

Frontend communicates with backend endpoints:

GET /users
GET /users/{id}/accounts
GET /accounts/{id}
GET /accounts/{id}/transactions
GET /accounts/transactions/{id}

## Chart

The application includes a line chart for balance visualization:

- X-axis: transaction time
- Y-axis: calculated account balance
- Color-coded segments:
  - Green: increase
  - Red: decrease

## Architecture

Component-based Angular structure.

Main parts:
- Pages for each route
- API service for backend communication
- Chart integration using Chart.js

## Notes

- Application assumes backend runs locally
- No authentication (demo purpose)
- Data is loaded dynamically
- PDF export is implemented using browser print functionality

## Future Improvements

- State management (NgRx)
- Improved UI styling
- Error handling for API calls
- Authentication and authorization
- Proper PDF generation instead of print

## Purpose

Demonstrates:
- Angular SPA development
- REST API usage
- Handling asynchronous data
- Pagination
- Data visualization with Chart.js