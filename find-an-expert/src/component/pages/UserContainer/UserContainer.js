import React from 'react';
import UserModel from '../../../model/user';

class NewUserContainer extends React.Component {
    state = {
        username: '',
        email: '',
        password: '',
    };

    handleChange = (event) => {
        this.setState({
        [event.target.name]: event.target.value
        })
    };

    handleSubmit = (event) => {
        event.preventDefault();
        UserModel.createUser(this.state)
        .then((result) => {
            console.log(result);
        });

        this.props.history.push('/profile');
    }

    render() {
        return (
            <div>
                <h1>Sign Up!</h1>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <label htmlFor="">Username:</label>
                        <input onInput={this.handleChange} type="text" name="username" />
                    </div>
                    <div>
                        <label htmlFor="">Email:</label>
                        <input onInput={this.handleChange} type="text" name="email" />
                    </div>
                    <div>
                        <label htmlFor="">Password:</label>
                        <input onInput={this.handleChange} type="text" name="password" />
                    </div>
                    <button type="submit">Sign up</button>
                </form>
            </div>
        )
    }
}

export default NewUserContainer;
