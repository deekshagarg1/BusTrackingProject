import React, { useState, useEffect, useRef } from "react";
import {
  MapPin,
  Navigation,
  Users,
  Clock,
  Server,
} from "lucide-react";
import "leaflet/dist/leaflet.css";
import Features from "./Features";
import Header from "./Header";
import AboutFooter from "./AboutFooter";
const BusTrackingDemo = () => {

    const mapRef = useRef(null);
  const mapInstanceRef = useRef(null);
  const busMarkersRef = useRef([]);
  const [mapLoaded, setMapLoaded] = useState(false);
  const [selectedBus, setSelectedBus] = useState(null);

  const busStops = [
    { id: "stop1", name: "Phoolbagh", location: { lat: 26.2124, lng: 78.1772 } },
    { id: "stop2", name: "DD Nagar", location: { lat: 26.2181, lng: 78.1953 } },
    { id: "stop3", name: "Thatipur", location: { lat: 26.2482, lng: 78.1725 } },
    { id: "stop4", name: "Gole Ka Mandir", location: { lat: 26.2678, lng: 78.1996 } },
    { id: "stop5", name: "University Campus", location: { lat: 26.2316, lng: 78.2084 } },
  ];

  const [buses, setBuses] = useState([
    {
      id: "GW-BUS001",
      route: "City Center - DD Nagar",
      location: { lat: 26.2124, lng: 78.1772 },
      status: "active",
      passengers: 32,
      nextStop: "DD Nagar",
      eta: "5 min",
    },
    {
      id: "GW-BUS002",
      route: "University - Thatipur",
      location: { lat: 26.2316, lng: 78.2084 },
      status: "active",
      passengers: 20,
      nextStop: "Thatipur",
      eta: "6 min",
    },
    {
      id: "GW-BUS003",
      route: "Gole Ka Mandir - City Center",
      location: { lat: 26.2678, lng: 78.1996 },
      status: "delayed",
      passengers: 12,
      nextStop: "Phoolbagh",
      eta: "10 min",
    },
  ]);

  const getStatusColor = (status) => {
    switch (status) {
      case "active": return "#10b981";
      case "delayed": return "#f59e0b";
      case "maintenance": return "#ef4444";
      default: return "#6b7280";
    }
  };

  const focusOnBus = (busId) => {
    const bus = buses.find((b) => b.id === busId);
    if (bus && mapInstanceRef.current) {
      mapInstanceRef.current.setView([bus.location.lat, bus.location.lng], 15);
      setSelectedBus(busId);

      const markerData = busMarkersRef.current.find((m) => m.id === busId);
      if (markerData) {
        markerData.marker.openPopup();
      }
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined" && mapRef.current && !mapLoaded) {
      import("leaflet").then((L) => {
        const map = L.map(mapRef.current).setView([26.2183, 78.1828], 13);
        L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
          attribution: "© OpenStreetMap contributors",
        }).addTo(map);

        busStops.forEach((stop) => {
          const stopIcon = L.divIcon({
            className: "bus-stop-marker",
            html: '<div style="background: #2563eb; width: 12px; height: 12px; border-radius: 50%; border: 2px solid white;"></div>',
            iconSize: [16, 16],
            iconAnchor: [8, 8],
          });

          L.marker([stop.location.lat, stop.location.lng], { icon: stopIcon })
            .addTo(map)
            .bindPopup(`<strong>${stop.name}</strong><br/>Bus Stop`);
        });

        buses.forEach((bus) => {
          const busIcon = L.divIcon({
            className: "bus-marker",
            html: `<div style="background: ${getStatusColor(bus.status)}; width: 20px; height: 20px; border-radius: 4px; border: 2px solid white;"></div>`,
            iconSize: [24, 24],
            iconAnchor: [12, 12],
          });

          const marker = L.marker([bus.location.lat, bus.location.lng], { icon: busIcon })
            .addTo(map)
            .bindPopup(`<strong>${bus.id}</strong><br/>${bus.route}<br/>Passengers: ${bus.passengers}<br/>Next: ${bus.nextStop} (${bus.eta})`);

          busMarkersRef.current.push({ id: bus.id, marker });
        });

        mapInstanceRef.current = map;
        setMapLoaded(true);
      });
    }
  }, [mapLoaded]);

  useEffect(() => {
    if (!mapLoaded || !mapInstanceRef.current) return;

    const interval = setInterval(() => {
      setBuses((prevBuses) =>
        prevBuses.map((bus) => {
          const newLat = bus.location.lat + (Math.random() - 0.5) * 0.0015;
          const newLng = bus.location.lng + (Math.random() - 0.5) * 0.0015;
          return { ...bus, location: { lat: newLat, lng: newLng } };
        })
      );
    }, 4000);

    return () => clearInterval(interval);
  }, [mapLoaded]);

  useEffect(() => {
    if (!mapLoaded || !mapInstanceRef.current) return;

    buses.forEach((bus) => {
      const markerData = busMarkersRef.current.find((m) => m.id === bus.id);
      if (markerData) {
        markerData.marker.setLatLng([bus.location.lat, bus.location.lng]);
      }
    });
  }, [buses, mapLoaded]);


  return (
  <>
  <Header/>
     <div style={{ fontFamily: "Arial, sans-serif", padding: "20px" }}>


      <h1 style={{ textAlign: "center", color: "#2563eb", display: "flex", alignItems: "center", justifyContent: "center", gap: "10px" }}>
        <Navigation size={28} /> Gwalior Bus Tracking System
      </h1>

      <div
        ref={mapRef}
        style={{ height: "500px", width: "100%", borderRadius: "8px", marginTop: "20px" }}
      />

      <h2 style={{ marginTop: "30px", color: "#111827", display: "flex", alignItems: "center", gap: "8px" }}>
        <Server size={22} /> Fleet Overview
      </h2>

      <ul style={{ listStyle: "none", padding: 0 }}>
        {buses.map((bus) => (
          <li
            key={bus.id}
            onClick={() => focusOnBus(bus.id)}
            style={{
              padding: "10px",
              margin: "10px 0",
              border: "1px solid #e5e7eb",
              borderRadius: "6px",
              background: selectedBus === bus.id ? "#e0f2fe" : "#ffffff",
              cursor: "pointer",
              boxShadow: "0 1px 3px rgba(0, 0, 0, 0.1)",
            }}
          >
            <strong>{bus.id}</strong> - {bus.route}
            <br />
            <div style={{ display: "flex", gap: "16px", marginTop: "5px", alignItems: "center", flexWrap: "wrap" }}>
              <span style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                <Users size={16} color="#2563eb" /> {bus.passengers} Passengers
              </span>
              <span style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                <MapPin size={16} color="#16a34a" /> Next: {bus.nextStop}
              </span>
              <span style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                <Clock size={16} color="#f59e0b" /> ETA: {bus.eta}
              </span>
            </div>
          </li>
        ))}
      </ul>
      <Features/>
    </div>
    <AboutFooter/>
  </>
  )
}

export default BusTrackingDemo