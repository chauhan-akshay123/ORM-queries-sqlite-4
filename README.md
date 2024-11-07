# Company Management API

This API is designed to manage and query a list of companies with features like database seeding, fetching company details, filtering by industry, and sorting by revenue. It uses Node.js, Express, Sequelize, and SQLite.

## Getting Started

### Prerequisites

- **Node.js** and **npm** installed.
- **SQLite** installed (or ensure the `sqlite3` npm package is used if SQLite is not separately installed).

### Installation

1. Clone this repository.
2. Install the dependencies by running:

   ```bash
   npm install
   ```

3. Ensure `SQLite` database file (`database.sqlite`) is set up in the root folder, or update the configuration as needed in `lib/index.js`.

### Configuration

- The database is configured to use SQLite in `lib/index.js` with Sequelize.

### Starting the Server

Run the following command to start the server:

```bash
node app.js
```

The server will start on `http://localhost:3000`.

---

## Endpoints

### 1. Seed Database

**Endpoint**: `GET /seed_db`

Seeds the database with initial company data.

**Response**:
- **200 OK**: `{"message": "Database seeding successful."}`
- **500 Error**: `{"message": "Error seeding the database", "error": "<error_message>"}`

---

### 2. Fetch All Companies

**Endpoint**: `GET /companies`

Fetches all companies from the database.

**Response**:
- **200 OK**: Returns all companies.
- **404 Not Found**: `{"message": "No company found."}`
- **500 Error**: `{"message": "Error fetching companies", "error": "<error_message>"}`

---

### 3. Fetch Company Details by ID

**Endpoint**: `GET /companies/details/:id`

Fetches a company’s details by its ID.

**Parameters**:
- `id`: The company ID.

**Response**:
- **200 OK**: Returns the company details.
- **404 Not Found**: `{"message": "No company found."}`
- **500 Error**: `{"message": "Error fetching company details by Id.", "error": "<error_message>"}`

---

### 4. Fetch Companies by Industry

**Endpoint**: `GET /companies/industry/:industry`

Fetches all companies in a specified industry.

**Parameters**:
- `industry`: The industry name (e.g., `Technology`, `Healthcare`).

**Response**:
- **200 OK**: Returns companies in the specified industry.
- **404 Not Found**: `{"message": "No companies found."}`
- **500 Error**: `{"message": "Error fetching companies by industry", "error": "<error_message>"}`

---

### 5. Sort Companies by Revenue

**Endpoint**: `GET /companies/revenue?order=asc|desc`

Sorts companies by their revenue in ascending or descending order.

**Query Parameter**:
- `order`: Set to `asc` or `desc` to sort in ascending or descending order.

**Response**:
- **200 OK**: Returns companies sorted by revenue.
- **404 Not Found**: `{"message": "No companies found."}`
- **500 Error**: `{"message": "Error fetching sorted companies", "error": "<error_message>"}`

---

## Sample Data

The API seeds the following sample data on `/seed_db`:

```json
[
  {"id": 1, "name": "Tech Innovators", "industry": "Technology", "foundedYear": 2010, "headquarters": "San Francisco", "revenue": 75000000},
  {"id": 2, "name": "Green Earth", "industry": "Renewable Energy", "foundedYear": 2015, "headquarters": "Portland", "revenue": 50000000},
  {"id": 3, "name": "Innovatech", "industry": "Technology", "foundedYear": 2012, "headquarters": "Los Angeles", "revenue": 65000000},
  ...
]
```

## Technologies Used

- **Express**: For server handling.
- **Sequelize**: As the ORM for database handling.
- **SQLite**: As the database for local storage.
