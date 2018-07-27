import React from 'react'
import {connect} from 'react-redux'
import axios from 'axios'

function Nav(props) {
    function logout(){
        axios.post('/api/auth/logout')
        .then(res => {
            
        })
    }
    let conditionalRender = () => {
        if(props.location.pathname !== '/'){
            return(
                <div>
                    <img src={props.profile_pic} alt=""/>
                    <p>{props.username}</p>
                    <button>Home</button>
                    <button>New Post</button>
                    <button onClick={ () => logout()}>Logout</button>
                </div>
            )
        }
    }

    return (
        <div>
        {conditionalRender()}
        </div>
    )
}

function mapStateToProps(state) {
    return {
        username: state.username,
        profile_pic: state.profile_pic
    }
}

export default connect(mapStateToProps)(Nav)

