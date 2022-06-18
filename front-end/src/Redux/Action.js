

export default function AddaskAction (ask) {
    return (
        {
            type: 'ADD-ASK',
            payload: ask
        })

}

export function AddanswerAction (answer) {
    return (
        {
            type: 'ADD-ANSWER',
            payload: answer
        })

}


export function countaskAction (count_ask) {
    return (
        {
            type: 'COUNT-ASK',
            payload: count_ask
        })

}

