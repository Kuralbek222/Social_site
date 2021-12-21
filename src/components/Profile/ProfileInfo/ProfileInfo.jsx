import React from 'react'
import Styl from './ProfileInfo.module.css'
import colibri from '../../../img/colibri.jpg';

 const ProfileInfo = () => {
    return (
        <div>
               <img className={Styl.colibri} src={colibri}/>
      <div className={Styl.ProfileInfo}>
        Ava + desc
      </div>
        </div>
    )
}
export default ProfileInfo