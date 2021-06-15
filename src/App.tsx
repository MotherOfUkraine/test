import React from 'react'

import {Header, RepositoryList, Search} from "./components"

const App = () => {
    return (
        <div className="container">
            <Header/>
            <div className="content">
                <Search/>
                <RepositoryList/>
            </div>
        </div>
    )
}

export default App
