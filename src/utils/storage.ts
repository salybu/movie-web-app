export const storage = {
  set: (key: string, object: string) => {
    if (!sessionStorage) return null;

    sessionStorage[key] = object;
  },
  get: (key: string) => {
    if (!sessionStorage) return null;
    if (!sessionStorage[key]) return null;

    return JSON.parse(sessionStorage[key]);
  },
};
