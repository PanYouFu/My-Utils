import React, { useState, useEffect, useRef } from 'react'
import classnames from 'classnames'
// import { NavLink, Route } from 'react-router-dom'
import ReactMarkdown from 'react-markdown'
import { coy } from 'react-syntax-highlighter/dist/esm/styles/prism'
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter'
import { jsx, javascript, less } from 'react-syntax-highlighter/dist/esm/languages/prism'
// import { Ripple } from './Ripple'

// const md = require(`../src/formatBankNo/README.md`)

export interface CptProps {
  md?: string;
}

const getCompoent = (md) => {return (<ReactMarkdown source={md} escapeHtml={false} renderers={{
  code: codeBlock,
}} />)}

SyntaxHighlighter.registerLanguage('jsx', jsx)
SyntaxHighlighter.registerLanguage('less', less)
SyntaxHighlighter.registerLanguage('javascript', javascript)

const codeBlock = (props) => {
  return (
    <figure className="highlight">
      <SyntaxHighlighter language={props.language} style={coy}>
        {props.value}
      </SyntaxHighlighter>
    </figure>
  )
}

const Components = (props: CptProps) => {
  let md
  switch (props.md) {
    case 'README':
      md = require(`./docs/README.md`)
      break;
    case 'CHANGELOG':
      md = require(`./docs/CHANGELOG.md`)
      break;
    default:
      md = require(`../src/${ props.md }/README.md`)
      break;
  }
  return (
    <>
      <div className="markdown-body">
        <ReactMarkdown source={md} escapeHtml={false} renderers={{ code: codeBlock,}} />
      </div>
     
    </>
  )
}
Components.defaultProps = {
  md: 'README'
}

export default Components

