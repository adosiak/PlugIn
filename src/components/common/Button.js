import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const Button = ({ onPress, children }) => {
    const { buttonStyle, textStyle } = styles;

    return (
        <TouchableOpacity onPress={onPress} style={buttonStyle}>
            <Text style={textStyle}>
                {children}
            </Text>
        </TouchableOpacity>
    );
};

const styles = {
    textStyle: {
        fontFamily: 'Arciform',
        alignSelf: 'center',
        color: '#0a0662',
        fontSize: 25,
        fontWeight: '600',
        paddingTop: 10,
        paddingBottom: 10
    },

    buttonStyle: {
        alignSelf: 'center',
        backgroundColor: '#fff',
        borderRadius: 10,
        marginLeft: 5,
        marginRight: 5,
        paddingRight: 20,
        paddingLeft: 20,
        justifyContent: 'center',
        alignItems: 'center'
    }
};

export { Button };
