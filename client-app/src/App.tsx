import React from 'react';
import logo from './logo.svg';
import { Provider } from 'react-redux';
import store from './redux/configureStore';
import Dashboard from './containers/Dashboard';
import './App.css';

const App: React.FC = () => {
    return (
        <Provider store={store}>
            <div className="App">
                <Dashboard />
            </div>
        </Provider>
    );
};

export default App;
