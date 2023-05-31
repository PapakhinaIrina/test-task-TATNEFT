import React from "react";
import { Icon } from '@iconify/react';
import Tooltip from '@mui/material/Tooltip';
import './style.css';

export default function Article() {
  const handleEditArticle = () => {
    console.log('edit');
  };

  const handleDeleteArticle = () => {
    console.log('delete');
  };



  return(
    <div className="articleWrapper">
      <div className="articleContainer">

        <div className="articleTitle">
          Title
        </div>

        <div className="articleBody">
          ArticleBody
        </div>

        <div className="articleFooter">
          <Tooltip title="Изменить" arrow placement="top">
            <button 
            className='articleEdit'
            onClick={() => handleEditArticle()}
            >

              <Icon icon="iconamoon:edit" height={20} />
            </button>
          </Tooltip>

          <Tooltip title="Удалить" arrow placement="top">
            <button 
            className='articleDelete'
            onClick={() => handleDeleteArticle()}
            >
              <Icon icon="ic:outline-delete" height={20} />
            </button>
          </Tooltip>

        </div>
      </div>
    </div>
  )
}