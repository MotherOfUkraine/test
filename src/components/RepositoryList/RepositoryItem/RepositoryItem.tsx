import React from 'react'

import './repositoryItem.scss'

interface RepositoryItemProps {
    list: {
        name: string,
        language: string,
        description: string,
        html_url: string
    }
}

const RepositoryItem = ({list}: RepositoryItemProps) => {
    return (
            <a href={list.html_url} target="_blank" className="repository__item" rel="noopener noreferrer">
                <span className="repository__item__title">{list.name}</span>
                <span className="repository__item__heading">Language: <span className="repository__item__value">{list.language}</span></span>
                <span className="repository__item__heading">Description: <span className="repository__item__value">{list.description}</span></span>
            </a>
    )
}
export default RepositoryItem