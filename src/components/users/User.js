import React, { Component, Fragment } from 'react';
import Spinner from '../layout/Spinner';
import { Link } from 'react-router-dom';
import Repos from '../repos/Repos';

class User extends Component {
    componentDidMount() {
        this.props.getUser(this.props.match.params.login);
        this.props.getUserRepos(this.props.match.params.login);
    }
    render() {
        const { login
            , id
            , node_id
            , avatar_url
            , gravatar_id
            , url
            , html_url
            , followers_url
            , following_url
            , gists_url
            , starred_url
            , subscriptions_url
            , organizations_url
            , repos_url
            , events_url
            , received_events_url
            , type
            , site_admin
            , name
            , company
            , blog
            , location
            , email
            , hireable
            , bio
            , twitter_username
            , public_repos
            , public_gists
            , followers
            , following } = this.props.user;
        const { loading, repos } = this.props;

        if (loading) return <Spinner />
        return (
            <Fragment>
                <Link to='/' className='btn btn-dark btn-sm my-1'>Back to Search</Link>
                Hireable: {' '}{hireable ? <i className='fas fa-check text-success'></i> : <i className='fas fa-times-circle text-danger'></i>}
                <div className='card grid-2'>
                    <div className='all-center'>
                        <img src={avatar_url} alt='' className='round-img' style={{ width: '150px' }}></img></div>
                    <h1>{name}</h1>
                    <p>{location}</p>
                    <div>
                        {bio && (<Fragment><h3>Bio</h3> <p>{bio}</p></Fragment>)}
                        <a href={html_url} className='btn btn-dark my-1'>To Github Profile</a>
                        <ul>
                            <li >
                                {login && (<Fragment><strong>Username:</strong> <p>{login}</p></Fragment>)}
                            </li>
                            <li >
                                {company && (<Fragment><strong>Company:</strong> <p>{company}</p></Fragment>)}
                            </li>
                            <li >
                                {blog && (<Fragment><strong>Website:</strong> <p>{blog}</p></Fragment>)}
                            </li>
                            <li >
                                {twitter_username && (<Fragment><strong>Twitter:</strong> <p>{twitter_username}</p></Fragment>)}
                            </li>

                        </ul>
                    </div>
                </div>
                <div className='card text-center'>
                    <div className='badge badge-primary'>Followers:{followers}</div>
                    <div className='badge badge-success'>Following:{following}</div>
                    <div className='badge badge-light'>Public Repos:{public_repos}</div>
                    <div className='badge badge-dark'>Public Gists:{public_gists}</div>
                </div>
                <div><Repos repos={repos} /></div>
            </Fragment>
        )
    }
}

export default User
