import React from 'react'

const RepoItem = ({ repo }) => {
    return (
        <div className='card text-center'>
            <a href={repo.html_url}>{repo.name}</a>
        </div>
    )
}

export default RepoItem