import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';

import { TonConnectUIProvider } from '@tonconnect/ui-react';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <TonConnectUIProvider
      manifestUrl="https://e-com-ton.vercel.app/tonconnect-manifest.json"
      actionsConfiguration={{ twaReturnUrl: 'https://t.me/Tonnode_bot/app' }}
    >
      <App />
    </TonConnectUIProvider>
  </React.StrictMode>
);
