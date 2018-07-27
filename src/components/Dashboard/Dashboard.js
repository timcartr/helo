import React, { Component } from 'react'
import axios from 'axios'
import {connect} from 'react-redux'

class Dashboard extends Component {
    constructor(){
        super()

        this.state = {
            searchInput: '',
            userPosts: true,
            posts: []
        }
    }

    componentDidMount(){
        axios.get(`/api/posts/${this.props.user_id}`)
        .then(res => {
            this.setState({
                posts:res.data
            })
        })
    }

    updateSearch(val){
        this.setState({
            searchInput: val
        })
    }

    updateCheckBox(){
        this.setState({
            userPosts: !this.state.userPosts
        })
    }

    render() {
        console.log(this.state.userPosts)
        let mappedPosts = this.state.posts.map( (post,i) => {
            return(
                <div key={i}>
                    <h2>post.title</h2>
                    <p>post.username</p>
                    <img src={post.profile_pic} alt={post.userid}/>
                </div>
            )
        })
        return (
            <div>
            <input type="text" placeholder="Search by Title" onChange={ e => this.updateSearch( e.target.value )}/>
            <button>Search</button>
            <button>Reset</button>
            <input type="checkbox" onClick={ () => this.updateCheckBox()}/>
            </div>
        )
    }
}

function mapStateToProps(state){
    return {
        id: state.id
    }
}

export default connect(mapStateToProps)(Dashboard)