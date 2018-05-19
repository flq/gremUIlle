# gremUIlle

A server to let you access some DB via the gremlin graph query language.

Imagine my despair when I found out that there is pretty much nothing to visually access  a DB that supports
Gremlin as a query language. Sure, there is some pointers here & there, but nothing that would help me get to grips
with e.g. a Cosmos DB running a Graph-API.

## Setup

The project is rooted in the [Express-Babel boilerplate](https://github.com/vmasto/express-babel), as well as [create-react-app]().

## Getting started

```sh
# Install dependencies
npm install #or
yarn

yarn run dev

```
This will launch a [nodemon](https://nodemon.io/) process for automatic server restarts when your code changes.

### Testing

Testing is powered by [Jest](https://facebook.github.io/jest/). This project also uses [supertest](https://github.com/visionmedia/supertest) for demonstrating a simple routing smoke test suite. Feel free to remove supertest entirely if you don't wish to use it.

Start the test runner in watch mode with:

```sh
# yarn
yarn test
```

### Linting

Linting is set up using [ESLint](http://eslint.org/). It uses ESLint's default [eslint:recommended](https://github.com/eslint/eslint/blob/master/conf/eslint.json) rules. Feel free to use your own rules and/or extend another popular linting config (e.g. [airbnb's](https://www.npmjs.com/package/eslint-config-airbnb) or [standard](https://github.com/feross/eslint-config-standard)).

Begin linting in watch mode with:

```sh
# yarn
yarn run lint
```

### Environmental variables in development

The project uses [dotenv](https://www.npmjs.com/package/dotenv) for setting environmental variables during development. Simply copy `.env.example`, rename it to `.env` and add your env vars as you see fit. 

It is **strongly** recommended **never** to check in your .env file to version control. It should only include environment-specific values such as database passwords or API keys used in development. Your production env variables should be different and be set differently depending on your hosting solution. `dotenv` is only for development.

### Deployment
Deployment is specific to hosting platform/provider but generally:

```sh
# yarn
yarn run build
yarn run start
```

will run `build` (via the `prestart` hook) and start the compiled application from the `/dist` folder.

You can find small guides for Heroku, App Engine and AWS in [the deployment](DEPLOYMENT.md) document.

## FAQ

**Where is all the configuration for ESLint, Jest and Babel?**

In `package.json`. Feel free to extract them in separate respective config files if you like.

**Why are you using `babel-register` instead of `babel-node`?**

`babel-node` contains a small "trap", it loads Babel's [polyfill](https://babeljs.io/docs/usage/polyfill/) by default. This means that if you use something that needs to be polyfilled, it'll work just fine in development (because `babel-node` polyfills it automatically) but it'll break in production because it needs to be explicitely included in Babel's CLI which handles the final build.

In order to avoid such confusions, `babel-register` is a more sensible approach in keeping the development and production runtimes equal. By using [babel-preset-env](https://github.com/babel/babel-preset-env) only code that's not supported by the running environment is transpiled and any polyfills required are automatically inserted.

## License
Apache 2.0. See the [LICENSE](LICENSE) file.
