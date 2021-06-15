import React from 'react'

import RepositoryItem from "./RepositoryItem/RepositoryItem"

import './repositoryList.scss'

const RepositoryList = () => {
    return (
        <div className="repository__list">
            <RepositoryItem/>
            <RepositoryItem/>
            <RepositoryItem/>
            <RepositoryItem/>

        </div>
    )
}

export default RepositoryList