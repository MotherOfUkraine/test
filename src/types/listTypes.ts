interface repositoryItem{
    name: string,
    language: string
    description: string,
}

export interface listState{
    list: Array<repositoryItem>,
    searchValue: string
}

export enum listTypes {
    SET_LIST = 'SET_LIST'
}

interface setListAction {
    type: listTypes.SET_LIST,
    payload: Array<any>
}

export type listAction = setListAction