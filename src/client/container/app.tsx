import * as React 			from 'react';
import { connect } 			from 'react-redux'; 

import { State } 			from '../state';

import Navigation 	from '../sections/navigation';
import Contact 			from '../sections/contact';
import Footer 			from '../sections/footer';

interface IStateProps {}
interface IDispatchProps {}

interface IProps extends IStateProps, IDispatchProps {}

interface IState {}

export class Root extends React.Component<IProps, IState> {
	constructor(props: IProps) {
		super(props);
	}
	
	render() {

		return (
			<div id="app">	
				<Navigation />
				{ this.props.children }
				<Contact />
				<Footer />
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
)(Root);

