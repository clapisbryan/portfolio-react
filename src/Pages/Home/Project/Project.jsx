import React from 'react'
import Archive from '../../../components/ArchiveCard/Archive'
import FeatherIcon from '../../../components/FeatherIcon/FeatherIcon'

const Project = () => {

	const projectArrObj = [{
		url: "https://vacaybucks.com/",
		title: "Vacay Bucks",
		content: "Vacay Bucks is a subscription-based discount platform, originally developed exclusively for our sister site, Vacay Poker Club (a non-gambling social poker platform launching in April 2024). Due to popular demand, it is now open to everyone. Members enjoy exclusive discounts on hotels, car rentals, restaurants, movie tickets, theme parks and much more. Savings easily surpass the cost of membership.",
		tools: {
			html: true,
			css: true,
			bootstrap: true,
			reactjs: true,
			javascript: true
		}
	}, {
		url: "https://vacaypoker.com/",
		title: "Vacay Poker Club",
		content: "Coming Soon Page",
		tools: {
			html: true,
			css: true,
			bootstrap: true,
			reactjs: false,
			javascript: true
		}
	}
		, {
		url: "https://user.oleplatform.com/dashboard",
		title: "Ole Platform User",
		content: `SEND and RECEIVE instantly Access your Ole Platform account easily with safe and secure Ole Platform app. Send and receieve payments from add to anywhere in the world.`,
		tools: {
			html: true,
			css: true,
			bootstrap: true,
			reactjs: true,
			javascript: true
		}
	}
		, {
		url: "https://admin.oleplatform.com/dashboard",
		title: "Ole Platform Admin",
		content: "Manage and oversee transactions, user accounts, and platform operations on Ole Platform to ensure seamless and secure payment experiences globally.",
		tools: {
			html: true,
			css: true,
			bootstrap: true,
			reactjs: true,
			javascript: true
		}
	}
	]

	const indices = projectArrObj.map((_, index) => index);

	// Sort indices in reverse order
	indices.sort((a, b) => b - a);

	// Map sorted indices to get sorted projects
	const sortedProjects = indices.map(index => projectArrObj[index]);

	return (
		<div>
			<section id="projects" className="container py-5">
				<h2 className="text-center text-light mb-3 mb-md-5">Projects</h2>
				<div className="row">
					{sortedProjects.map((project, index) => {
						return (
							<div className="col-12 col-md-6 col-lg-4 mb-4" key={index}>
								<Archive link={project.url} title={project.title} content={project.content} tools={project.tools} />
							</div>
						)
					})}
				</div>
			</section>
		</div>
	)
}

export default Project
