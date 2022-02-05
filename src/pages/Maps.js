import React from 'react';
import { MapContainer, Popup, Marker, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import markerIcon from './marker.svg';

const Maps = ({ data }) => {
  const position = [
    data?.location?.lat ? data?.location?.lat : 37.38605,
    data?.location?.lng ? data?.location?.lng : -122.08385,
  ];

  const pin = L.icon({ iconUrl: markerIcon, iconSize: [28, 38] });
  return (
    <MapContainer
      center={position}
      zoom={9}
      scrollWheelZoom={true}
      className='h-[60vh]'
    >
      <TileLayer
        url='https://api.maptiler.com/maps/osm-standard/256/{z}/{x}/{y}.jpg?key=rvQ9sWMScui9KDdHmQqh'
        attribution='<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>'
      />
      <Marker position={position} icon={pin}>
        <Popup>
          <p>{data?.location?.region}</p>
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default Maps;
