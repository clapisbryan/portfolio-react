import React from 'react'

const Contact = () => {
    return (
        <>
            <section id="contact" style={{ backgroundColor: "#101630" }}>
                <div class="container ">
                    <h2 class="text-center text-light mb-3 mb-md-5">Contact</h2>
                    <div class="row">
                        <div class="col-12 col-md-6">
                            <h5 class="mb-4">Get in touch</h5>
                            <ul class="ps-3">
                                <li class="mb-3 text-break">
                                    <a href="mailto:clapisbryan@gmail.com" class="text-light"
                                    >clapisbryan@gmail.com</a>
                                </li>
                                <li class="mb-3 text-break">
                                    <a href="tel:09632747000" class="text-light">09632747000</a>
                                </li>
                            </ul>
                        </div>
                        <div class="col-12 col-md-6 mb-3 mb-md-0">
                            <div class="border border-light rounded-3 p-4">
                                <form action="">
                                    <div class="my-3">
                                        <div class="form-floating mb-3">
                                            <input
                                                type="text"
                                                class="form-control bg-transparent text-light"
                                                id="floatingName"
                                                placeholder="Name"
                                            />
                                            <label for="floatingName">Name</label>
                                        </div>
                                        <div class="form-floating mb-3">
                                            <input
                                                type="email"
                                                class="form-control bg-transparent text-light"
                                                id="floatingInput"
                                                placeholder="name@example.com"
                                            />
                                            <label for="floatingInput">Email address</label>
                                        </div>
                                        <div class="form-floating">
                                            <textarea
                                                class="form-control bg-transparent text-light"
                                                placeholder="Leave a comment here"
                                                id="floatingTextarea2"
                                                rows="8"
                                            ></textarea>
                                            <label for="floatingTextarea2">Comments</label>
                                        </div>
                                        <button type="button" class="btn btn-primary mt-4">
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
