import React, { Component } from "react"
import PropTypes from "prop-types"

const CreatePanel = (props) => { 
  return( 
    <div id="create_panel" hidden={!props.visible}>

      <h1>{props.title}</h1>

      <button type="button"
        onClick={()=>{ props.closePanel(!props.visible) }}
        className="close"
        aria-hidden="true">
        &times;
      </button>

      <div className='panel'>
        <div className='panel-body'>
          {props.children}
        </div>
      </div>
    </div>
  )
}

export default CreatePanel
