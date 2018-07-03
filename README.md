### README

# Quantified Self - Rails

### Table Of Contents
- [Versions/Prerequisites](#versions-prerequisites)
- [Setup](#setup)
- [The Test Suite](#the-test-suite)
- [Endpoints](#endpoints)
- [Authors](#authors)

### Versions/Prerequisites

The prerequisites for this application are:
- Postgresql 10+
- Node 8.11+
- Express 4.16+
- Knex 0.14+
- JS 5.6+

### Setup
- Clone the repository and change directory into the project directory:
```
git clone https://github.com/anon0mys/quantified_self.git
cd quantified_self
```
- Run npm to install the gem dependencies:
```
npm install
```
- Install Knex, setup the database, and run migrations and seeds:
```
npm install -g knex
npm install knex
psql -c 'create database qs_node' -U postgres
psql -c 'create database qs_node_test' -U postgres
knex migrate:latest
knex seed:run
NODE_ENV=test knex migrate:latest
NODE_ENV=test knex seed:run
```

### The Test Suite
- The test suite is written in RSpec. To run the test suite, from the root project folder run:
```
npm test
```

### Endpoints
- Documentation for all endpoints is here:
[Endpoint Explanation](https://github.com/anon0mys/quantified_self/blob/read-me/endpoint.md)

### Contributions
Quantified self is open source and welcomes contributions. If you would like to contribute please follow this workflow:
- Ensure you have a working Ruby environment with the appropriate [Versions/Prerequisites](#versions-prerequisites)
- Fork, then clone the repository
- Follow the [Setup](#setup) instructions
- Make your desired changes and accompanying tests
- Open a PR to the anon0mys/quantified_self repository
- An app administrator will conduct code review and contact you once the fix is accepted or rejected

### Authors
- [Evan Wheeler](https://github.com/anon0mys)
