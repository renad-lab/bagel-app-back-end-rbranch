# Bagel App Back-End

This repository contains the back-end code for the Bagel App. It provides a RESTful API for managing bagels, handling database operations, and supporting the front-end application.

## Installation

To get started, clone the repository and install the dependencies:

```bash
git clone https://github.com/renad-lab/bagel-app-back-end-rbranch.git
cd bagel-app-back-end-rbranch
npm install
```

## Usage

To run the application locally, you can use the following command:

```bash
npm start
```

This will start the server using `nodemon` and listen for requests on the specified port.

## Scripts

- **`npm start`**: Starts the server with `nodemon`.
- **`npm run db:init`**: Initializes the database schema using `db/schema.sql`.
- **`npm run db:seed`**: Seeds the database with initial data using `db/seed.sql`.

## API Endpoints

Here are some of the key API endpoints available in the application:

- **GET /bagels**: Retrieve a list of all bagels.
- **GET /bagels/:id**: Retrieve details of a specific bagel by ID.
- **POST /bagels**: Add a new bagel to the database.
- **PUT /bagels/:id**: Update an existing bagel by ID.
- **DELETE /bagels/:id**: Remove a bagel from the database by ID.

## Deployment

The back-end is deployed on Render and can be accessed via the following URL:

- Render: [https://bagel-app-back-end-rbranch.onrender.com](https://bagel-app-back-end-rbranch.onrender.com)

The front-end application is deployed on Netlify and can be accessed here:

- Netlify: [https://moonlit-medovik-f21f99.netlify.app](https://moonlit-medovik-f21f99.netlify.app)
