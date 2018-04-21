import React, { Component } from 'react';
import { View } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { CardSection, Logo, Button, Theme } from './common';

class EmployeeList extends Component {

    render() {
        return (
            <Theme>
                <View style={styles.mainPageStyle}>
                    <CardSection>
                        <Logo />
                    </CardSection>
                    <CardSection>
                        <Button onPress={() => Actions.auth()}>
                            Plug in
                        </Button>
                    </CardSection>
                </View>
            </Theme>
        );
    }
}

const styles = {
    mainPageStyle: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
    }
}

export default EmployeeList;
