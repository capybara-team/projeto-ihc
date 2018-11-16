/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import Login from './src/components/views/Login';
import { Root } from 'native-base';
import { createStackNavigator } from 'react-navigation'
import Logout from './src/components/views/Logout'
import AppRoutes from './appRoutes'

const AppNav = createStackNavigator({ ...AppRoutes, Logout },
    { initialRouteName: 'Home', headerMode: 'none' })

export default class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            login: null
        }
    }


    render() {
        const { login } = this.state
        return (
            <Root>
                {login ?
                    <AppNav screenProps={{ login, onLogout: () => this.setState({ login: null }) }} /> :
                    <Login onLogin={(login) => this.setState({ login })} />
                }
            </Root>
        );
    }
}