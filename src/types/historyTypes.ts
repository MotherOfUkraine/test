export interface historyState {
    history: Array<string>
}

export enum historyType {
    SET_HISTORY= 'SET_HISTORY'
}

interface setHistoryAction {
    type: historyType.SET_HISTORY,
    payload: string
}

export type historyAction = setHistoryAction