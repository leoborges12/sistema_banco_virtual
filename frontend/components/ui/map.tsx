"use client";

import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

// Import marker images so Next.js/Webpack can resolve them
import markerIcon2x from 'leaflet/dist/images/marker-icon-2x.png';
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';

// Ensure default icon images work in Next.js
L.Icon.Default.mergeOptions({
  iconRetinaUrl: markerIcon2x as unknown as string,
  iconUrl: markerIcon as unknown as string,
  shadowUrl: markerShadow as unknown as string,
});

type UnitMarker = {
  id: string;
  name: string;
  lat: number;
  lng: number;
  info?: string;
};
const DEFAULT_ITAQUI_COORDS: [number, number] = [-29.1338, -56.5181];
const DEFAULT_RS_COORDS: [number, number] = [-30.0346, -51.2177];

export default function Map({ markers, center, zoom, height }: { markers?: UnitMarker[]; center?: [number, number]; zoom?: number; height?: string }) {
  const mapCenter = center ?? DEFAULT_ITAQUI_COORDS;
  const mapZoom = zoom ?? 13;
  const mapHeight = height ?? '520px';

  const defaultMarkers: UnitMarker[] = markers ?? [
    { id: 'esf-1', name: 'ESF Centro', lat: -29.1330, lng: -56.5180, info: 'Unidade de saúde - ESF Centro' },
    { id: 'esf-2', name: 'ESF Vila', lat: -29.1295, lng: -56.5250, info: 'Unidade de saúde - ESF Vila' },
    { id: 'farmacia-1', name: 'Farmácia Municipal', lat: -29.1375, lng: -56.5150, info: 'Ponto de retirada de medicamentos' },
  ];

  return (
    <div className="w-full">
      <div className="w-full rounded-md overflow-hidden border" style={{ height: mapHeight }}>
        <MapContainer center={mapCenter} zoom={mapZoom} style={{ height: '100%', width: '100%' }}>
          <TileLayer attribution='&copy; OpenStreetMap contributors' url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
          {defaultMarkers.map((m) => (
            <Marker key={m.id} position={[m.lat, m.lng]}>
              <Popup>
                <strong>{m.name}</strong>
                <div className="text-sm">{m.info}</div>
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>
    </div>
  );
}
