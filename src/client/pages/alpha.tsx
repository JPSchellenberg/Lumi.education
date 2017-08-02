import * as React 			from 'react';
import { connect } 			from 'react-redux'; 

import { State } 			from '../state';


interface IStateProps {}
interface IDispatchProps {}

interface IProps extends IStateProps, IDispatchProps {}

interface IState {}

export class Landing extends React.Component<IProps, IState> {
	constructor(props: IProps) {
		super(props);
	}
	
	render() {

		return (
			<div id="signup" className="contact" style={{minHeight: 'auto'}}>
				<div className="container">
					<h2>Lumi Treffen am 8.8. - 18:30</h2>
					<div className="row">
						<div className="col-md-4 col-md-offset-4">
							<div id="mc_embed_signup">
								<form action="//education.us16.list-manage.com/subscribe/post?u=d013a4abbc01289bdbf145fcb&amp;id=756d53fb0e" method="post"
									id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" className="validate" target="_blank">
									<div id="mc_embed_signup_scroll">

										<div className="mc-field-group input-group">
											<label className="input-group-addon">Email Address </label>
											<input type="email" value="" name="EMAIL" className="required email form-control" id="mce-EMAIL"></input>
										</div>
										<div className="mc-field-group input-group">
											<label className="input-group-addon">Vorname </label>
											<input type="text" value="" name="FNAME" className="required form-control" id="mce-FNAME"></input>
										</div>
										<div className="mc-field-group input-group">
											<label className="input-group-addon">Nachname </label>
											<input type="text" value="" name="LNAME" className="required form-control" id="mce-LNAME"></input>
										</div>
										<div className="mc-field-group size1of2 input-group">
											<label className="input-group-addon">Berufserfahrung (Jahre) (0=Student) </label>
											<input type="number" name="EXP" className="required form-control" value="" id="mce-EXP"></input>
										</div>
										<div className="mc-field-group input-group">
											<label className="input-group-addon">Fach 1 </label>
											<input type="text" value="" name="SUBJ1" className="required form-control" id="mce-SUBJ1"></input>
										</div>
										<div className="mc-field-group input-group">
											<label className="input-group-addon">Fach 2 </label>
											<input type="text" value="" name="SUBJ2" className="required form-control" id="mce-SUBJ2"></input>
										</div>
										<div id="mce-responses" className="clear">
											<div className="response" id="mce-error-response" style={{display:'none'}}></div>
											<div className="response" id="mce-success-response" style={{display:'none'}}></div>
										</div>
										<div style={{ position: 'absolute', left: '-5000px'}} aria-hidden="true"><input type="text" name="b_d013a4abbc01289bdbf145fcb_756d53fb0e" value=""></input></div>
										<div className="clear"><input type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" className="button"></input></div>
									</div>
								</form>
							</div>
						</div>
					</div>
				</div>
			</div>
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
)(Landing);

