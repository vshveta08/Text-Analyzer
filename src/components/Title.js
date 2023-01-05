import React from 'react'
// import PropTypes from 'prop-types'

export default function Title(props) {
  return (
  <>

    {/* // JS is indise curly braces */}


        <h2 className={`text-dark header-${props.mode} bg-${props.mode}`} style={{ color: 'black', backgroundColor: '#8BC8FB', textAlign:'center', padding: '1%',boxShadow: '4px 4px 5px #CCCACA', textShadow: '2px 2px 2px grey' }}>
            {/* Text Analyzer */}
            {props.heading}
            
        </h2>
        

  </> 
  )
}
