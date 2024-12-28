import React from 'react'
import { useContext, useEffect, useState } from 'react';
import servicecontext from '../context/service/serviceContext';
import ServiceItems from './ServiceItems';

export default function ServiceSlider() {
    const [service, setService] = useState([]);
    const context = useContext(servicecontext);  
  
    useEffect(() => {
      const fetchServices = async () => {
        if (context && context.getService) {
          const services = await context.getService();
          setService(services || []); 
        } else {
          console.error('Context or getService method is undefined');
        }
      };
  
      fetchServices();
    },[]); 
  

    return (
      <div className="relative px-5 py-5">
        {service.length > 0 ? (
          <div className='grid grid-cols-1 lg:grid-cols-2'>
            {service.map((item, index) => (
              <div key={index} className="flex justify-center items-center p-4 overflow-hidden">
                <ServiceItems 
                  name={item.name} 
                  email={item.email} 
                  phno={item.phno} 
                  message={item.message} 
                  image={item.image} 
                />
              </div>
            ))}

          </div>
        ) : (
          <p>No service available.</p> // Message or alternative content when no reviews are present
        )}
      </div>
    );
}
