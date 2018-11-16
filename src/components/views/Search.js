import React, { Component } from 'react'
import { Input, Item, Icon, Button, Text } from 'native-base'
import staticData from '../../staticData'
import PeopleList from '../PeopleList'
import AppView from '../AppView';

export default class Search extends Component {
    render() {
        return (
            <AppView title="Pró-Inclusão" subtitle="Pesquisa" padder>
                <Item regular>
                    <Icon name="people" />
                    <Input placeholder="Pesquisar" returnKeyType="search" returnKeyLabel="Pesquisar" />
                    <Icon name="search" />
                </Item>
                <Button style={{ marginTop: 10 }} iconLeft block>
                    <Icon name="filter" type="MaterialCommunityIcons" />
                    <Text>Filtros</Text>
                </Button>
                <PeopleList style={{ marginTop: 10 }} people={staticData.people} />
            </AppView>
        )
    }
}
