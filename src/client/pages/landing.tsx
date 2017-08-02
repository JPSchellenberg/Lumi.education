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
            <div>
    <header>
        <div className="container">
            <div className="row">
                <div className="col-sm-10 col-sm-offset-1">
                    <a className="page-scroll" href="#intro">
                        <img src="img/intro.png" className="img-responsive" alt=""></img>
                    </a>
                </div>
            </div>
        </div>
    </header>
     <section id="intro" className="about">
       <div className="container">
            <div className="row">
                <div className="col-sm-9">
                    <div className="header-content">
                        <div className="header-content-inner">
                            <h1>Das Smartphone als digitale Lernstation - mit Lumi überall einsetzbar.</h1>
                            <a href="#Lumi" className="btn btn-outline btn-xl page-scroll">Lumi</a>
                        </div>
                    </div>
                </div>
                <div className="col-sm-3">
                    <div className="device-container">
                        <div className="device-mockup iphone6_plus portrait black">
                            <div className="device">
                                <div className="screen">
                                    <img src="img/lumi.gif" className="img-responsive" alt=""></img>
                                </div>
                                <div className="button">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section> 

    <section id="Lumi" className="features">
        <div className="container">
            <div className="row">
                <div className="col-lg-12 text-center">
                    <div className="section-heading">
                        <h2>Lumi</h2>
                            <p className="text-muted">
                            Lumi ist eine Lernplattform, die auf einem Router (LumiBox) läuft und den unterrichtsbezogenen Einsatz von Smartphones ohne Internetverbindung ermöglicht. Die LumiBox öffnet ein lokales Funk-Netzwerk (WLAN) und stellt Smartphone-optimierte Software und Werkzeuge zum Teilen und Bearbeiten von Inhalten zur Verfügung. Lumi entstand durch den Wunsch in Schulen mit schlechter IT-Infrastruktur digitale Medien einzusetzen und die große Abdeckung von Smartphones in der Schülerschaft zu nutzen.

                            </p>
                        <hr /> 
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-8">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-md-6">
                                <div className="feature-item">
                                    <i className="icon-rocket text-primary"></i>
                                    <h3>Schnell</h3>
                                    <p className="text-muted">Mit der LumiBox hat die Lehrkraft eine Rückmeldung über den Lernfortschritt seiner Schüler
                                        in Echtzeit.</p>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="feature-item">
                                    <i className="icon-globe text-primary"></i>
                                    <h3>Unabhängig</h3>
                                    <p className="text-muted">Die LumiBox unabhängig vom Internet oder der IT-Infrastruktur der Schule einsetzbar.</p>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6">
                                <div className="feature-item">
                                    <i className="icon-lock text-primary"></i>
                                    <h3>Sicher</h3>
                                    <p className="text-muted">Datenschutz ist ein wichtiger Punkt. Lumi funktioniert vollkommen ohne Internet. Es werden keine Daten ins Internet geladen.</p>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="feature-item">
                                    <i className="icon-ban text-primary"></i>
                                    <h3>Facebook & WhatsApp</h3>
                                    <p className="text-muted">Soziale Dienste wie Facebook und WhatsApp können während des Unterrichts nicht benutzt
                                        werden.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <img src="img/box.png" className="img-responsive" alt=""></img>
                </div>
            </div>
        </div>
    </section>

        <section id="Features" className="features">
        <div className="container">
            <div className="row">
                <div className="col-lg-12 text-center">
                    <div className="section-heading">
                        <h2>Features</h2>
                        <p className="text-muted">Lumi ist eine Software, die als Webseite geladen wird und das Smartphone oder den Laptop in eine
                            digitale Lernstation verwandelt.</p>
                        <hr />
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-4">
                    <div className="device-container">
                        <div className="device-mockup iphone6_plus portrait black">
                            <div className="device">
                                <div className="screen">
                                    <img src="img/lumi.gif" className="img-responsive" alt=""></img>
                                    </div>
                                <div className="button">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-8">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-md-6">
                                <div className="feature-item">
                                    <i className="icon-screen-smartphone text-primary"></i>
                                    <h3>Smartphone optimiert</h3>
                                    <p className="text-muted">Lumi ist für Smartphones optimiert. Jedes Smartphone wird zu einer digitalen Lernstation.</p>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="feature-item">
                                    <i className="icon-check text-primary"></i>
                                    <h3>Aufgabentypen</h3>
                                    <p className="text-muted">Lumi stellt diverse Aufgabentypen bereit. Von Multiple-Choice bis Freitext ist alles
                                        möglich.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6">
                                <div className="feature-item">
                                    <i className="icon-camera text-primary"></i>
                                    <h3>Fotos von Lernprodukten</h3>
                                    <p className="text-muted">Lumi erlaubt es Fotos von Arbeitsblättern zu machen und diese zu speichern.</p>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="feature-item">
                                    <i className="icon-control-play text-primary"></i>
                                    <h3>Alle digitalen Medien</h3>
                                    <p className="text-muted">Über Lumi können alle digitalen Medien wie Video, Audio oder Texte angesehen werden.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
        <section id="FAQ" className="cta">
        <div className="cta-content">
            <div className="container">
                <h2>FAQ</h2>
                <div className="panel-group" id="accordion" role="tablist" aria-multiselectable="true">
                    <div className="panel panel-default">
                        <div className="panel-heading" role="tab" id="headingOne">
                            <h4 className="panel-title">
                                <a role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
          Wie kann ich Lumi unterstützen?
        </a>
                            </h4>
                        </div>
                        <div id="collapseOne" className="panel-collapse collapse in" role="tabpanel" aria-labelledby="headingOne">
                            <div className="panel-body">
                                Du kannst Lumi auf unterschiedliche Weise unterstützen. Wenn du Lumi mit deiner Arbeitskraft unterstützen möchtest dann schreib
                                eine eMail an <a href="mailto:c@Lumi.education">c@Lumi.education</a>                                und stell dich kurz vor. Du unterstützt Lumi aber auch schon wenn du an Schulen von Lumi
                                berichtest, den <a href="#contact">Newsletter</a> abonnierst und uns in den <a href="#contact">sozialen Medien</a>                                folgst.
                            </div>
                        </div>
                    </div>
                    <div className="panel panel-default">
                        <div className="panel-heading" role="tab" id="headingTwo">
                            <h4 className="panel-title">
                                <a className="collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseTwo" aria-expanded="false"
                                    aria-controls="collapseTwo">
          Wo kann ich eine LumiBox bekommen?
        </a>
                            </h4>
                        </div>
                        <div id="collapseTwo" className="panel-collapse collapse" role="tabpanel" aria-labelledby="headingTwo">
                            <div className="panel-body">
                                Lumi und die LumiBox befinden sich noch in der Erprobungsphase. Wenn du informiert werden möchtest sobald Lumi zur Verfügung steht, dann melde dich bei dem <a href="#contact">Newsletter</a> an.
                            </div>
                        </div>
                    </div>         
                </div> 
            </div>
        </div>
        <div className="overlay"></div>
    </section>
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

