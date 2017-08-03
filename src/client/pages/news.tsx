import * as React 			from 'react';
import { connect } 			from 'react-redux'; 

import { State } 			from '../state';

import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

interface IStateProps {}
interface IDispatchProps {}

interface IProps extends IStateProps, IDispatchProps {}

interface IState {}

export class News extends React.Component<IProps, IState> {
	constructor(props: IProps) {
		super(props);
	}
	
	render() {

		return (
			<div style={{ marginTop: '70px' }} className="container-fluid">
				
				<div className="row">
					<div className="col-md-10 col-md-offset-1">
						<h1 style={{ borderBottom: '2px solid #000000'}}>News</h1>
						<Card style={{ marginTop: '20px' }} zDepth={3}>
							<CardTitle title="Homepage release" subtitle="03.08.2017 - JPSchellenberg" />
							<CardText>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
								Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque. Aliquam dui mauris, mattis quis lacus
								id, pellentesque lobortis odio.
							</CardText>
							<CardActions>
								<FlatButton label="Mehr" />
							</CardActions>
						</Card>
						<Card style={{ marginTop: '20px' }}>
							<CardTitle title="Homepage release" subtitle="03.08.2017 - JPSchellenberg" />
							<CardText>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
								Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque. Aliquam dui mauris, mattis quis lacus
								id, pellentesque lobortis odio.
							</CardText>
							<CardActions>
								<FlatButton label="Mehr" />
							</CardActions>
						</Card>
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
)(News);

