import React, { Component } from 'react'
import AppView from '../AppView';
import { Text } from 'native-base'

export default class Logout extends Component {

    componentDidMount() {
        setTimeout(this.props.screenProps.onLogout, 3000)
    }
    render() {
        return (
            <AppView title="Saindo..." noFooter contentProps={{ contentContainerStyle: { flex: 1, justifyContent: 'center', alignItems: 'center' } }}>
                <Text style={{ fontSize: 32 }}>Volte sempre!</Text>
            </AppView>
        )
    }
}
