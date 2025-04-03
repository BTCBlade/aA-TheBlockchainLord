# Backend Setup

## Starting the Server

1. Ensure you have all dependencies installed (use `--legacy-peer-deps` if there are version issues):

   ```bash
   npm install --legacy-peer-deps
   ```

2. Start the server in development mode:

   ```bash
   npm run start:development
   ```

3. Start the server in production mode:

   ```bash
   npm run start:production
   ```

## Running Migrations

1. Run the database migrations:

   ```bash
   npm run migrate
   ```

## Inserting Seed Data

1. Insert seed data into the database:

   ```bash
   npm run seed
   ```
