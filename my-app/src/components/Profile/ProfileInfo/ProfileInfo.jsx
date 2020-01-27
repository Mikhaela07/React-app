
import React from 'react';
import m from'./ProfileInfo.module.css';
const ProfileInfo=(props)=>{
return(<div>
<div>
<img src="https://s.grenka.ua/promo/review/2018/12.2018/gus/12.jpg" /> 
</div>
<div className={m.description}> ava+descrption
</div>
</div>);
}
export default ProfileInfo;