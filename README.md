# Company Management API

This is a RESTful API that allows you to manage company data in a database. The API is built with Node.js, Express, and Sequelize ORM, and it provides endpoints for seeding, fetching, adding, updating, and deleting company information.

## Prerequisites

Before running the application, ensure you have the following installed:

- **Node.js** (version 14 or higher)
- **Sequelize** (for ORM)
- **PostgreSQL** (or any other supported database)

## Installation

1. **Clone the repository**:

   ```bash
   git clone <repository-url>
   cd <project-directory>
   ```

2. **Install dependencies**:

   ```bash
   npm install
   ```

3. **Set up your database**:

   Make sure you have your database configured and a `.env` file in the root of your project with the necessary database configuration:

   ```plaintext
   DB_HOST=your-db-host
   DB_USER=your-db-user
   DB_PASS=your-db-password
   DB_NAME=your-db-name
   ```

4. **Start the application**:

   Run the server with:

   ```bash
   npm start
   ```

   The server will start on port `3000`.

## API Endpoints

### 1. Seed the database with company data

**GET** `/seed_db`

Seeds the database with a predefined set of company data.

**Response**:  
```json
{
  "message": "Database seeding successful."
}
```

### 2. Fetch all companies

**GET** `/companies`

Fetches a list of all companies in the database.

**Response**:  
```json
{
  "companies": [ ... ]
}
```

### 3. Fetch company details by ID

**GET** `/companies/details/:id`

Fetches details of a company based on the provided `id`.

**Response**:  
```json
{
  "company": { ... }
}
```

### 4. Fetch companies by industry

**GET** `/companies/industry/:industry`

Fetches a list of companies that belong to the specified `industry`.

**Response**:  
```json
{
  "companies": [ ... ]
}
```

### 5. Sort companies by revenue

**GET** `/companies/revenue`

Sorts companies by their `revenue`. Use the query parameter `order` to specify the order:

- `asc` for ascending
- `desc` for descending

**Example**: `/companies/revenue?order=desc`

**Response**:  
```json
{
  "companies": [ ... ]
}
```

### 6. Add a new company

**POST** `/companies/new`

Adds a new company to the database. You need to send a request body with the following data:

**Request Body**:  
```json
{
  "newCompany": {
    "name": "Company Name",
    "industry": "Industry Type",
    "foundedYear": 2020,
    "headquarters": "City",
    "revenue": 1000000
  }
}
```

**Response**:  
```json
{
  "newCompany": { ... }
}
```

### 7. Update company information

**POST** `/companies/update/:id`

Updates the company information with the provided `id`.

**Request Body**:  
```json
{
  "name": "Updated Company Name",
  "industry": "Updated Industry",
  "foundedYear": 2021,
  "headquarters": "Updated City",
  "revenue": 2000000
}
```

**Response**:  
```json
{
  "message": "Company information updated successfully."
}
```

### 8. Delete a company

**POST** `/companies/delete`

Deletes a company based on the provided `id`.

**Request Body**:  
```json
{
  "id": 1
}
```

**Response**:  
```json
{
  "message": "Company record has been deleted successfully."
}
```
