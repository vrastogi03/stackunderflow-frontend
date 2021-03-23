import React from 'react';
import { Button, ButtonGroup } from 'reactstrap';

const Navigation = ({onRouteChange, isSignedIn}) =>{
    
    if(isSignedIn){
        return(
            <div>
                <ButtonGroup style= {{display: 'flex', justifyContent: 'flex-end'}}>
                    <Button color="primary" onClick={ () => onRouteChange('signinstud')}>Sign Out</Button>
                </ButtonGroup>
            </div>
        )
    }else{    
        return(
            <div>
                <ButtonGroup style= {{display: 'flex', justifyContent: 'flex-end'}}>
                    <Button color="primary" onClick={ () => onRouteChange('signinteach')}>Sign In Teacher</Button>
                    <Button color="primary" onClick={ () => onRouteChange('registerteach')}>Register Teacher</Button>
                    <Button color="primary" onClick={ () => onRouteChange('signinstud')}>Sign In Student</Button>
                    <Button color="primary" onClick={ () => onRouteChange('registerstud')}>Register Student</Button>

                </ButtonGroup>
            </div>
        )
    }
}

export default Navigation;