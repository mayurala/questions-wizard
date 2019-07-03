## Folder Structure

After creation, your project should look like this:

```
my-app/
  README.md
  node_modules/
  package.json
  webpack.config.babel.js
  .gitignore
  .babelrc
  public/
    index.template.html
  src/
    api/
        data.js
    component/
        answer-type.js
        bottom-button.js
        button.js
        questions.js
        status-bar.js
    main.js
    style.css
```

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:8081](http://localhost:8081) to view it in the browser.


### `npm run build:dev`

Builds the app for developement to the `build` folder.<br>
It correctly bundles in development mode and optimizes the build for the best performance.


### `npm run build:prod`

Builds the app for production to the `build` folder.<br>
It correctly bundles in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

