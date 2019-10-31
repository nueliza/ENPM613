export function getDiscussion(payload) {
    //TODO: service call to get a discussion
    return{
        type: 'GET_DISCUSSION',
        data: payload //will change to response
    }
}

export function replyToDiscussion(payload) {
    //TODO: service call to reply to a discussion
    return{
        type: 'REPLY_TO_DISCUSSION',
        data: payload //will change to response
    }
}

export function deleteDiscussion(payload){
    //TODO: service call to delete a Discussion
    return{
        type: 'DELETE_DISCUSSION',
        data: payload //will change to response
    }
}

export function createDiscussion(payload) {
    //TODO: service call to create a Discussion
    return{
        type: 'CREATE_DISCUSSION',
        data: payload //will change to response
    }
}

export function deleteReplyToDiscussion(payload) {
    //TODO: service call to delete reply to discussion
    return{
        type: 'DELETE_REPLY_TO_DISCUSSION',
        data: payload //will change to response
    }
}