import React from 'react';

const Footer = () => {
    const currentYear = new Date().getFullYear(); // Get the current year

    return (
        <footer className="container text-center fs-6 py-2">
            <p className='m-0'>© Copyright {currentYear} Bryan Portfolio.</p>
        </footer>
    );
};

export default Footer;