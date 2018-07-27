import React, { Component } from 'react'
import axios from 'axios'
import { connect } from 'react-redux'
import { updateUserData } from '../../ducks/reducer'
// import {Route, Link} from 'react-router-dom'

class Auth extends Component {
    constructor(){
        super()

        this.state={
            usernameInput: '',
            passwordInput: ''
        }
    }

    updateUsername(val){
        this.setState({
            usernameInput: val
        })
    }

    updatePassword(val){
        this.setState({
            passwordInput: val
        })
    }

    registerUser(body){
        axios.post('/api/register', body)
        .then( res => {
            console.log(res.data)
            this.props.updateUserData(res.data)
            this.props.history.push('/dashboard')
        })
    }

    login(body){
        axios.post('/api/login', body)
        .then( res => {
            console.log(res.data)
            this.props.updateUserData(res.data)
            this.props.history.push('/dashboard')
        })

    }
    
    render() {
        return (
            <div>
                <p>Username: </p>
                <input 
                    type="text" 
                    placeholder=''
                    onChange={ e => this.updateUsername( e.target.value )}
                    />
                <p>Password: </p>
                <input 
                    type="text" 
                    placeholder=''
                    onChange={e => this.updatePassword( e.target.value )}/>
                <button onClick={() => this.login(this.state)}>Login</button>
                <button onClick={() => this.registerUser(this.state)}>Register</button>
            </div>
        )
    }
}

export default connect(null, {updateUserData})(Auth)