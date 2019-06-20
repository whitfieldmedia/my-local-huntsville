import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux';

window.onerror = function (message, url, lineNo, colNo, error) {

  console.log(arguments);

  let container = document.createElement('div');

  container.style.color = 'red';
  container.style.position = 'fixed';
  container.style.background = '#eee';
  container.style.padding = '2em';
  container.style.top = '1em';
  container.style.left = '1em';

  let msg = document.createElement('pre');
  msg.innerText = [
     'Message: ' + message,
     'URL: ' + url,
     'Line: ' + lineNo,
     'Column: ' + colNo,
     'Stack: ' + (error && error.stack)
  ].join('\n');

  container.appendChild(msg);

  document.body.appendChild(container);
};

ReactDOM.render(
  <Provider store={ store }>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
)
