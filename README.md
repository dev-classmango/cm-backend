# cm-backend

## Design decisions

- **Framework**: Using NestJS for building a highly testable and maintainable backend application.

- **Module Structure**: All modules are organized under the `src` directory.

- **Data Validation**: The `class-validator` package is used for data sanitization, and `ValidationPipe` is employed to whitelist incoming client data.

- **Code Organization**: Barrel exports are utilized to consolidate exports from multiple files or modules into a single module, reducing codebase clutter.

- **App secrets**: All application secrets are stored in `AWS SSM` and will be injected into `environment` at runtime.

- **API Documentation**: Swagger is used for building, documenting, testing, and consuming REST APIs.

## Prerequisites

Before getting started, ensure you have the following:

- **[Node.js](https://nodejs.org/en)**: LTS version installed.

- **[PostgreSQL](https://www.postgresql.org/)**: Installed with the **DATABASE** and **USER** created.

- **[MongoDB](https://www.mongodb.com/docs/manual/tutorial/install-mongodb-on-os-x/)**: Installed.

- **Repository**: Clone the repository from [GitHub](https://github.com/dev-classmango/cm-backend).

- `aws-cli` installed and configured correctly

## Installation

### Install Node.js dependencies

$ npm install

### Create a `.env` file at the project’s root and add all required keys.

- Refer to the [env.example](https://github.com/dev-classmango/cm-backend/blob/main/.env.example) file for details on required keys.
- All keys will remain same for both `local` and `production` environment except for `DATABASE_URL`
  - `DATABASE_URL` for `local` will be your local postgres DB address running in your machine
  - `DATABASE_URL` for `production` will be endpoint link of Postgres running in `AWS` `RDS`
  - Refer `.env.example` for `DATABASE_URL` value syntax

## Running the Application

### Setting up local machine for the first time

$ `npm run local:setup`

### Development mode

$ `npm run start:dev`

### Debug mode

$ `npm run start:debug`

### Production mode

$ `npm run start:prod`
