import React from 'react';

const Rank = ({ name, entries,isTeach }) => {
    if(isTeach){
        return (
        <div>
            <div className='white f3'>
            {`${name}, Number of questions you have answered is-`}
            </div>
            <div className='white f1'>
            {entries}
            </div>
        </div>
        );
    }
    else{
        return (
            <div>
                <div className='white f3'>
                {`${name}, Number of questions you have asked is-`}
                </div>
                <div className='white f1'>
                {entries}
                </div>
            </div>
            );
    }
  }

export default Rank;
