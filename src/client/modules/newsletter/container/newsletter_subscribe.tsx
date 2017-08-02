import * as React 			from 'react';
import { connect } 			from 'react-redux'; 

import * as email_validator from 'email-validator';
import * as classnames 		from 'classnames';

import { State } 			from '../newsletter_types';

import { 
	newsletter_subscribe,
	newsletter_set_email,
	newsletter_reset
} 							from '../newsletter_actions';

interface IStateProps {
	newsletter_email_address: string;
	newsletter_subscription_status: 'init' | 'pending' | 'success' | 'error';
}
interface IDispatchProps {
	newsletter_subscribe: (email_address: string) => void;
	newsletter_set_email: (emaiL_address: string) => void;
	newsletter_reset: () => void;
}

interface IProps extends IStateProps, IDispatchProps {}

interface IState {
	valid_email_address: boolean;
}

export class Newsletter_subscribe extends React.Component<IProps, IState> {
	constructor(props: IProps) {
		super(props);

		this.state = {
			valid_email_address: false
		};

		this.handle_input = this.handle_input.bind(this);
	}

	handle_input(e) {
		const email = e.target.value;
		this.setState( { valid_email_address: email_validator.validate(email) });
		this.props.newsletter_set_email( email );
	}
	
	render() {

		switch(this.props.newsletter_subscription_status) {
			case 'init':
			default:
				return (
				<div className="input-group">
					<input 
						onChange={this.handle_input} 
						type="email" 
						className="form-control" 
						placeholder="eMail für Newsletter">
					</input>
					<span className="input-group-btn">
						<button 
							onClick={() => {
								if (this.state.valid_email_address) {
									this.setState({ valid_email_address: false });
									this.props.newsletter_subscribe( this.props.newsletter_email_address );
								}
								} }
							className={classnames({
								"btn btn-default": true,
								"disabled": !this.state.valid_email_address
							})} type="button">
								Anmelden
						</button>
					</span>
				</div>
				);
			case 'success':
				return(<div className="alert alert-success" role="alert">Eine Bestätigungs-eMail wurde an {this.props.newsletter_email_address} versendet. <a onClick={this.props.newsletter_reset} className="alert-link">Weitere eMail eintragen.</a> </div>);
			case 'error':
				return(<div className="alert alert-danger" role="alert">{this.props.newsletter_email_address} konnte nicht eingetragen werden. <a onClick={this.props.newsletter_reset} className="alert-link">Zurücksetzen.</a></div>);
			case 'pending':
				return(<div className="alert alert-info" role="alert">{this.props.newsletter_email_address} wird in den Newsletter eingetragen.. Bitte warten.</div>);
		}
			
	}
};

function mapStateToProps(state: State): IStateProps {   
    return {
		newsletter_email_address: state.newsletter.email_address,
		newsletter_subscription_status: state.newsletter.newsletter_subscription_status
	};
}

function mapDispatchToProps(dispatch): IDispatchProps {
  return {
	  	newsletter_subscribe: (email_address: string) => dispatch( newsletter_subscribe(email_address, { SOURCE: 'Embeded Form' }) ),
		newsletter_set_email: (email_address: string) => dispatch( newsletter_set_email( email_address ) ),
		newsletter_reset: () => dispatch( newsletter_reset() )
  };
}

export default connect<any, {}, {}>(
  mapStateToProps,
  mapDispatchToProps
)(Newsletter_subscribe);
