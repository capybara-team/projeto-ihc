import React, { Component } from 'react'
import AppView from '../AppView';
import { Text, Card, CardItem, Body } from 'native-base'
import { Image } from 'react-native'
import chart from '../../../assets/chart.png'

export default class Analyze extends Component {
    render() {
        return (
            <AppView title="Pró-Inclusão" subtitle="Análise" padder>
                <Card style={{ marginBottom: 10 }}>
                    <CardItem header bordered>
                        <Text>Distrubuição por região</Text>
                    </CardItem>
                    <CardItem bordered>
                        <Body>
                            <Image source={chart} resizeMode="contain" style={{ flex: 1, height: 200, width: '100%' }} />
                        </Body>
                    </CardItem>
                </Card>

                <Card style={{ marginBottom: 10 }}>
                    <CardItem header bordered>
                        <Text>Histórico de cadastros</Text>
                    </CardItem>
                    <CardItem bordered>
                        <Body>
                            <Image source={chart} resizeMode="contain" style={{ flex: 1, height: 200, width: '100%' }} />
                        </Body>
                    </CardItem>
                </Card>

                <Card>
                    <CardItem header bordered>
                        <Text>Histórico da lista de espera</Text>
                    </CardItem>
                    <CardItem bordered>
                        <Body>
                            <Image source={chart} resizeMode="contain" style={{ flex: 1, height: 200, width: '100%' }} />
                        </Body>
                    </CardItem>
                </Card>
            </AppView>
        )
    }
}
