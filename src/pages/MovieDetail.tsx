import React from 'react';
import { RouteComponentProps, withRouter } from 'react-router';
import { MovieDetail as MovieDetailComponent } from 'components/movie';

const MovieDetail: React.FC<RouteComponentProps> = (props): JSX.Element => {
  const { match } = props;
  const id = (match.params as any)?.id;

  return (
    <>
      <MovieDetailComponent id={id} />
    </>
  );
};

export default withRouter(MovieDetail);
