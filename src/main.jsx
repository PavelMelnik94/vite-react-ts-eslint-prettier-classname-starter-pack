import './index.css';

import React from 'react';
import ReactDOM from 'react-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';

import App from './App';

// Create a client
const queryClient = new QueryClient();

ReactDOM.render(
  // Provide the client to your App
  <>
    <QueryClientProvider client={queryClient}>
      <React.StrictMode>
        <App />
      </React.StrictMode>
      <ReactQueryDevtools initialIsOpen={true} />
    </QueryClientProvider>
  </>,
  document.getElementById('root'),
);
