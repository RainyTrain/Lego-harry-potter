import ReactDOM from 'react-dom/client';
import './Styles/index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { store } from './Modules/Redux/Store';
import { Provider } from 'react-redux';

const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>,
);
