import React from 'react';

import UserItem from './UserItem';
import Spinner from '../layout/Spinner';
import PropTypes from 'prop-types';



const Users = ({ users, loading }) => {
    if (loading) {
        return <Spinner />
    } else {

        return (
            <div>

                <div className='card grid-2'>

                    {users.map(user => (<UserItem key={user.id} user={user} />))}

                </div>
            </div>

        )
    }

}

Users.propTypes = {
    users: PropTypes.array.isRequired,
    loading: PropTypes.bool,
}

export default Users
