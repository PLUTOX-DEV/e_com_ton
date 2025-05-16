/* eslint-disable no-unused-vars */
import { useTelegram } from './utils/useTelegram';
import { TonConnectButton } from '@tonconnect/ui-react';
import './index.css'; // ✅ Import Tailwind CSS styles here

function App() {
  const { user , tg} = useTelegram();
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-6">
      <h1 className="text-3xl font-bold text-blue-700 mb-4">
        TON E-commerce Mini App
      </h1>

      {user ? (
        <div className="bg-white shadow-md rounded-xl p-6 w-full max-w-md">
          <p className="text-lg mb-2">Hello, <span className="font-semibold">{user.first_name}</span></p>
          <TonConnectButton />
        </div>
      ) : (
        <p className="text-red-500">Telegram user not found.</p>
      )}
    </div>
  );
}

export default App;
