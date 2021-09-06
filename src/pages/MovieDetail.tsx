import React, { useEffect, useState } from 'react';
import { RouteComponentProps, withRouter } from 'react-router';

const MovieDetail: React.FC<RouteComponentProps> = (props): JSX.Element => {
  const [movie, setMovie] = useState();

  useEffect(() => {}, []);

  const { location, match } = props;
  console.log(match);
  const params = match.params;
  const id = (match.params as any)?.id;
  return <div>여기는 무비 디테일 id는 {id}</div>;
};

export default withRouter(MovieDetail);
