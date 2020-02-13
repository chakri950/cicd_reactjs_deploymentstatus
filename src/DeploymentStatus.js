import React, { Component } from "react";
//import react from "react";
//import reactDOM from "react-dom";
//import { Container, Row, Col } from "reactstrap";
import axios from "axios";

class DeploymentStatus extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	
	componentDidMount() {
		
		//function which is called the first time the component loads
		//this.invokeServiceAPI();
		
		// runs every 5 seconds.
		this.intervalID = setInterval(this.invokeServiceAPI.bind(this), 1000);
	}
	
	componentWillUnmount() {
	  clearInterval(this.intervalID);
	}

	//Function to get the API response from mock (or) API Call
	invokeServiceAPI() {
		axios.get("mocks/deployment_version.json").then(response => {
			this.setState({ deploymentstatus: response });
	
		});
	}
	render() {
		if (!this.state.deploymentstatus)
			return (
				<p>You should soon be able to see the code status.... Relax</p>
			);
		return (
			
			<div>
				<div
							style={{
								display: "grid",
								gridTemplateColumns: "repeat(3, 1fr)",
								gridGap: 2
							}}
						>
						<div className="leavemargin">
								<span className = "title-text">Staging{" "}</span>
						</div>
						<div className="leavemargin ">
								<span className = "title-text">Production{" "}</span>
						</div>
						<div className="leavemargin ">
								<span className = "title-text">Action</span>
						</div>
				</div>
				
				{this.state.deploymentstatus.data.map(displayDeplStatus => (
					<div>
						<div
							style={{
								display: "grid",
								gridTemplateColumns: "repeat(3, 1fr)",
								gridGap: 2
							}}
						>
							<div className="leavemargin">								
								<div
									className={
										"leavemargin" +
										(displayDeplStatus.staging.version ===
										displayDeplStatus.production.version
											? " green-font"
											: " red-font")
									}
								>
									{displayDeplStatus.staging.version}
								</div>
							</div>
							
							<div className="leavemargin ">
								<div
									className={
										"leavemargin" +
										(displayDeplStatus.staging.version ===
										displayDeplStatus.production.version
											? " green-font"
											: " red-font")
									}
								>
									{displayDeplStatus.production.version}
								</div>
							</div>
							
							<div className="leavemargin ">
								<div className={"leavemargin"}>
									<button disabled={(displayDeplStatus.staging.version ===
										displayDeplStatus.production.version ? true : false)} >
										Deploy To Production
									</button>
								</div>
							</div>
							
						</div>
					</div>
				))}
			</div>
		);
	}
}

export default DeploymentStatus;
