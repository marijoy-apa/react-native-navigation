import React from "react";
import { Text, View } from 'react-native';

const Header = (props) => {
    const { textSTyle, viewStyle } = styles;
    return (
        <View style={viewStyle}>
            <Text
                style={textSTyle}>{props.headerText}
            </Text>
        </View>);
};

const styles = {
    textSTyle: {
        fontSize: 20
    },
    viewStyle: {
        backgroundColor: '#F8F8F8',
        justifyContent: 'center',
        alignItems: 'center',
        height: 60,
        paddingTop: 15,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        elevation: 2,
        position: "relative",
        marginTop: 25
    }
}

export { Header };