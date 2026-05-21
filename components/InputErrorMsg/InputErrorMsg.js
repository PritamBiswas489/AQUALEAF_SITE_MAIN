import React from 'react';
import './InputErrorMsg.scss';
function InputErrorMsg(props) {
	return (
		<>
			<span className="input-error">{props.error}</span>
		</>
	);
}

export default InputErrorMsg;
