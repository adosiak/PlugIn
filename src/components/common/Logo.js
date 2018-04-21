import React from 'react';
import { View, Image } from 'react-native';

const Logo = () => {
    return (
        <View style={styles.logoStyle}>
            <Image source={require('../../img/lamp.png')} style={{ width: 150, height: 150 }}/>
        </View>
    );
};

const styles = {
    logoStyle: {
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center'
    }
}

export { Logo };
