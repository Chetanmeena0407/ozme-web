import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-app.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-database.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyDa4ENLuX55ylCiDPL0c8toLspGbLw5e6c",
  authDomain: "ozme-web.firebaseapp.com",
  databaseURL: "https://ozme-web-default-rtdb.firebaseio.com",
  projectId: "ozme-web",
  storageBucket: "ozme-web.firebasestorage.app",
  messagingSenderId: "569442370502",
  appId: "1:569442370502:web:4c7862185ce0e07154e8c7"
};

export const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
export const auth = getAuth(app);
