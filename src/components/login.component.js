import { Component } from "react";
import '../App.css';
import axios from 'axios';
export default class Login extends Component{

    handleSubmit=e=>{
        e.preventDefault();
        const data ={
            username:this.username,
            password:this.password
        }

        axios.post('http://localhost:8000/api/login/',data).then(res=>{
            console.log(res)
        }).catch(err=>{
            console.log(err)
        })
       
    }
    render(){
        return(
            <div id="login">
            <h3 className="text-center text-white pt-5">Login form</h3>
            <div className="container">
                <div id="login-row" className="row justify-content-center align-items-center">
                    <div id="login-column" className="col-md-6">
                        <div id="login-box" className="col-md-12">
                            <form id="login-form" className="form" onSubmit={this.handleSubmit}>
                                <h3 className="text-center text-info">Login</h3>
                                <div className="form-group">
                                    <label for="username" className="text-info">Username:</label><br/>
                                    <input type="text" name="username" id="username" className="form-control"
                                    onChange={e=>this.username=e.target.value}
                                    />
                                </div>
                                <div className="form-group">
                                    <label for="password" className="text-info">Password:</label><br/>
                                    <input type="text" name="password" id="password" className="form-control"
                                    onChange={e=>this.password=e.target.value}
                                    />
                                </div>
                                <div className="form-group">
                                    <label for="remember-me" className="text-info"><span>Remember me</span> <span><input id="remember-me" name="remember-me" type="checkbox"/></span></label><br/>
                                    <input type="submit" name="submit" className="btn btn-info btn-md" value="submit"/>
                                </div>
                               
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        )
    }
}