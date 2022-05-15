import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ReactNotifications } from 'react-notifications-component';
import 'react-notifications-component/dist/theme.css'

import {
  QueryClientProvider,
  QueryClient,
} from 'react-query';
const Qclient = new QueryClient();

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);

root.render(
  <React.StrictMode>
    <ReactNotifications />
    <QueryClientProvider client={Qclient}>
      <App />
    </QueryClientProvider>
  </React.StrictMode>
)

// ReactDOM.render(
//   ,
//   document.getElementById('root')
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
