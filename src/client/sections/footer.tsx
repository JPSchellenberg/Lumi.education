import * as React 			from 'react';
import { connect } 			from 'react-redux'; 

import { State } 			from '../state';


interface IStateProps {}
interface IDispatchProps {}

interface IProps extends IStateProps, IDispatchProps {}

interface IState {}

export class Footer extends React.Component<IProps, IState> {
	constructor(props: IProps) {
		super(props);
	}
	
	render() {

		return (
    <footer>
        <div className="container">
            <p>&copy; 2017 Lumi. All Rights Reserved.</p>
            <ul className="list-inline">
                <li>
                    <a href="#">Impressum</a>
                </li>
            </ul>
        </div>
    </footer>
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
)(Footer);

