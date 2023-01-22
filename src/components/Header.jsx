import React from 'react';

const Header=(props)=>{
  return(
    <div>
    <header className='container'>
    <div className='row justify-content-center mt-3 mb-4'>
    <div className='col-8'>
      <h1>Team Member Allocation</h1>
    <h3>{props.selectedteam} has {props.teammembercount} {props.teammembercount===1?"Member":"Members"} </h3>
      </div>
      </div>
    </header>
    </div>
    
  )
}
export default Header;
