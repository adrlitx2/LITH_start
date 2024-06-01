// src/utils/location.js
import { useEffect, useState } from 'react';

const useLocation = () => {
    const [location, setLocation] = useState({ city: '', zipcode: '' });

    useEffect(() => {
        const fetchLocation = async (lat, lon) => {
            try {
                const response = await fetch(
                    `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lon}&key=AIzaSyBoxQvfZGiwGvIAfkrhhU8dGIY4DUtcXOU`
                );
                const data = await response.json();
                const addressComponents = data.results[0].address_components;

                const city = addressComponents.find(component =>
                    component.types.includes('locality')
                )?.long_name;

                const zipcode = addressComponents.find(component =>
                    component.types.includes('postal_code')
                )?.long_name;

                setLocation({ city, zipcode });
            } catch (error) {
                console.error('Error fetching location:', error);
            }
        };

        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(position => {
                const { latitude, longitude } = position.coords;
                fetchLocation(latitude, longitude);
            });
        }
    }, []);

    return location;
};

export default useLocation;
