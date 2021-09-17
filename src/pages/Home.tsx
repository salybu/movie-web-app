import { MovieList } from 'components/movie';
import { Redirect } from 'react-router-dom';
import { AUTH } from 'utils/constants';
import { storage } from 'utils/storage';

function Home() {
  const storageLogin = storage.get(AUTH);

  if (!storageLogin) {
    return <Redirect to='/signin' />;
  }

  return (
    <>
      <MovieList />
    </>
  );
}

export default Home;
