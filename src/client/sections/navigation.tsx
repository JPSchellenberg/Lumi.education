import * as React 			from 'react';
import { connect } 			from 'react-redux'; 

import { State } 			from '../state';


interface IStateProps {}
interface IDispatchProps {}

interface IProps extends IStateProps, IDispatchProps {}

interface IState {}

export class Navigation extends React.Component<IProps, IState> {
	constructor(props: IProps) {
		super(props);
	}
	
	render() {

		return (
			    <nav id="mainNav" className="navbar navbar-default navbar-fixed-top">
        <div className="container">
            <div className="navbar-header">
                <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                    <span className="sr-only">Toggle navigation</span> Menu <i className="fa fa-bars"></i>
                </button>
                <a className="navbar-brand page-scroll" href="#page-top">
                    Lumi
                </a>
            </div>
            <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                <ul className="nav navbar-nav navbar-right">
                    <li>
                        <a className="page-scroll" href="/#Lumi">Lumi</a>
                    </li>
                    <li>
                        <a className="page-scroll" href="/#Features">Features</a>
                    </li>
                    <li>
                        <a className="page-scroll" href="/#FAQ">FAQ</a>
                    </li>
                    <li>
                        <a className="page-scroll" href="/#contact">Kontakt</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
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
)(Navigation);

