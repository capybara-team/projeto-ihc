import React, { Component } from 'react'
import { Picker as PickerNB } from 'native-base'
export const Item = PickerNB.Item
export default class Picker extends Component {

    onValueChange = (item, ...args) => {
        if (item)
            this.props.onValueChange(item, ...args)
    }
    render() {
        const { placeholder, options, onValueChange, ...props } = this.props
        return (
            <PickerNB
                mode="dropdown"
                placeholder={placeholder}
                selectedValue={undefined}
                onValueChange={this.onValueChange}
                prompt={placeholder}
                {...props}
            >
                <Item label={placeholder} value={undefined} color="gray" />
                {Object.keys(options).map(value =>
                    <Item key={value} value={value} label={options[value]} />
                )}
            </PickerNB>
        )
    }
}
