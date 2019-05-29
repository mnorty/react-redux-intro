import React , {Component} from 'react'
import {getUser} from '../redux/userReducer'
import {connect} from 'react-redux'

class User extends Component {
  componentDidMount(){
    this.props.getUser()
  }
  render(){
    console.log(this.props)
    return (
      <div>
        <h1> User</h1>
        <>
        {!this.props.loading && this.props.user.name ? 
        <div>
          <h3>First Name: {this.props.user.name.first}</h3>
          <h3>Last Name: {this.props.user.name.last}</h3>
          <img src={this.props.user.picture.large} alt="person picture"/>
        </div>  
        : (<div>Loading....</div>
        )}
        </>
      </div>
    )
  }
}

function mapStateToProps(reduxState){
  return reduxState
}

export default connect(
  mapStateToProps, 
  {getUser}
)(User)
