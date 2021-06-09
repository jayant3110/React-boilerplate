# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.


## Project structure
```
  .
  ├── ...
  ├── src               # Source code for the react app
  │ ├── api             # This directory contains files that have the code for interacting with the backend api. 
  │ ├── assests         # This directory contains all the assets be it icons, audio, video files.
  │ │ └── icons         # This contains all the icons/
  │ ├── Components      # App components.
  │ │ └── common        # This contains component that are shared bw various components, eg ProgressBar
  │ │ └── Signup        # Contains the code for the the signup page. 
  │ │ └── Modals        # Any shared modals should be placed here.
  │ ├── constants       # Any shared modals should be placed here.
  │ │ └── APIConstants    
  │ │ └── APIRoutes       
  │ ├── Hooks           # Custom hooks
  │ └── Util            # Other, helpful code
  └── ...
```