import React from 'react'
import { Header, Body, Title, Subtitle, Left, Right } from 'native-base'

export default function AppHeader({ title, subtitle, right, ...props }) {
    return (
        <Header noLeft {...props} hasSubtitle={Boolean(subtitle)}>
            <Left />
            <Body>
                {title &&
                    <Title style={{ color: 'white' }}>{title}</Title>
                }
                {subtitle &&
                    <Subtitle style={{ color: 'white' }}>{subtitle}</Subtitle>
                }
            </Body>
            {right &&
                <Right>
                    {right}
                </Right>
            }

        </Header>
    )
}
