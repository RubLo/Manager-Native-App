import React, { Component } from 'react';
import { View ,Text } from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import firebase from 'firebase';
import LoginForm from './components/LoginForm';
import Router from './Router';

class App extends Component {
    
    componentWillMount() {
        var config = {
            apiKey: "AIzaSyBAaqqfd2vjv5n6qqYSAnZMUS7ew-VjRtU",
            authDomain: "manager-78b11.firebaseapp.com",
            databaseURL: "https://manager-78b11.firebaseio.com",
            projectId: "manager-78b11",
            storageBucket: "manager-78b11.appspot.com",
            messagingSenderId: "1022222119486"
        };
        firebase.initializeApp(config);
        firebase.database.enableLogging(true);
    }
    
    render(){
        const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
        return (
            <Provider store={store}>
                <Router />
            </Provider>
        );
    }
}

export default App;