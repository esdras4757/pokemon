import React from 'react';
import pokemonLogo from '../pkemonLogo.png'

const Header = () => {
    return (
        <div className='container-header'>
            <img src={pokemonLogo} alt="pokemonLogo" />
        </div>
    );
}



export default Header;
