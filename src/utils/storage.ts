export const storage = {
  set: (key: string, object: string) => {
    if (!sessionStorage) return null;

    sessionStorage[key] = object;
  },
  get: (key: string) => {
    if (!sessionStorage) return null;
    if (!sessionStorage[key]) return '';

    // return JSON.parse(sessionStorage[key]);
    return typeof sessionStorage[key] == 'string' ? sessionStorage[key] : JSON.parse(sessionStorage[key]);
  },
  remove: (key: string) => {
    if (!sessionStorage) return null;

    if (sessionStorage[key]) {
      sessionStorage.removeItem(key);
    }
  },
};
