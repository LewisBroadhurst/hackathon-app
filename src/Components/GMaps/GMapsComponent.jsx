import React from 'react';
import { GoogleMap, useLoadScript, MarkerF } from '@react-google-maps/api';
import { useMemo } from 'react';
import usePlacesAutocomplete, { getGeocode, getLatLng } from 'use-places-autocomplete';
import { useState } from 'react';

const GMapsComponent = () => {

    const [selected, setSelected] = useState(null);

    const { isLoaded } = useLoadScript({
        googleMapsApiKey: process.env.REACT_APP_GMAPS_API_KEY,
        libraries:['places'],
    });
    const center = useMemo(() => ({lat: 51.517594, lng: -0.082972}), []);

    const PlacesAutocomplete = ({setSelected}) => {
        const {
            ready,
            value,
            setValue,
            suggestions: {status, data},
            clearSuggestions
        } = usePlacesAutocomplete();

        return ;
    }

  return (
    <>
        {
            isLoaded ? 
            <GoogleMap zoom={15} center={center} mapContainerClassName={'GoogleMap'} >
                <MarkerF title={'!'} name={'Lewis'} key={`GMap Marker ${center}`} position={center} />
            </GoogleMap>
            :
            <progress className="progress w-56"></progress>
        }
    </>
  )
}

export default GMapsComponent;