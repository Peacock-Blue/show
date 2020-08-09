import React from 'react';
import {Show} from './Show';
import 'semantic-ui-css/semantic.min.css';

export const App = () => {
  const userdata = {
    'name': 'bLaH',
    'meta': [{
      'name': 'BLAH1',
      'BLAH1': 'blah1',
      'index': 0
    }, {
      'name': 'BLAH2',
      'BLAH2': 'blah2',
      'index': 1
    }
  ]
  };
  return (
    <>
      <Show userdata={userdata}/>
    </>
  );
}
