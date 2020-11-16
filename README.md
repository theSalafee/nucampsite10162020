# Mug-Life Coffee

A project to demonstrate skills in React development, UI/UX and Responsive mobile design. Mug-Life uses several modern User Interface libraries, like React.js, React Bootstrap, Redux and more. For a complete list see the dependancies in the package.json. To mimic as closely as possible a real development environment a mock backend server was set up using JSON-server. Instructions for installing and running the server are below. Using json-server developers can use tools like Postman or Talend to test their API's.

# json-server 

json-server is an easy fast tool for front-end developers who need a quick back-end for prototyping and mocking.

## Installation

Install JSON Server

```bash
npm install -g json-server
```

1. Remove the json-server folder from the nucamp project placing it above the nucampsite in the directory.

2. Move to the json-server folder in your bash terminal and type the following at the command prompt to start the server:

```bash
json-server -H 0.0.0.0 --watch db.json -p 3001 -d 2000
 ```

This should start up a server at port number 3001 on your machine, and it will respond to server requests with a simulated delay of 2000 milliseconds. The data from this server can be accessed by typing the following addresses into your browser address bar

```bash
http://localhost:3001/campsites
http://localhost:3001/partners
http://localhost:3001/promotions
http://localhost:3001/comments
http://localhost:3001/feedback 
```

## Resources
[Typicode](https://github.com/typicode/json-server)

[Pexels](https://www.pexels.com/)

[Material.io](https://material.io/resources/color/#!/?view.left=0&view.right=0)

[SVG Repo](https://www.svgrepo.com/svg/16383/coffee-cup)


This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `yarn build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
