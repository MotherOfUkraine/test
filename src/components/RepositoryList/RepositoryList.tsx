import React from 'react'

import RepositoryItem from "./RepositoryItem/RepositoryItem"

import {useTypedSelector} from "../../hooks/useTypedSelector"

import './repositoryList.scss'

const RepositoryList = () => {

    const {list} = useTypedSelector(state => state.list)
    return (
        <div className="repository__list">
            {
                list.map((item: any, index: number) => <RepositoryItem key={index} list={item}/>)
            }
        </div>
    )
}

export default RepositoryList