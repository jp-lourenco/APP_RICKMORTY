import React from 'react';
import store from './redux/store';
import CharactersContainer from './components/characterContainer'
import { Provider } from 'react-redux';

function App() {
    return (
        <Provider store={store} >
            <CharactersContainer/>
        </Provider>
    )
}

export default App;