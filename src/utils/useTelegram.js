// src/utils/useTelegram.js
export const useTelegram = () => {
  const tg = window.Telegram.WebApp;

  const initDataUnsafe = tg?.initDataUnsafe || {};
  const user = initDataUnsafe.user || null;

  return { tg, user };
};
