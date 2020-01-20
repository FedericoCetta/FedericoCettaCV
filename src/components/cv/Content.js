import React, { Component } from 'react';
import { translate } from "react-translate";

class Content extends Component{
	render(){
		let { t } = this.props;
		return (<label className={this.props.class}>{t(this.props.name)}</label>);
	}
}	

export default translate('contents')(Content);