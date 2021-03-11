import React, { useEffect, useState, useRef } from 'react'
import classNames from 'classnames'
import Components from './components'

const menuConfig = require('./functions.config.json')

const App = () => {
  const [mdSrc, setMdSrc] = useState('README')
  const changeContent = (menu: string) => {
    console.log(menu)
    setMdSrc(menu)
  }

  const meanuDom = () => {
    const list: any[] = menuConfig.docs
    const domlist: any = []
    list.forEach((items, index) => {
      const itemCls = classNames('utils-cpt_menu_item', {
        ['utils-cpt_menu_item-active']: items.route === mdSrc
      })
      domlist.push(<div className={ itemCls } key={ index } onClick = { () => changeContent(items.route) } >{ items.name}</div>)
    })
    return domlist
  }

  const funcDom = () => {
    const list: any[] = menuConfig.functions
    const domlist: any = []
    list.forEach((items, index) => {
      const itemCls = classNames('utils-cpt_menu_functions_item', {
        ['utils-cpt_menu_functions_item-active']: items.route === mdSrc
      })
      domlist.push(<div className={ itemCls } key={ index } onClick = { () => changeContent(items.route) } >{ items.name}</div>)
    })
    return domlist
  }

  return (
    <>
      <div className="utils-home">
        <div className="utils-banner">
          <div className="utils-banner_title">my-utils 前端公共方法库</div>
          <div className="utils-banner_btn">v0.0.10</div>
        </div>
        <div className="utils-cpt">
          <div className="utils-cpt_menu">
            <div  className="utils-cpt_menu_pos">
              { meanuDom() }
              <div className="utils-cpt_menu_functions">
                <div className="utils-cpt_menu_functions_title">方法列表</div>
                <div>{ funcDom() }</div>
              </div>
            </div>
          </div>
          <div className="utils-cpt_body">
            <Components md={ mdSrc }/>
          </div>
        </div>
        
      </div>
    </>
  )
}

export default App
