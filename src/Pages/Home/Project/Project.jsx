import React from 'react'
import Archive from '../../../components/ArchiveCard/Archive'
import FeatherIcon from '../../../components/FeatherIcon/FeatherIcon'

const Project = () => {

	const projectArrObj = [{
		url: "https://vacaybucks.com/",
		title: "Vacay Bucks",
		content: "Vacay Bucks is a subscription-based discount platform, originally developed exclusively for our sister site, Vacay Poker Club (a non-gambling social poker platform launching in April 2024). Due to popular demand, it is now open to everyone. Members enjoy exclusive discounts on hotels, car rentals, restaurants, movie tickets, theme parks and much more. Savings easily surpass the cost of membership.",
		year: '2022-2024',
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
		year: '2022-2024',
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
		year: '2022-2024',
		tools: {
			html: true,
			css: true,
			bootstrap: true,
			reactjs: true,
			javascript: true
		}
	},
	{
		url: "https://admin.oleplatform.com/dashboard",
		title: "Ole Platform Admin",
		content: "Manage and oversee transactions, user accounts, and platform operations on Ole Platform to ensure seamless and secure payment experiences globally.",
		year: '2022-2024',
		tools: {
			html: true,
			css: true,
			bootstrap: true,
			reactjs: true,
			javascript: true
		}
	},
	{
		url: "https://isecure.ph/",
		title: "Isecure",
		content: "We are committed to helping build cyber-resilient communities—from individual consumers to business enterprises—through our valued partners. As a leading cybersecurity-focused distributor in the Philippines, we empower businesses with best-in-class security solutions, expert technical support, and a strong partnership ecosystem.",
		year: '2024-2025',
		tools: {
			html: true,
			css: true,
			bootstrap: true,
			reactjs: false,
			laravel: true,
			javascript: false
		}
	},
	{
		url: "https://www.gnip-bms.fyd-07.com/",
		title: "Good Neighbors Admin",
		content: "Good Neighbors exists to make the world a place without hunger where people live together in harmony.",
		year: '2024-2025',
		tools: {
			html: true,
			css: true,
			bootstrap: true,
			reactjs: false,
			laravel: true,
			javascript: false
		}
	},
	{
		url: "https://comvis.fastlogistics.com.ph/",
		title: "Comvis Fast Logistics ",
		content: "With 50 years of experience, FAST stands at the forefront of end-to-end logistics and supply chain management in the Philippines",
		year: '2024-2025',
		tools: {
			html: true,
			css: true,
			bootstrap: true,
			reactjs: false,
			laravel: true,
			javascript: false
		}
	},
	{
		url: "https://portal.lobiengroup.com/",
		title: "Lobien Realty Group Portal",
		content: "Lobien Realty Group, Inc. (LRG) is a full-service real estate consultancy and property investments strategy firm specializing in office and commercial space leasing, capital investments optimization, and property acquisition and sales. ",
		year: '2024-2025',
		tools: {
			html: true,
			css: true,
			bootstrap: true,
			reactjs: false,
			laravel: true,
			javascript: false
		}
	},
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
								<Archive link={project.url} title={project.title} content={project.content} year={project.year} tools={project.tools} />
							</div>
						)
					})}
				</div>
			</section>
		</div>
	)
}

export default Project
