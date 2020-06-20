import React, { Component } from 'react';
import PropTypes from 'prop-types';


export class Search extends Component {
    state = {
        text: ''
    }

    onChange = (e) => this.setState({ [e.target.name]: e.target.value });

    onSubmit = (e) => {
        e.preventDefault();
        if (this.state.text === '') {
            this.props.setAlert('Enter valid search text', 'light');
        }
        else {
            this.props.searchUsers(this.state.text);
            this.setState({ text: '' });
        }

    }

    static propTypes = {
        searchUsers: PropTypes.func.isRequired,
        clearUsers: PropTypes.func.isRequired,
        isShowClear: PropTypes.bool.isRequired,
        setAlert: PropTypes.func.isRequired,
    }

    render() {
        const { isShowClear, clearUsers } = this.props;
        return (
            <div>
                <form className='form' onSubmit={this.onSubmit}>
                    <input type='text' name='text' placeholder='Search..' value={this.state.text} onChange={this.onChange} />

                    <input type='submit' value='Search' className='btn btn-dark btn-block' />
                </form>
                {
                    isShowClear &&
                    <button onClick={clearUsers} className='btn btn-dark btn-block' >Clear</button>
                }
            </div>
        )
    }
}

export default Search
