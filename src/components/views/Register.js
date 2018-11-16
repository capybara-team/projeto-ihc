import React, { Component } from 'react'
import { Alert } from 'react-native'
import { Image } from 'react-native'
import { Text, View, Header, Left, Body, Title, Subtitle, Button, Icon, Footer, FooterTab, Form, Item, Input, Textarea, DatePicker } from 'native-base';
import map from '../../../assets/map.jpeg'
import Avatar from '../Avatar';
import Picker from '../Picker'
import AppView from '../AppView';

export default class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            birthDate: '',
            obs: '',
            health: '',
            living: '',
            ...props.navigation.getParam('item', {})
        }
    }

    cancel = () => Object.values(this.state).join('') ?
        Alert.alert('Cancelar', 'Tem certeza que quer cancelar? as Alterações serão perdidas',
            [
                { text: 'Continuar editando', onPress: () => { } },
                { text: 'Sair mesmo assim', style: 'cancel', onPress: () => this.props.navigation.goBack() }
            ]) :
        this.props.navigation.goBack()

    updateField = field =>
        value => this.setState({ [field]: value })

    submit = () => {
        for (let field in this.state)
            if (!this.state[field])
                return Alert.alert(
                    'Formulário inválido!',
                    'Preencha todos os campos do formulário antes de enviar.')

        // OK
        Alert.alert(
            'Cadastro concluído',
            'O cadastro foi concluído com sucesso!',
            [
                {
                    text: 'Voltar para Home', onPress: () =>
                        this.props.navigation.goBack()
                },
                {
                    text: 'Realizar novo cadastro', onPress: () => {
                        this.props.navigation.goBack()
                        this.props.navigation.push('Register')
                    }
                },
            ], { cancelable: false })
    }

    render() {
        const currentItem = this.props.navigation.getParam('item', undefined)
        return (
            <AppView title={currentItem ? 'Cadastro Detalhado' : 'Novo Cadastro'}>
                <Image source={map} style={{ height: 200 }} />
                <View >
                    <Header style={{ paddingTop: 40, paddingBottom: 30 }} noShadow hasSubtitle>
                        <Left style={{ flex: 0.3 }} >
                            <Avatar size="0.7" />
                        </Left>
                        <Body>
                            <Title>{currentItem ? currentItem.name : 'Novo Cadastro'}</Title>
                            <Subtitle>{currentItem ? currentItem.address : 'Insira os dados abaixo'}</Subtitle>
                        </Body>
                    </Header>
                    <Footer style={{ elevation: 0 }}>
                        <FooterTab>
                            <Button>
                                <Icon name="camera" />
                            </Button>

                            <Button>
                                <Icon name="videocam" />
                            </Button>

                            <Button>
                                <Icon name="photo-library" type="MaterialIcons" />
                            </Button>
                        </FooterTab>
                    </Footer>

                    <Form style={{ padding: 10 }}>
                        <Item style={{ marginBottom: 10 }} regular>
                            <Input placeholder="Nome completo"
                                defaultValue={currentItem && currentItem.name}
                                onChangeText={this.updateField('name')} />
                        </Item>

                        <Item style={{ marginBottom: 10 }} regular>
                            <DatePicker placeHolderText="Data de Nascimento"
                                onDateChange={this.updateField('birthDate')}
                            />
                        </Item>

                        <Item style={{ marginBottom: 10 }} regular>
                            <Textarea rowSpan={5} placeholder="Observação"
                                onChangeText={this.updateField('obs')} />
                        </Item>

                        <Item style={{ marginBottom: 10 }} picker regular>
                            <Picker
                                placeholder="Situação de Saúde"
                                selectedValue={this.state.health}
                                onValueChange={this.updateField('health')}
                                options={['Saudável', 'Doente', 'Drogas', 'Morto']}
                            />
                        </Item>

                        <Item style={{ marginBottom: 10 }} picker regular>
                            <Picker
                                placeholder="Situação de Sustento"
                                selectedValue={this.state.living}
                                onValueChange={this.updateField('living')}
                                options={['De rua', 'Abrigo', 'Lar']}
                            />
                        </Item>

                        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                            <Button onPress={this.cancel} style={{ flex: 0.4 }} full light>
                                <Text>Cancelar</Text>
                            </Button>

                            <Button onPress={this.submit} style={{ flex: 0.4 }} full success>
                                <Text>Salvar</Text>
                            </Button>
                        </View>
                    </Form>
                </View>
            </AppView>
        )
    }
}
