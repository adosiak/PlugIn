import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import UserHome from './components/UserHome';
import UserProfile from './components/UserProfile';
import FrontPage from './components/FrontPage';
import SignInForm from './components/SignInForm';


const RouterComponent = () => {
    return (
        <Router navigationBarStyle={styles.navigationBarStyle} titleStyle={styles.navigationTitleStyle}>
            <Scene key="root" hideNavBar>
                <Scene key="welcome" initial>
                    <Scene key="frontPage" component={FrontPage} hideNavBar />
                </Scene>
                <Scene key="auth">
                    <Scene key="login" component={LoginForm} title="Authentication" />
                 </Scene>
                <Scene key="signIn">   
                    <Scene key="sign" component={SignInForm} title="Complite your profile" />
                </Scene>
                <Scene key="main">
                    <Scene
                        rightTitle="Profile"
                        //callback function any time user taps on right=hand side button
                        onRight={() => Actions.userProfile()}
                        key="userHome"
                        component={UserHome}
                        title="The Game"
                    />
                    <Scene key="userProfile" component={UserProfile} title="Profile" />
                </Scene>
            </Scene>
        </Router>
    );
};

const styles = {
    navigationBarStyle: {
        backgroundColor: '#0a0950',
        borderBottomWidth: 0,
        elevation: 1
    },
    navigationTitleStyle: {
        fontFamily: 'Arciform',
        color: '#fff',
        fontSize: 25
    }
};

export default RouterComponent;
