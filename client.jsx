const React = require('react');
// const ReactDom = require('react-dom');
const WordRelay = require('./WordRelay');
import ReactDom from 'react-dom';

ReactDom.createRoot(document.querySelector('#root')).render(<WordRelay/>);