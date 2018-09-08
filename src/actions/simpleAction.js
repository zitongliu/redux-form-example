
const types = {
    simpleAction: 'SIMPLE_ACTION'
}

export const  SIMPLE_ACTION = () => {
    return {
        type: types.simpleAction,
        payload: 'Simple action payload',
    }
}