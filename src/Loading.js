// rce
import React, { Component } from 'react'

export class Loading extends Component {
  render() {
    return (
      // .d-flex.justify-content-center.align-items-center.border.rounded.p-3
      <div className="d-flex justify-content-center align-items-center border rounded p-3">
        <div 
          className="spinner-border text-primary"
          style={{width: '3rem', height: '3rem'}}>
            {/* span.visually-hidden{Carregando...} */}
            <span className="visually-hidden">Carregando</span>
          </div>
      </div>      
    )
  }
}

export default Loading