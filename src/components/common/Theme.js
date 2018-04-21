import React from 'react';
import { ImageBackground } from 'react-native';

const Theme = (props) => {
    return (
        <ImageBackground source={require('../../img/background.jpg')} style={styles.containerStyle}>
            {props.children}
        </ImageBackground>
    );
};

const styles = {
    containerStyle: {
        flex: 1,
    }
};

export { Theme };
