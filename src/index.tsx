// React
import ReactDOM from 'react-dom';

// Redux
import { Provider } from 'react-redux';
import store from './store/store';

// Components
import App from './App';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
