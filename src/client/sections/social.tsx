import * as React 			from 'react';
import { connect } 			from 'react-redux'; 

import { State } 			from '../state';

interface IStateProps {}
interface IDispatchProps {}

interface IProps extends IStateProps, IDispatchProps {}

interface IState {}

export default class Social extends React.Component<IProps, IState> {
	constructor(props: IProps) {
		super(props);

		this.state = {};
	}
	
	render() {

		return (
					<ul className="list-inline list-social">
						<li className="social">
							<a href="mailto:c@Lumi.education"><i className="fa fa-envelope"></i></a>
						</li>
						<li className="social">
							<a href="https://www.facebook.com/Lumi.education" target="_blank"><i className="fa fa-facebook"></i></a>
						</li>
						<li className="social">
							<a href="https://twitter.com/Lumi_education" target="_blank"><i className="fa fa-twitter"></i></a>
						</li>
						<li className="social">
							<a href="https://www.instagram.com/Lumi.education/" target="_blank"><i className="fa fa-instagram"></i></a>
						</li>
						<li className="social">
							<a href="https://github.com/Lumi-education" target="_blank"><i className="fa fa-github"></i></a>
						</li>
						<li className="social">
							<a href="https://www.snapchat.com/add/lumi-edu" target="_blank"><i className="fa fa-snapchat-ghost"></i></a>
						</li>
					</ul>
			);
	}
};
