import React, { Component } from 'react';
import { Text } from 'react-native';
import { connect } from 'react-redux';
import { userUpdate, getUserInfo } from '../actions';
import { Card, CardSection, Input, Button, Theme } from './common';

class UserProfile extends Component {
    // onButtonPress() {
    //     const { username, phone, expertise } = this.props;

    //     this.props.userCreate({ username, phone, expertise: expertise || 'Scout' });
    // }

    componentWillMount() {
        this.props.getUserInfo();

        this.createDataSource(this.props);
    }

        componentWillReceiveProps(nextProps) {
        this.createDataSource(nextProps);
    }

    createDataSource({ data }) {
        this.dataSource = data;
    }

    render() {
        console.log(this.props);
        return (
            <Theme>
              <Card>
                <CardSection />
                  <CardSection>
                    <Text style={styles.text}>User: Electron</Text>
                  </CardSection>
                  <CardSection>
                    <Text style={styles.text}>Number of pins: 5</Text>
                  </CardSection>
                  <CardSection>
                    <Text style={styles.text}>Score: 5</Text>
                  </CardSection>
                  <CardSection>
                    <Text style={styles.text}>Power: 3</Text>
                  </CardSection>
                  <CardSection>
                    <Text style={styles.text}>Agility: 4 </Text>
                  </CardSection>
                </Card>
            </Theme>
        );
    }
}

const styles = {
  text: {
  fontFamily: 'Arciform',
  color: '#fff',
  fontSize: 20,
  textAlign: 'left'
}
};


const mapStateToProps = state => {
    const employees = state.userForm;

    return { employees };
};

export default connect(mapStateToProps, { getUserInfo })(UserProfile);
