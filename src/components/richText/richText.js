import * as React from "react";
import { renderRichText } from 'gatsby-source-contentful/rich-text';
import { INLINES, BLOCKS, MARKS } from '@contentful/rich-text-types';
import './richText.scss';


function RichText ({data , colorText='inherit'})  {

    const options = {
        renderMark: {
          [MARKS.BOLD]: (text) => <b className="font-bold">{text}</b>,
        },
        renderNode: {
          [INLINES.HYPERLINK]: (node, children) => {
            const { uri } = node.data
            return (
              <a href={uri} className='link-decorated'>
                {children}
              </a>
            )
          },
          [BLOCKS.HEADING_2]: (node, children) => {
            return <h2>{children}</h2>
          },
        },
      }
    return (
      <div className='text'  style={{color: colorText}}>
        
          {renderRichText(data, options)} 
      </div>
               
    )
}

export default RichText;