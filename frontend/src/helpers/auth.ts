// зачем нужен state - чтобы на втором шаге будем сравнивать его со значением от AuthServer
// тем самым убедимся, что ответ пришел именно на наш запрос
export function generateState(length: number) {
  // генерим случайные символы из англ алфавита
  let state = '';
  const alphaNumericCharacters =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  const alphaNumericCharactersLength = alphaNumericCharacters.length;
  for (let i = 0; i < length; i++) {
    state += alphaNumericCharacters.charAt(
      Math.floor(Math.random() * alphaNumericCharactersLength),
    );
  }

  return state;
}
