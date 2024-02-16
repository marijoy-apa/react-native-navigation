import React, { Component } from "react";
import { Text, View, TouchableOpacity } from 'react-native';
import { CardSection } from "./common";
import { Actions } from "react-native-router-flux";


class ListItem extends Component {

    onRowPress() {
        console.log(this.props.employee)
        Actions.employeeEdit({ employee: this.props.employee });
    }

    
    render() {
        const { name } = this.props.employee
        return (
            <TouchableOpacity
                onPress={this.onRowPress.bind(this)}
            >
                <View>
                    <CardSection>
                        <Text>{name}</Text>
                    </CardSection>
                </View>
            </TouchableOpacity>
        )
    }
}
export default ListItem;