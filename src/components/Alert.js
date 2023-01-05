import React from 'react'

function Alert(props) {
  return (

    //  &&  this is works as and operator when props.alert this is null/not true then 2nd part will not checked
    props.alert && <div class="alert alert-warning alert-dismissible fade show" role="alert" style={{backgroundColor: "#c8fae1"}}>
        <strong>{props.alert.type}</strong>: {props.alert.msg}
    </div>
  )
}

export default Alert
