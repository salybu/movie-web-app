import React from 'react';

function Template(props: any) {
  return <div className='container'>{props.children}</div>;
}

export default React.memo(Template);
