import React from "react";
import App from "./components/App";
import '@fortawesome/fontawesome-free/css/all.min.css';
// import 'font-awesome/css/font-awesome.min.css';
import "./style/index.css";
import { createRoot } from 'react-dom/client';
const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App />);

