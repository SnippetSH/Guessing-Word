# Korean Word Guessing Program

This project is a Korean word guessing game, leveraging text embeddings and a word dataset. The frontend is built with Vite, React, and TypeScript, while the backend is powered by Python Flask.

text-embedding from: https://github.com/SnippetSH/Korean-Word-Embedding.git  
word-dataset from: https://www.data.go.kr/data/15122687/fileData.do

--- 
### Table of Contents
- [Korean Word Guessing Program](#korean-word-guessing-program)
    - [Table of Contents](#table-of-contents)
  - [Project Structure](#project-structure)
  - [Frontend Setup](#frontend-setup)
    - [Application Structure](#application-structure)
    - [Routing](#routing)
    - [State Management](#state-management)
    - [Pages and Components](#pages-and-components)
  - [Backend Setup](#backend-setup)
    - [Modules and Logic](#modules-and-logic)
    - [Development Data](#development-data)
  - [Running the Project](#running-the-project)
    - [1. Frontend:](#1-frontend)
    - [2. Backend:](#2-backend)
  - [API Key Configuration](#api-key-configuration)
  - [Modifying Today's Word](#modifying-todays-word)
  

## Project Structure
This project is divided into two main parts:

1. Frontend: Built with Vite, React, and TypeScript.
2. Backend: Built with Python Flask.  

## Frontend Setup
Folder name: client

### Application Structure
- App.tsx & Router.tsx: Main application file and routing configuration.
- Processes: Manages application state(store) using Zustand.
- Pages: Components that represent different pages of the app.
- Widgets: Reusable UI components like buttons, inputs, etc.
- Shared: Common assets like CSS, images, and types.

### Routing
The routing of the application is handled through Router.tsx, which directs users to the correct page based on the URL.

### State Management
State is managed using Zustand. Store types and initial states are defined in the "src/2_Processes" directory.

### Pages and Components
Guess-main: Displays the word guessing game.
Widgets: Contains UI components like buttons and input fields, which can be reused across the application.

## Backend Setup
### Modules and Logic
- Modules, path_add, reqOPENAI: Contains utility functions for implementing game logic.
- dev: Stores the current word (CW) and the current rank for CW.
- word-dataset: Holds the text-embedded vectors for the word dataset.

### Development Data
To change or update the development data, such as the current word, refer to the dev folder.

## Running the Project
### 1. Frontend:

- Install dependencies: npm install
- ( Start the development server: npm run dev )
- Build for production: npm run build

you can find module versions on "package.json"

### 2. Backend:

- Install dependencies: pip install -r requirements.txt
- Start the server: python server.py
  
If you start the server( python server.py ),  
the necessary environment variables will be added automatically.
``` python
#server.py
from path_add import path_add

path_add()
```

## API Key Configuration
To configure the API key:

1. Open reqOPENAI/get.py.
2. Replace the placeholder with your own API key.

## Modifying Today's Word
1. Start the server: python server.py
2. Make a request to the endpoint /dev-rd/{key} to modify today's word.
   - The key can be found in server/dev/keys.json.
   - And you can find new word on server/dev/word.json