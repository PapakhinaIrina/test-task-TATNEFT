import React from 'react';
import { Icon } from '@iconify/react';
import Tooltip from '@mui/material/Tooltip';
import './style.css';

export default function ArticleForm() {

  const handleAddArticle = () => {
    console.log('Add');
  };

  const handleCancelArticle = () => {
    console.log('Cancel');
  }

  return (
    <div className='articleFormWrapper'>
      <div className='articleFormContainer'>

        <p>Добавить статью</p>

        <div className='articleFormTitleContainer'>
          <input className='articleFormTitle' type='text' placeholder='Заголовок' />
        </div>

        <div className='articleFormBodyContainer' >
          <input className='articleFormBody' type='text' placeholder='Текст' />      
        </div>

        <div className='articleFormThemeContainer'>
          <input className='articleFormTheme' type='text' placeholder='Тема' />
        </div>

        <div className='articleFormButtons'>

        <Tooltip title="Добавить" arrow placement="top">
          <button 
            className='buttonAdd'
            onClick={() => handleAddArticle()}
            >
            <Icon icon="gala:add" height={20} />
          </button>
        </Tooltip>

        <Tooltip title="Отмена" arrow placement="top">
          <button 
          className='buttonCancel'
          onClick={() => handleCancelArticle()}
          >
            <Icon icon="clarity:cancel-line" height={20} />
          </button>
        </Tooltip>

        </div>
      </div>
    </div>
  )
}