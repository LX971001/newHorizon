import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Que from './Question';
import Eva from './Evaluation';
import registerServiceWorker from './registerServiceWorker';
import BasicRouter from './Router'
ReactDOM.render(<BasicRouter />, document.getElementById('root'));
registerServiceWorker();
