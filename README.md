# Chat UI Assignment

This project is a frontend application designed to mimic the user interface of ChatGPT, built using **Vite**, **React**, and **Firebase Authentication**. It features a responsive login/signup page with Firebase email/password authentication and a chat interface with a mock conversational model that provides keyword-based responses. The chat history persists across sessions using `localStorage`, and the design includes smooth animations and full responsiveness across devices. This project was developed as part of a frontend developer assignment to showcase skills in HTML, CSS, JavaScript, React, and Firebase integration.

## Project Setup

Follow these steps to set up and run the project on your local machine:

1. **Clone the Repository**  
   Clone the project repository to your local environment:
   ```bash
   git clone <repository-url>
   cd chat-ui
## 2.Install Dependencies
Install the required Node.js packages:
npm install
This will install Vite, React, Firebase, and other dependencies listed in package.json.
## 3.Configure Firebase
Create a new project in the Firebase Console.
Enable Email/Password authentication under "Authentication" > "Sign-in methods".
Obtain your Firebase configuration object from "Project Settings" > "General" > "Your apps" > "Firebase SDK snippet".
Update the src/firebase/firebaseConfig.js file with your configuration:

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "your-api-key",
  authDomain: "your-auth-domain",
  projectId: "your-project-id",
  storageBucket: "your-storage-bucket",
  messagingSenderId: "your-messaging-sender-id",
  appId: "your-app-id"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
Replace the placeholder values with your actual Firebase credentials.
## 4.Run the Development Server
Start the Vite development server to preview the app:
npm run dev

Production Build: Compile the project for production, generating optimized files in the dist folder:
## npm run build
Preview Production Build: Serve the production build locally to test the deployed version:
## npm run preview

## Functionalities
This project implements the following core and additional features:

## Login/Signup Page:
A clean and responsive login interface with email and password fields.
Firebase Authentication integration for secure login using signInWithEmailAndPassword.
Signup functionality using createUserWithEmailAndPassword to create new users.
Form validation (e.g., email format, password length) with error messages (e.g., "Invalid email" or "Password should be at least 6 characters").
Toggle between login and signup modes with a dynamic button and link.
Subtle fade-in animation for a smooth user experience.
## Chat Interface:
A header featuring a placeholder logo (Vite SVG) on the left and a "Logout" button on the right, integrated with Firebase signOut.
A main chat area displaying messages with distinct styles:
User messages in blue (#007bff) with rounded corners.
Model messages in light gray (#e9ecef) with complementary rounding.
An initial disclaimer message: "I'M NOT SURE HOW TO ANSWER THAT YET, BUT I'M LEARNING! TRY ASKING SOMETHING ELSE." displayed on first load.
Dynamic keyword-based model responses:
"JavaScript (JS) is a versatile programming language..." for queries containing "javascript" or "js".
"Hello! How can I help you today?" for greetings like "hello" or "hi".
"That's an interesting question! I can give you a general answer: it depends on the context—can you clarify?" for unrecognized queries.
A footer with a text input field and "Send" button; supports sending messages with the "Enter" key.
Chat history persistence using localStorage, retaining messages across browser sessions.
Auto-scrolling to the latest message in the chat area.
## Responsive Design:
Fully optimized for mobile, tablet, and desktop devices using CSS media queries.
Adjusts padding, widths, and message sizes on smaller screens (e.g., max-width: 600px).
## Extra Features:
Smooth animations for page transitions (fadeIn) and message appearances (slideIn).
Enter key support for sending messages, enhancing usability.
Modern styling with shadows, gradients, and hover effects for an engaging UI.

## Project Structure
chat-ui/
├── public/
│   └── vite.svg          # Placeholder logo image
├── src/
│   ├── components/       # Reusable React components
│   │   ├── Login.jsx     # Login and signup form with Firebase auth
│   │   ├── Chat.jsx      # Main chat interface with message handling
│   │   ├── Header.jsx    # Header with logo and logout button
│   │   └── Footer.jsx    # Footer with input and send functionality
│   ├── firebase/         # Firebase configuration
│   │   └── firebaseConfig.js  # Firebase app and auth initialization
│   ├── App.jsx           # Root component managing login/chat states
│   ├── main.jsx          # Entry point for React DOM rendering
│   └── styles.css        # Global CSS with responsive design and animations
├── vite.config.js        # Vite configuration file
├── package.json          # Project metadata, dependencies, and scripts
└── README.md             # Project documentation

## Notes
Firebase Configuration: Ensure Email/Password authentication is enabled in the Firebase Console. Test users can be added manually under "Authentication" > "Users" for initial testing.
Chat Model Limitation: The current model uses simple keyword-based responses. For a more advanced conversational AI, consider integrating an API like OpenAI (requires a backend or client-side API key).
Local Storage: Chat history is stored in localStorage and persists until cleared by the browser. No mechanism is included to clear it programmatically—consider adding a "Clear Chat" button if needed.
Performance: The app is lightweight, but adding more complex logic or large message histories may require optimization.
