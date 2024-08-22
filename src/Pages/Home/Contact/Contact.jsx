import React, { useState } from 'react'
import Swal from 'sweetalert2';

const Contact = () => {
	const [formValues, setFormValues] = useState({
		name: '',
		email: '',
		comments: '',
	});

	const handleChange = (e) => {
		const { id, value } = e.target;
		setFormValues((prevValues) => ({
			...prevValues,
			[id]: value,
		}));
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log(formValues);

		if (formValues.comments) {
			// Clear form values
			setFormValues({
				name: '',
				email: '',
				comments: '',
			});
			Swal.fire({
				title: "Message successful",
				icon: "success",
				text: "Message was sent."
			});


			return;
		} else {

			// Clear form values
			setFormValues({
				name: '',
				email: '',
				comments: '',
			});
			Swal.fire({
				title: "Message failed",
				icon: "error",
				text: "Please provide message"
			});


			return;
		}
	};
	return (
		<>
			<section id="contact" style={{ backgroundColor: "#101630" }}>
				<div className="container ">
					<h2 className="text-center text-light mb-3 mb-md-5">Contact</h2>
					<div className="row">
						<div className="col-12 col-md-6">
							<h5 className="mb-4">Get in touch</h5>
							<ul className="ps-3">
								<li className="mb-3 text-break">
									<a href="mailto:clapisbryan@gmail.com" className="text-light"
									>clapisbryan@gmail.com</a>
								</li>
								<li className="mb-3 text-break">
									<a href="tel:09632747000" className="text-light">09632747000</a>
								</li>
							</ul>
						</div>
						<div className="col-12 col-md-6 mb-3 mb-md-0">
							<div className="border border-light rounded-3 p-4">
								<form onSubmit={handleSubmit}>
									<div className="my-3">
										<div className="form-floating mb-3">
											<input
												type="text"
												className="form-control bg-transparent text-light"
												id="name"
												placeholder="Name"
												value={formValues.name}
												onChange={handleChange}
											/>
											<label htmlFor="name">Name</label>
										</div>
										<div className="form-floating mb-3">
											<input
												type="email"
												className="form-control bg-transparent text-light"
												id="email"
												placeholder="name@example.com"
												value={formValues.email}
												onChange={handleChange}
											/>
											<label htmlFor="email">Email address</label>
										</div>
										<div className="form-floating">
											<textarea
												className="form-control bg-transparent text-light"
												placeholder="Leave a comment here"
												id="comments"
												rows="8"
												value={formValues.comments}
												onChange={handleChange}
											></textarea>
											<label htmlFor="comments">Message</label>
										</div>
										<button type="submit" className="btn btn-primary mt-4">
											Submit
										</button>
									</div>
								</form>
							</div>
						</div>
					</div>
				</div>
			</section >
		</>
	)
}

export default Contact
