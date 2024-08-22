import React, { useEffect } from 'react';
import feather from 'feather-icons';

const FeatherIcon = ({ icon, className }) => {
  useEffect(() => {
    feather.replace();
  }, []);

  return (
    <i data-feather={icon} className={className}></i> 
  );
}
 
export default FeatherIcon;