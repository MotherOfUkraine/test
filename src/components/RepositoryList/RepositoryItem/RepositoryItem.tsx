import React from 'react'

import './repositoryItem.scss'

const RepositoryItem = () => {
    return (
        <div className="repository__item">
            <span className="repository__item__title">accordion</span>
            <span className="repository__item__heading">Language: <span className="repository__item__value">Java</span></span>
            <span className="repository__item__heading">Description: <span className="repository__item__value">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus, quaerat?</span></span>
        </div>

    )
}
export default RepositoryItem