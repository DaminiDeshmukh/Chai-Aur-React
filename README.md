# Chai-Aur-React
react was developed by fb

#node package maanger-npm comes with node js
npx- jb install nhi krna h kewal execute krna h
npx-create-app react_basic_app01

package.json - main entry point

cd react_basic_app01
ls
npm run start / npm start
npm run build //extra - yahi serve hoga users ko
### `from src delete --[delete](react_basic_app01/src/setupTests.js)`
### `reportWebVitals.js`
### `logo.svg`
### `app.css`
### `apptest.js`

using vite - npx create-react-app appname 
takes a lot of time so we can use bundler like vite which helps in  offering a faster, more modern, and lightweight alternative to create-react-app(CRA)
 VITE IS A BUILD TOOL AND DEVELOPEMENT SERVER


 ### `npm create vite@latest`
 ### `cd foldername`
 ### `npm install`
 ### `npm run dev`
 ### `delete-assets,app.css,index.css,  from src`
 iske baad import lines dekhna properly


 # react-structure
 A typical React project structure contains several key folders that help organize the codebase for maintainability and scalability. Here's a brief overview of the common folders in a React project:

1. public/
-Contains static files that are served directly to the browser.
-Key file: index.html, which is the single HTML file where your React app is rendered.
-Any static assets like images, favicon, and manifest files are also placed here.
2. src/
-This is the main folder for all your React app’s source code.
--Key subfolders and files within src/:

---index.js / index.tsx
The entry point of the React application.
Renders the root component (App) into the DOM.
Often includes ReactDOM rendering logic like:
//js
//ReactDOM.render(<App />, document.getElementById('root'));

-App.js / App.tsx

The main component that serves as the root of your component tree.
Other components are typically nested inside this.

-components/
Contains reusable React components.
Each component can be organized in its own folder, which may contain the component logic (.js or .jsx/.ts or .tsx), its styles (.css/.scss), and tests.

-assets/

Stores images, fonts, and other static files like logos or icons used throughout the application.

-styles/

Contains global stylesheets, shared CSS, or SCSS files used in multiple parts of the app.

-pages/

Holds React components representing full pages in your app (e.g., Home, About, Contact). Useful for routing when using react-router-dom.

-hooks/

Contains custom React hooks, if you're creating reusable logic that encapsulates stateful behavior across components.

-contexts/

Used to store React Contexts for managing global state and providing data across the app without props drilling.

-services/

This folder often contains API services or external functions like HTTP requests (using fetch or axios) that interact with your back-end.

-store/

If you’re using a state management library like Redux, this folder can hold store configuration, actions, reducers, and types for handling global state.

-utils/

Stores utility functions and helper files that can be shared across different components.

-**test/ or __tests__/

Contains unit or integration tests for your React components, using testing libraries like Jest or React Testing Library.
3. node_modules/
Automatically generated by npm or yarn.
Contains all the external libraries and dependencies for your project.
4. package.json
Lists your project dependencies, scripts, and metadata.
Important for managing the React project’s environment, dependencies, and build scripts.
5. package-lock.json / yarn.lock
Ensures consistent dependency versions across different environments and machines.
6. .gitignore
Specifies which files and folders Git should ignore when committing code to a repository (e.g., node_modules/, .env).


### video 3
CRA---
react power deta h ki js html element ko render kre
js k entry point src k index.js

react-scripts-loads the index.js into index.html




VITE---
function k first letter capital hona chaiye
js should be enclosed within one opening or closing tag  <> content </> --this is fragment