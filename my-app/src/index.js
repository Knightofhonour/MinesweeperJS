import React from 'react';
import ReactDOM from 'react-dom';
import Entry from './ui/Entry.jsx';

ReactDOM.render(
  <React.StrictMode>
    <Entry text={"Number of Rows:"}/>
  </React.StrictMode>,
  document.getElementById('row')
);

ReactDOM.render(
  <React.StrictMode>
    <Entry text={"Number of Cols:"}/>
  </React.StrictMode>,
  document.getElementById('col')
);



