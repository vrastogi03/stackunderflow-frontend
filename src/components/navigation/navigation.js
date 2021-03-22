import React from 'react';
import { Button, ButtonGroup } from 'reactstrap';

const Navigation = () =>{
    return(
        <div>
            <ButtonGroup style= {{display: 'flex', justifyContent: 'flex-end'}}>
                <Button color="primary">Sign Out</Button>
                <Button color="primary">Sign In</Button>
                <Button color="primary">Register</Button>
            </ButtonGroup>
        </div>
    )
}

export default Navigation;