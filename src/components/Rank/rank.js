import React from 'react';

const Rank = ({ user,isTeach }) => {
    if(isTeach===false){
        return (
        <div>
            <div className='white f3'>
            {`${user.name},Welcome Student`}
            </div>
        </div>
        );
    }
    else{
        return (
            <div>
                <div className='white f3'>
                {`${user.name}, Welcome Teacher`}
                </div>    
            </div>
            );
    }
  }

export default Rank;
