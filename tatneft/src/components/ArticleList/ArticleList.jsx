import React, {useEffect, useState}  from 'react';
import { useSelector } from 'react-redux';
import Article from '../Article/Article';
import { ArticleForm } from '../ArticleForm/ArticleForm';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Tooltip from '@mui/material/Tooltip';
import { Icon } from '@iconify/react';
import { articleCreated } from '../../actions';
import { useDispatch } from 'react-redux';

import './style.css';

const ArticleList = (props) => {
    const allArticles = useSelector(state => state.reducer);
    const [visibleForm, setVisibleForm] = useState(false);
    const [articles, setArticles] = useState(allArticles.articles);
    const [allThemes, setAllThemes] = useState([]);
    const dispatch = useDispatch();
    
    useEffect(() => {
        setArticles(allArticles.articles)
        setAllThemes([...new Set(allArticles.articles.map(item => item.theme))])
}, [JSON.stringify(allArticles.articles)])

const sortArticles = (theme) => {
        const articlesByTheme = allArticles.articles.filter(item => item.theme === theme)
        setArticles(articlesByTheme)
}
    const handleAddArticle = (props) => {
        dispatch(articleCreated(props))
    }
    return (
        <div className='wrapperList'>
            <div className='containerListHeader'>
                <h1>Список статей</h1>

        <Tooltip title="Добавить статью" arrow placement="top">
            <button className='btnAddArticle' type='button' onClick={() => setVisibleForm(true)}>
                <Icon icon="gala:add" height={40} />
            </button>
        </Tooltip>
        </div>

        <div>
            <button className='btnResetFilter' type='button' onClick={() => setArticles(allArticles.articles)}>Очистить фильтр</button>
        </div>

        <div>
        {allThemes.length  > 0 &&( 
            allThemes.map(item=>{
                return(
                    <button className='btnTheme' type='button' onClick={() => sortArticles(item)}>{item}</button>
                )
            })
        )}
        </div>

        {articles.length > 0 && (
            <div className='containerList'>
                {articles.map(item=>{
                    return(
                        <Box sx={{ width: '100%', maxWidth: 1240, bgcolor: 'background.paper'}}>
                            <List disablePadding>
                                <ListItem disablePadding alignItems="center">
                                    <Article
                                        key={item.id}
                                        title={item.title}
                                        body={item.body}
                                        theme={item.theme}
                                        id={item.id}
                                    />
                                </ListItem>
                            </List>
                        </Box>
                    )
                })}
            </div>
        )}
            <div className='containerListAddForm'>
                <ArticleForm 
                    visibleForm={visibleForm}
                    setVisibleForm={setVisibleForm}
                    titleModal={'Добавить статью'}
                    tooltipBtnAdd={'Добавить статью'}
                    onClick={handleAddArticle}
                    />
            </div>
        </div>
    )
}

export default ArticleList;