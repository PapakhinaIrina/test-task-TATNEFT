import React, {useState} from "react";
import { useDispatch } from 'react-redux';
import { articleDeleted,  articleUpdated } from '../../actions';
import { ArticleForm } from '../ArticleForm/ArticleForm';
import { Icon } from '@iconify/react';
import Tooltip from '@mui/material/Tooltip';
import './style.css';


export default function Article(props) {
  const {title, body, theme, id} = props;
  const [visibleForm, setVisibleForm] = useState(false);
  const dispatch = useDispatch();

  const handleUpdateArticle = (props) => {
    const newArticleValues = {
    id: id,
    title: props.title,
    body: props.body,
    theme: props.theme
  }
    dispatch(articleUpdated(newArticleValues));
    setVisibleForm(false);
  };

  const handleDeleteArticle = (id) => {
    dispatch(articleDeleted(id));
  };

  return(
    <div className="articleWrapper">
      <div className="articleContainer">

        <h3 className="articleTitle">
          {title}
        </h3>

        <h4 className="articleBody">
          {body}
        </h4>

        <h5 className="articleTheme">
          {theme}
        </h5>

        <div className="articleFooter">
          <Tooltip title="Изменить" arrow placement="top">
            <button 
            className='articleEdit'
            onClick={() => setVisibleForm(true)}
            >
              <Icon icon="iconamoon:edit" height={20} />
            </button>
          </Tooltip>

          <Tooltip title="Удалить" arrow placement="top">
            <button 
            className='articleDelete'
            onClick={() => handleDeleteArticle(id)}
            >
              <Icon icon="ic:outline-delete" height={20} />
            </button>
          </Tooltip>

        </div>
      </div>
      <div className='containerListAddForm'>
        <ArticleForm
          titleModal="Изменить статью"
          visibleForm={visibleForm}
          setVisibleForm={setVisibleForm}
          id={id}
          tooltipBtnAdd={"Изменить"}
          artTitle={title}
          artBody={body}
          artTheme={theme}
          onClick={handleUpdateArticle}
          isChanging
          />
      </div>
    </div>
  )
}