import React, { Component } from 'react';

import { View, Text } from 'react-native';

import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducers';
import { initializeApp } from 'firebase/app';
import LoginForm from './components/LoginForm';
import { Header } from './components/common';
class App extends Component {

    UNSAFE_componentWillMount() {
        const config = {
            apiKey: "AIzaSyCG4x-uI8O74Ll-sC9h9tTJm3nCQHxOkNQ",
            authDomain: "react-native-manager-30c62.firebaseapp.com",
            projectId: "react-native-manager-30c62",
            storageBucket: "react-native-manager-30c62.appspot.com",
            messagingSenderId: "836232440590",
            appId: "1:836232440590:web:54e51a03610ef5f29ec55f"
        };
        initializeApp(config)
    }

    render() {
        return (
            <Provider store={createStore(reducers)}>
                <Header headerText="sdfsd"/>
                {/* <View>
                    <Text>
                        Hello  sfsdfsdfdsfdsfsdf
                    </Text>
                </View> */}

                <LoginForm/>
            </Provider>
        )
    }
}

export default App;