import React, { useState } from 'react';
import femaleProfile from '../images/femaleProfile.jpg';
import maleProfile from '../images/maleProfile.jpg';
import Teams from './Teams';
const Employees = (props) => {
   
    return (
        <div className='container'>

            <div className='row justify-content-center mt-3 mb-3'>
                <div className='col-6'>
                   <Teams  selectedteam={props.selectedteam} handleteamselectionchange={props.handleteamselectionchange} />

                </div>
                <div className='col-8'>

                    <div className='card-collection'>
                        {props.employees.map((employee) => <div key={employee.id} id={employee.id} className={(employee.teamName === props.selectedteam ? 'card m-2 standout' : 'card m-2')} style={{ cursor: 'pointer' }} onClick={props.handleemployeecardclick}>
                            {employee.gender === 'female' ? <img src={femaleProfile} className='card-img-top' /> : <img src={maleProfile} className='card-img-top' />}
                            <div className='card-body'>
                                <h5 className='card-title'>Full Name:{employee.fullName}</h5>
                                <p className='card-text'><b>Designation:</b>{employee.designation}</p>
                            </div>
                        </div>)}
                    </div>
                </div>
            </div>
        </div>

    )
}
export default Employees;
