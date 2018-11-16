import React, { Component } from 'react'
import { Container, Content, Footer, FooterTab, Button, Icon, Text } from 'native-base'
import AppHeader from './AppHeader';
import { withNavigation } from 'react-navigation'
import AppRoutes from '../../appRoutes'

class AppView extends Component {
    render() {
        const { title, subtitle, padder = false, headerProps = {}, navigation, noFooter, contentProps = {}, children, ...props } = this.props

        return (
            <Container {...props}>
                <AppHeader {...{ title, subtitle, ...headerProps }} right={
                    <Button transparent onPress={() => navigation.navigate('Logout')}>
                        <Icon name="logout" type="MaterialCommunityIcons" />
                    </Button>
                } />
                <Content padder={padder} {...contentProps}>
                    {children}
                </Content>
                {!noFooter &&
                    <Footer>
                        <FooterTab>
                            {Object.keys(AppRoutes).map(route => !route.hidden &&
                                <Button key={route}
                                    active={navigation.state.routeName === route}
                                    onPress={() => navigation.navigate(route)}
                                >
                                    <Icon {...AppRoutes[route].icon}
                                        active={navigation.state.routeName === route} />
                                    <Text>{AppRoutes[route].title}</Text>
                                </Button>
                            ).filter(v => v)}

                        </FooterTab>
                    </Footer>
                }
            </Container>
        )
    }
}

export default withNavigation(AppView)