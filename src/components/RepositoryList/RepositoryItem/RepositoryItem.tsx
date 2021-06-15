import React from 'react'

import './repositoryItem.scss'

interface RepositoryItemProps {
    list: {
        name: string,
        language: string,
        description: string
    }
}

const RepositoryItem = ({list}: RepositoryItemProps) => {
    return (
        <div className="repository__item">
            <span className="repository__item__title">{list.name}</span>
            <span className="repository__item__heading">Language: <span className="repository__item__value">{list.language}</span></span>
            <span className="repository__item__heading">Description: <span className="repository__item__value">{list.description}</span></span>
        </div>

    )
}
export default RepositoryItem