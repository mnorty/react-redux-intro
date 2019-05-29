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
        <h1> User</h1>
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
