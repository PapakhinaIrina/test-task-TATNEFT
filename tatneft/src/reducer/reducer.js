import { v4 as uuidv4 } from 'uuid';

const initialState = {
    articles: [],
}

const reducer = (state = initialState, action) => {
    const {payload} =  action;
    switch (action.type) {
        case 'ARTICLE_CREATED':

            const newArticle = {
                id: uuidv4(),
                title: payload.title,
                body: payload.body,
                theme: payload.theme
            }
            return {
                ...state,
                articles: [...state.articles, newArticle],
            }
        case 'ARTICLE_UPDATED':
            return {
                ...state,
                articles: state.articles.map(item => item.id === action.payload.id ? action.payload : item),
                title: "",
                edit: false,
            }
        case 'ARTICLE_DELETED': 
            return {
                ...state,
                articles: state.articles.filter(item => item.id !== action.payload)
            }
        default: return state
    }
}

export default reducer;