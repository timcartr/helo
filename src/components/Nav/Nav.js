import React from 'react'
import {connect} from 'react-redux'

function Nav(props) {
    let conditionalRender = () => {
        if(props.location.pathname !== '/'){
            return(
                <div>
                    <img src={props.profile_pic} alt=""/>
                    <p>{props.username}</p>
                    <button>Home</button>
                    <button>New Post</button>
                    <button>Logout</button>
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

