# AI API

Example of an AI API using [Ollama](https://ollama.com/).

Example request:
```bash
curl --location 'http://localhost:3000/chat' \
--header 'Content-Type: application/json' \
--data '{ "input": "Hello" }'
```

## Scripts

```bash
# Install dependencies
$ npm install

# Start application
$ npm start
$ npm run start:debug
$ npm run start:prod

# Build
$ npm run build

# Lint
$ npm run lint
$ npm run lint:fix

# Test
$ npm run test
$ npm run test:watch
$ npm run test:cov
$ npm run test:debug
$ npm run test:e2e

# Clean
$ npm run clean                     # Removes dist folder
$ npm run clean:packages            # Removes node_modules folder
$ npm run clean:all                 # Runs all of the above
```
