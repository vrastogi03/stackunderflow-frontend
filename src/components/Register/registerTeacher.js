import React from 'react';

class RegisterTeacher extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            email: '',
            name:'',
            password: ''
        }
    }

    onNameChange = (event) =>{
        this.setState({name: event.target.value})
    }

    onEmailChange = (event) =>{
        this.setState({email: event.target.value})
    }
    
    onPasswordChange = (event) =>{
        this.setState({password: event.target.value})
    }

    onSubmitSignIn = () => {
        fetch('https://blueberry-pie-74380.herokuapp.com/registerteacher',{
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                email: this.state.email,
                password: this.state.password,
                name: this.state.name
            })
        })
            .then(response => response.json())
            .then(user =>{
                if(user.id){
                    this.props.loadteach(user);
                    this.props.onRouteChange('hometeach');
                }
            })

    }
    
    render(){
        // const {onRouteChange} = this.props;
        return(
            <article className="br3 ba  b--black-10 mv4 w-100 w-50-m w-25-l shadow-5 mw6 center">
            <main className="pa4 black-80">
                <div className="measure centre ">
                    <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                    <legend className="f4 fw6 ph0 mh0">Register Teacher</legend>
                    <div className="mt3">
                        <label className="db fw6 lh-copy f6" htmlFor="name">Name</label>
                        <input 
                            className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
                            type="text" 
                            name="name"  
                            onChange={this.onNameChange}
                            id="name"/>
                    </div>
                    <div className="mt3">
                        <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
                        <input 
                            className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
                            type="email" 
                            name="email-address"  
                            onChange={this.onEmailChange}
                            id="email-address"/>
                    </div>
                    <div className="mv3">
                        <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
                        <input 
                            className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
                            type="password" 
                            name="password"  
                            onChange={this.onPasswordChange}
                            id="password"/>
                    </div>
                    </fieldset>
                    <div className="">
                    <input 
                        className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" 
                        type="submit" 
                        onClick={this.onSubmitSignIn} 
                        value="Register"/>
                    </div>
                </div>
            </main>
            </article>
        )

    }
   
}


export default RegisterTeacher;