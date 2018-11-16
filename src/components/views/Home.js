import React, { Component } from 'react'
import { View, Text } from 'native-base'
import Avatar from '../Avatar';
import staticData from '../../staticData'
import PeopleList from '../PeopleList';
import AppView from '../AppView';
const { people } = staticData

export default class Home extends Component {

    get firstName() {
        return this.props.screenProps.login.name.split(' ')[0]
    }

    render() {
        return (
            <AppView title="Pró-Inclusão" subtitle="Módulo AS">
                <View style={{ display: 'flex', alignItems: 'center', backgroundColor: 'lightgray', paddingTop: 40, paddingBottom: 60, marginBottom: 10 }}>
                    <Avatar size="1.2" />
                    <Text style={{ fontSize: 21, color: 'gray', marginTop: 10 }}>Olá {this.firstName}</Text>
                </View>

                <View>
                    <PeopleList title="Últimos Cadastrados" people={people} />
                </View>

                <View>
                    <PeopleList title="Lista de Espera" people={people} />
                </View>
            </AppView>
        )
    }
}
