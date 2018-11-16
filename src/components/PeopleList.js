import React from 'react'
import Avatar from './Avatar'
import { List, ListItem, Text, Left, Body, Right, Icon } from 'native-base'
import { withNavigation } from 'react-navigation'

function PeopleList({navigation,  title, people, ...props }) {
    return (
        <List {...props}>
            {title &&
                <ListItem itemHeader first>
                    <Text>{title}</Text>
                </ListItem>
            }
            {people.map(({ name, ...data }) =>
                <ListItem button icon key={name}
                    onPress={() => navigation.navigate('Register', { item: { name, ...data } })}
                >
                    <Left>
                        <Avatar size="0.5" color="white" style={{ backgroundColor: 'lightgray' }} transparent />
                    </Left>
                    <Body>
                        <Text>{name}</Text>
                    </Body>
                    <Right>
                        <Icon type="MaterialIcons" name="keyboard-arrow-right" />
                    </Right>
                </ListItem>
            )}
        </List>
    )
}

export default withNavigation(PeopleList)