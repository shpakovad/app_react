import React, {Component} from "react";
import "./App.css";
import Main from "./Components/Main/Main";
import News from "./Components/News/News";
import Header from "./Components/Header/Header";
import Login from "./Components/Login/Login";
import Profile from "./Components/Profile/Profile";
import {Route} from "react-router-dom";
import {Redirect} from "react-router-dom";
import {
    authorizationDataAC, checkedErrorAC,
    handleIPasswordAC, handleUsernameAC
} from "./Components/Redux/reducer";
import {connect} from "react-redux";

class App extends Component {

    enterAuthorizationData = (enteredUsername, enteredPassword) => {
        this.props.handleUsername(enteredUsername);
        this.props.handleIPassword(enteredPassword);
        this.props.username !== "Admin" || this.props.password !== "12345" ?
            this.props.checkedError(true) : this.props.authorizationData(false, true)
    };
    onChangeLogin = (e) => {
        this.props.handleUsername(e.currentTarget.value);
        this.props.checkedError(false)
    };
    onChangePassword = (e) => {
        this.props.handleIPassword(e.currentTarget.value);
        this.props.checkedError(false)
    };

    render() {

        const {username, password, error} = this.props;
        const {enterAuthorizationData, onChangeLogin, onChangePassword} = this;

        return (
            <div className="App">
                <div className="wrapper">
                    <Header/>
                    <Route exact path="/home" component={Main}/>
                    <Route exact path="/" render={() => <Redirect to={"/home"}/>}/>
                    <Route path="/news" component={News}/>
                    <Route path="/profile" component={Profile}/>
                    <Route path="/login"
                           render={() => <Login username={username} password={password} logged={this.props.logged}
                                                enterAuthorizationData={enterAuthorizationData}
                                                onChangeLogin={onChangeLogin}
                                                onChangePassword={onChangePassword} error={error}/>}/>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        username: state.username,
        password: state.password,
        error: state.error,
        logged: state.logged
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        authorizationData(error, logged) {
            dispatch(authorizationDataAC(error, logged))
        },
        handleUsername(username) {
            dispatch(handleUsernameAC(username))
        },
        handleIPassword(password) {
            dispatch(handleIPasswordAC(password))
        },
        checkedError(error) {
            dispatch(checkedErrorAC(error))
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(App)
