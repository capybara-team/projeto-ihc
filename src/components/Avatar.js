import React from 'react'
import { Card, Icon } from 'native-base';

export default function Avatar({ size = 1, color = 'lightgray', style = {}, ...props }) {

  const avatarStyle = {
    width: 68 * size,
    height: 68 * size,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 34 * size,
    ...style
  }

  return (
    <Card style={avatarStyle} {...props}>
      <Icon style={{ color, fontSize: 38 * size }} name="person" />
    </Card>
  )
}