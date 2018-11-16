import React, { Component } from 'react'
import { Container, Header, Body, Text, Content, Form, Item, Input, Label, Button, Card, CardItem, Footer, FooterTab, Icon, View } from 'native-base';
import Avatar from '../Avatar'
import AppHeader from '../AppHeader';


export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            pass: '',
            passVisible: false
        }
    }

    toggleVisible = () => this.setState({ passVisible: !this.state.passVisible })

    render() {
        const { name, pass, passVisible } = this.state
        return (
            <Container>
                <AppHeader title="Faça Login" />

                <Avatar style={avatarStyle} />
                <Content contentContainerStyle={{ backgroundColor: 'lightgray', justifyContent: 'center', flex: 1, padding: 10 }}>

                    <View>
                        <Form>
                            <Item style={{ backgroundColor: 'white' }} rounded last>
                                <Icon active name="person" />
                                <Input placeholder="Usuário" onChangeText={name => this.setState({ name })} />
                            </Item>

                            <Item style={{ backgroundColor: 'white', marginTop: 10 }} rounded last>
                                <Icon active name="lock" />
                                <Input placeholder="Senha"
                                    secureTextEntry={!passVisible}
                                    onChangeText={pass => this.setState({ pass })} />
                                <Icon active
                                    name={passVisible ? 'visibility' : 'visibility-off'}
                                    type="MaterialIcons"
                                    style={{ marginRight: 10 }}
                                    onPress={this.toggleVisible}
                                />
                            </Item>
                        </Form>
                    </View>

                </Content>
                <Footer>
                    <FooterTab>
                        <Button full onPress={() => this.props.onLogin({ name, pass })}>
                            <Text style={{ fontSize: 16 }} >Login</Text>
                        </Button>
                    </FooterTab>
                </Footer>
            </Container>
        )
    }
}

const avatarStyle = {
    position: 'absolute',
    top: 20,
    left: '50%',
    marginLeft: -34,
    zIndex: 10
}