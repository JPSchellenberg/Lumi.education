import * as React 			from 'react';
import { connect } 			from 'react-redux'; 

import { State } 			from '../state';

import Newsletter_subscribe 	 from '../modules/newsletter/container/newsletter_subscribe';
import Newsletter_popup 	 from '../modules/newsletter/container/newsletter_popup';

import Social 					 from './social';

interface IStateProps {}
interface IDispatchProps {}

interface IProps extends IStateProps, IDispatchProps {}

interface IState {}

export class Contact extends React.Component<IProps, IState> {
	constructor(props: IProps) {
		super(props);

		this.state = {};
	}
	
	render() {

		return (
			<section id="contact" className="contact">
				<div className="container">
					<div className="row">
						<div className="col-md-4 col-md-offset-4">
							<Newsletter_subscribe />
							<Newsletter_popup />
						</div>
					</div>

					<Social />
				</div>
			</section>
			);
	}
};
function mapStateToProps(state: State): IStateProps {   
    return {};
}

function mapDispatchToProps(dispatch): IDispatchProps {
  return {};
}

export default connect<any, {}, {}>(
  mapStateToProps,
  mapDispatchToProps
)(Contact);

