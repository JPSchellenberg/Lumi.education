import * as React 			from 'react';
import { connect } 			from 'react-redux'; 

declare var $: any;

import { State } 			from '../newsletter_types';

import {
	newsletter_popup_dismiss
} 							from '../newsletter_actions';
import Newsletter_subscribe from './newsletter_subscribe';

interface IStateProps {
	newsletter_popup_dismissed: boolean;
}
interface IDispatchProps {
	newsletter_popup_dismiss: () => void;
}

interface IProps extends IStateProps, IDispatchProps {}

interface IState {}

export class Newsletter_popup extends React.Component<IProps, IState> {
	constructor(props: IProps) {
		super(props);

		this.state = {};
	}

	componentDidMount() {
		setTimeout(() => {
			if (!this.props.newsletter_popup_dismissed) {
				$('#newsletter-popup').modal({ show: true });
			} 
		}, 15000);
	}

	componentWillReceiveProps(nextProps: IProps) {
		if (nextProps.newsletter_popup_dismissed) { $('#newsletter-popup').modal({ show: false }); }
	}
	
	render() {

		return (
			<div className="modal fade" id="newsletter-popup" role="dialog" aria-labelledby="myModalLabel">
				<div className="modal-dialog" role="document">
					<div className="modal-content">
						<div className="modal-header">
							<button 
							onClick={this.props.newsletter_popup_dismiss}
							type="button" 
							className="close" 
							data-dismiss="modal" 
							aria-label="Close"><span aria-hidden="true">&times;</span></button>
							<h4 className="modal-title" id="myModalLabel">Newsletter Anmeldung</h4>
						</div>
						<div className="modal-body">
							<Newsletter_subscribe />
						</div>
						<div className="modal-footer">
							<button 
							onClick={this.props.newsletter_popup_dismiss}
							type="button" 
							className="btn btn-default" 
							data-dismiss="modal">Close</button>
						</div>
					</div>
				</div>
			</div>
);
			
	}
};

function mapStateToProps(state: State): IStateProps {   
    return {
		newsletter_popup_dismissed: state.newsletter.popup_dismissed
	};
}

function mapDispatchToProps(dispatch): IDispatchProps {
  return {
	  newsletter_popup_dismiss: () => dispatch( newsletter_popup_dismiss() )
  };
}

export default connect<any, {}, {}>(
  mapStateToProps,
  mapDispatchToProps
)(Newsletter_popup);
