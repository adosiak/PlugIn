import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import MapView from 'react-native-maps';
import { Theme, Card, CardSection, Button } from './common';


class EmployeeList extends Component {
    render() {
        return (
            <Theme>
                <Card>
                <CardSection>
                <Text style={styles.text}>Score: 5      Power: 3      Agility: 4 </Text>
                </CardSection>
                    <CardSection style={styles.container}>
                      <MapView style={styles.map}
                        region={{
                          latitude: 37.78825,
                          longitude: -122.4324,
                          latitudeDelta: 0.1,
                          longitudeDelta: 0.1,
                        }}
                      >
                      <MapView.Marker
                        coordinate={{ latitude: 37.78825,
                        longitude: -122.4324 }}
                        title={'title'}
                        description={'description'}
                      />
                      </ MapView>
                    < /CardSection>
                    <CardSection style={styles.buttonDown}>
                        <Button onPress={console.log('pressed')}>
                            Add Location
                        </Button>
                    </CardSection>
                    </Card>
            </Theme>
        );
    }
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    flex: 1,
    alignItems: 'center'
  },
  map: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 5,
    right: 0,
  },
  buttonDown: {
    position: 'relative',
},

  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  text: {
    fontFamily: 'Arciform',
    color: '#f442d7',
    fontSize: 22

  },
});

export default EmployeeList;
