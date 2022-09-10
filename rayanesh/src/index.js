import React from 'react';
import {StrictMode} from "react";
import {createRoot} from "react-dom/client";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import './index.css';
import App from './App';
import './assets/fonts/Vazir.ttf'
const root = createRoot(document.getElementById('root'));

root.render(
    <StrictMode>
        <QueryClientProvider client={new QueryClient()}>
            <App/>
        </QueryClientProvider>
    </StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
