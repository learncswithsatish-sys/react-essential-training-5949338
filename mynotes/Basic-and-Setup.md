# What is React?

- React is a JavaScript library for building user interfaces. It allows you to create reusable UI components and manage the state of your application efficiently.
- React uses a declarative approach, meaning you describe what the UI should look like based on the current state, and React takes care of updating the DOM when the state changes.

- React was developed by Facebook and is widely used in web development for building complex and interactive user interfaces. It has a large ecosystem of tools and libraries that make it easier to build and maintain applications.

- Native React is a framework for building mobile apps using React. It allows you to write code in JavaScript and render it as native components on iOS and Android.

# Setting up a React project

## NPM Installation

- To set up a React project, you can use the Node Package Manager (NPM) to create a new React application. This is a common way to get started with React development.
- You can use the `create-react-app` command to quickly scaffold a new React project with a standard structure and configuration.

```bash
npx create-react-app myReactJS
```

- This command will create a new directory called `myReactJS` with all the necessary files and dependencies to start building a React application.

- Run react app:

```bash
cd myReactJS
npm start
```

## React Native Setup

- If you want to build a mobile app using React Native, you can use the React Native CLI or Expo CLI to set up your project.
- The React Native CLI allows you to create a new React Native project and provides more control over the configuration, while Expo CLI is a tool that simplifies the development process by providing a set of pre-configured tools and services.
- To create a new React Native project using the React Native CLI, you can run the following command:

```bash
npx react-native init MyReactNativeApp
```

- Run React Native app:

```bash
cd MyReactNativeApp
npx react-native run-android # for Android
npx react-native run-ios # for iOS
```

## React JS Setup with Vite

To set up a React project, you can use Vite, which is a fast build tool that provides a great development experience.

1. First, make sure you have Node.js installed on your machine.
2. Open your terminal and run the following command to create a new React project using Vite:

```bash
npm create vite@latest myReactJS -- --template react

```

3. Change into the project directory:

```bash
cd myReactJS
```

4. Install the dependencies:

```bash
npm install
```

5. Start the development server:

```bash
npm run dev
```

6. Open your browser and navigate to the URL provided by Vite (usually `http://localhost:5173`) to see your React app running.
