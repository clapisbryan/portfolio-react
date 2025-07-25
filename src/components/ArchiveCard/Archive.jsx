import React, { useEffect, useState } from 'react';
import FeatherIcon from '../FeatherIcon/FeatherIcon';
import HtmlImg from '../../assets/images/tools/html.png';
import CssImg from '../../assets/images/tools/css3.png';
import BootStrapImg from '../../assets/images/tools/bootstrap.png';
import ReacJsImg from '../../assets/images/tools/reactjs.png';
import JavascriptImg from '../../assets/images/tools/javascript.png';
import LaravelImg from '../../assets/images/tools/Laravel.png';

const Archive = (props) => {

	const { link = "#", title = "title", content = "content", tools = {}, year = "", children } = props;

	const [isHtml, setIsHtml] = useState(false);
	const [isCSS, setIsCSS] = useState(false);
	const [isBootstrap, setIsBootstrap] = useState(false);
	const [isReactJS, setIsReactJS] = useState(false);
	const [isJavascript, setIsJavascript] = useState(false);
	const [isLaravel, setIsLaravel] = useState(false);
console.log("props", props);

	useEffect(() => {
		if (tools.html == true) {
			setIsHtml(true);
		}
		if (tools.css == true) {
			setIsCSS(true);
		}
		if (tools.bootstrap == true) {
			setIsBootstrap(true);
		}
		if (tools.laravel == true) {
			setIsLaravel(true);
		}
		if (tools.reactjs == true) {
			setIsReactJS(true);
		}

		if (tools.javascript == true) {
			setIsJavascript(true);
		}
	}, [])

	return (
		<>
			<a href={link} target='_blank'>
				<div className="card py-4 h-100">
					<div className="card-body d-flex flex-column justify-content-center align-items-start">
						<div className="d-flex flex-row justify-content-between align-items-center mb-3 w-100">
							<FeatherIcon icon="folder" className={"svg"} />
							<FeatherIcon icon="arrow-up-right" className={"icon"} />
						</div>
						<div className='d-flex flex-column flex-md-row w-100 align-items-center justify-content-between'>
							<span className='featured-proj fw-bold'>Featured Project</span>
							<span style={{ fontSize: '14px' }}>{year}</span>
						</div>
						<h3 className="mb-3 fw-bold">{title}</h3>
						<p className='m-0'>{content.substring(0, 120)}...</p>
						<ul className="use-tools">
							{isHtml &&
								<li className="tool-item">
									<img src={HtmlImg} alt="" className="img-fluid" />
								</li>
							}
							{isCSS &&
								<li className="tool-item">
									<img src={CssImg} alt="" className="img-fluid" />
								</li>
							}
							{isBootstrap &&
								<li className="tool-item">
									<img
										src={BootStrapImg}
										alt=""
										className="img-fluid"
									/>
								</li>
							}
							{isLaravel &&
								<li className="tool-item">
									<img
										src={LaravelImg}
										alt=""
										className="img-fluid"
									/>
								</li>
							}
							{isReactJS &&
								<li className="tool-item">
									<img
										src={ReacJsImg}
										alt=""
										className="img-fluid"
									/>
								</li>
							}
							{isJavascript &&
								<li className="tool-item">
									<img
										src={JavascriptImg}
										alt=""
										className="img-fluid"
									/>
								</li>
							}
						</ul>
					</div>
				</div>
			</a>
		</>
	)
}

export default Archive
