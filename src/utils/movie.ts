export const printGenres = (genres: string[]): string => {
  let genrePrint: string = '';
  genres.map((genre, index) => {
    genrePrint += index !== genres.length - 1 ? genre + ', ' : genre;
  });
  return genrePrint;
};
