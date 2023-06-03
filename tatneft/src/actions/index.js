export const articleCreated = (articles) => {
    return {
        type: 'ARTICLE_CREATED',
        payload: articles
    }
}
export const articleUpdated = (articles) => {
    return {
        type: 'ARTICLE_UPDATED',
        payload: articles
    }
}
export const articleDeleted = (articles) => {
    return {
        type: 'ARTICLE_DELETED',
        payload: articles
    }
}