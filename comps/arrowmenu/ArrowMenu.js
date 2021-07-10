import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome' ;
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons' ;

import './arrowmenu.css' ;

const ArrowMenu = ({children, styling}) => {
	const [menu, setMenu] = useState(false) ;
	const [animation, setAnimation] = useState('') ;

	const toggleMenu = () => {
		animation==='swing-in-top-fwd'?setAnimation(''):setAnimation('swing-in-top-fwd') ;
		setMenu(!menu) ;
	}
	
	return ( 
		<React.Fragment>
			<FontAwesomeIcon icon={(menu?faChevronUp:faChevronDown)} onClick={toggleMenu}/>
			<div className={styling+' '+menu+' '+animation}>
				{children}
			</div>
		</React.Fragment>	
	) ;
}

export default ArrowMenu ;