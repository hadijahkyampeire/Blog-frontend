import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {LoginAction} from '../../Actions/AuthActions';

class Login extends Component{
    state={
        email:'',
        Password:''
    }
    handleInput=(event)=>{
        const {name, value} = event.target;
        this.setState({[name]:value});
    }
    handleLogin=(event)=>{
        event.preventDefault();
        const {email, password} = this.state;
        this.props.LoginAction({email,password}, this.props.history)

    }
    render(){
        const {email, password} = this.state;
        return(
            <div className="register">
            <div >
                <i className="fa fa-user-circle fa-3x" style={{color:"#0000FF"}}></i>
                <div> SIGN IN</div>
                </div>
            <form onSubmit={this.handleLogin}>
        <div className="input-group mb-3">
        <div className="input-group-prepend">
            <span className="input-group-text" id="inputGroup-sizing-sm">Email</span>
        </div>
        <input type="text" className="form-control" aria-label="small" aria-describedby="inputGroup-sizing-sm"
        name="email" value={email} onChange={this.handleInput}/>
        </div>

        <div className="input-group mb-3">
        <div className="input-group-prepend">
            <span className="input-group-text" id="inputGroup-sizing-sm">Password</span>
        </div>
        <input type="password" className="form-control" aria-label="small" aria-describedby="inputGroup-sizing-sm"
        name="password" value={password} onChange={this.handleInput}/>
        </div>
        <div>
        <button type="submit" className="btn btn-primary loginbtn">Login</button>
        </div>
        </form>
        <span className="words">Not yet registered?</span>
        <div>
        <Link to="/register" className="words">Create Account</Link>
        </div>
            </div>  
        );
    }
}
export default connect(null, {LoginAction})(Login);