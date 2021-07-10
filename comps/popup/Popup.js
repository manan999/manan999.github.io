import React from 'react' ;

import './pop.css' ;

// USAGE INSTRUCTION
// Jaha lagana hai vaha render ke last me likh do.... and 2 props chahiye ek to open(jo ki boolean value lega) aur onCloseClick (togglefunction) ...and children

const Popup  = ({open, onCloseClick, children}) => {	
	// console.log(open, onCloseClick, children) ;
	if (open)
	{	return (
			<div className="pop-con">
				<div className="popup">
					<p className="popup-close" onClick={onCloseClick}>X</p>
					{children}
				</div>
			</div>
		) ;
	}
	else 
		return null ;
}

export default Popup ; 