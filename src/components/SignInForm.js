import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text } from 'react-native';
import { emailChanged, passwordChanged, signInUser, setUsername } from '../actions';
import { Theme, Card, CardSection, Input, Button, Spinner } from './common';

class UserProfileCreator extends Component {
    onEmailChange(text) {
        this.props.emailChanged(text);
    }

    onPasswordChange(text) {
        this.props.passwordChanged(text);
    }

    onButtonPress() {
        const { email, password, username } = this.props;
        this.props.signInUser({ email, password, username });
    }


    renderError() {
        if (this.props.error.code !== 'auth/user-not-found') {
            return (
                <View>
                    <Text style={styles.errorTextStyle}>
                        {this.props.error.message}
                    </Text>
                </View>
            );
        }
    }

    renderButton() {
        if (this.props.loading) {
            return <Spinner size="large" />;
        }

        return (
            <Button onPress={this.onButtonPress.bind(this)}>
                Create
            </Button>
        );
    }

    render() {
        return (
            <Theme>
           
            <Card>
                <CardSection>
                        <Input
                            autoCapitalize='none'
                            label="Email"
                            placeholder="email@gmail.com"
                            onChangeText={this.onEmailChange.bind(this)}
                            value={this.props.email}
                        />
                    </CardSection>

                    <CardSection>
                        <Input
                            secureTextEntry
                            label="Password"
                            placeholder="password"
                            onChangeText={this.onPasswordChange.bind(this)}
                        />
                    </CardSection>
                    
                    <CardSection>
                    <Input
                        label="Enter your username"
                        placeholder="username"
                        value={this.props.username}
                        onChangeText={value => this.props.setUsername({ prop: 'username', value })}
                    />
                </CardSection>
                {this.renderError()}
                <CardSection>
                    {this.renderButton()}
                </CardSection> 
            </Card>
            </Theme>
        );
    }
}

const styles = {
    pickerTextStyle: {
        fontSize: 18,
        paddingLeft: 20
    },
    errorTextStyle: {
        fontSize: 20,
        alignSelf: 'center',
        color: 'red'
    }
};

 const mapStateToProps = ({ auth }) => {
    const { email, password, username, error, loading } = auth;
    return { email, password, username, error, loading };
 };

 export default connect(mapStateToProps, {
    emailChanged,
    passwordChanged,
    signInUser, 
    setUsername
 })(UserProfileCreator);

