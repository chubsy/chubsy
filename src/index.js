import React from 'react';
import ReactDOM from 'react-dom';
import Chubsy from './Chubsy/Chubsy';

import * as serviceWorker from './serviceWorker';

ReactDOM.render(<Chubsy />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

// import ReactDOM from 'react-dom';
// ReactDOM.render(< app />, document.getEleme)
