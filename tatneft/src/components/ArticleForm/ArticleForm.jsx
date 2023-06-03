import React, { useState, useEffect } from 'react';
import { Icon } from '@iconify/react';
import Tooltip from '@mui/material/Tooltip';
import './style.css';

export const ArticleForm = (props) => {
  const {visibleForm, setVisibleForm, titleModal, tooltipBtnAdd, artTitle, artBody, artTheme, onClick, isChanging} = props;

  const [titleVal, setTitleVal] = useState(artTitle);
  const [bodyVal, setBodyVal] = useState(artBody);
  const [themeVal, setThemeVal] = useState(artTheme);

  useEffect(() => {
    setTitleVal(artTitle)
    setBodyVal(artBody)
    setThemeVal(artTheme)
  },[artTitle, artBody, artTheme])

  const handleAddArticle = (event) => {
    event.preventDefault()
    onClick({title: event.target.title.value, body: event.target.body.value, theme: event.target.theme.value});
    setVisibleForm(false);
    setTitleVal('')
    setBodyVal('')
    setThemeVal('')
  }

  const handleCancelArticle = () => {
    setVisibleForm(false);
  }

  return (
    [visibleForm && (
      <form className='articleFormWrapper' onSubmit={handleAddArticle}>
      <div className='articleFormContainer'>

        <p>  {titleModal}</p>

        <div className='articleFormTitleContainer'>
          <input
          name='title' 
          className='articleFormTitle' 
          type='text' 
          placeholder='Заголовок' 
          id='articleFormTitle'
          value={titleVal}
          onChange={(e) => setTitleVal(e.target.value)}
          />
        </div>

        <div className='articleFormBodyContainer' >
          <input 
          name='body'
          className='articleFormBody' 
          type='text' 
          placeholder='Текст'
          value={bodyVal}
          onChange={(e) => setBodyVal(e.target.value)}
          id='articleFormBody'
          />      
        </div>

        <div className='articleFormThemeContainer'>
        <input 
          name='theme'
          className='articleFormTheme' 
          type='text' 
          placeholder='Тема'
          id='articleFormTheme'
          value={themeVal}
          onChange={(e) => setThemeVal(e.target.value)}
          />  
        </div>

        <div className='articleFormButtons'>

          <Tooltip title={tooltipBtnAdd} arrow placement="top">
            <button 
              className='buttonAdd'
              type='submit'
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
    </form>
    )
  ]
  )
}