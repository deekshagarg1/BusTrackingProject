// import React from "react";
// import {
//   Database,
//   Server,
//   Globe,
//   Smartphone,
//   MapPin,
//   Users,
//   Clock,
//   LayoutDashboard,
//   Map,
//   TabletSmartphone,
//   Send,
// } from "lucide-react";
// // import "./Features.css";

// const Features = () => {
//   return (
//     <div className="features-section">
//       <div className="tech-stack">
//         <div className="card">
//           <Database size={32} color="#10b981" />
//           <h3>MongoDB</h3>
//           <p>
//             Stores real-time GPS coordinates, route data, and passenger information with geospatial indexing
//           </p>
//         </div>
//         <div className="card">
//           <Server size={32} color="#3b82f6" />
//           <h3>Express.js</h3>
//           <p>
//             RESTful API with WebSocket support for real-time GPS data streaming and map updates
//           </p>
//         </div>
//         <div className="card">
//           <Globe size={32} color="#0ea5e9" />
//           <h3>React</h3>
//           <p>
//             Interactive map interface with Leaflet integration for real-time bus tracking visualization
//           </p>
//         </div>
//         <div className="card">
//           <Smartphone size={32} color="#a855f7" />
//           <h3>Node.js</h3>
//           <p>
//             High-performance backend handling thousands of concurrent GPS updates and map tile requests
//           </p>
//         </div>
//       </div>

//       <div className="features-list">
//         <h2>🚀 Powerful Features for Modern Transit</h2>
//         <div className="feature-grid">
//           <div className="feature">
//             <MapPin size={24} color="#60a5fa" />
//             <div>
//               <h4>Real-time GPS Tracking</h4>
//               <p>Track buses with precision GPS technology on real city streets, updating locations every 3 seconds</p>
//             </div>
//           </div>

//           <div className="feature">
//             <Users size={24} color="#10b981" />
//             <div>
//               <h4>Passenger Management</h4>
//               <p>Monitor passenger counts and capacity in real-time for better service planning and crowd management</p>
//             </div>
//           </div>

//           <div className="feature">
//             <Clock size={24} color="#facc15" />
//             <div>
//               <h4>ETA Predictions</h4>
//               <p>AI-powered arrival time predictions based on real traffic data and historical patterns</p>
//             </div>
//           </div>

//           <div className="feature">
//             <Map size={24} color="#c084fc" />
//             <div>
//               <h4>Interactive Maps</h4>
//               <p>Full-featured maps with zoom, pan, and click-to-track functionality using OpenStreetMap</p>
//             </div>
//           </div>

//           <div className="feature">
//             <LayoutDashboard size={24} color="#ef4444" />
//             <div>
//               <h4>Fleet Management</h4>
//               <p>Comprehensive dashboard for managing entire bus fleet operations with real-time status updates</p>
//             </div>
//           </div>

//           <div className="feature">
//             <TabletSmartphone size={24} color="#818cf8" />
//             <div>
//               <h4>Mobile Responsive</h4>
//               <p>Fully responsive design works perfectly on mobile devices with touch-friendly map controls</p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Features;













import React from "react";
import {
  Database,
  Server,
  Globe,
  Smartphone,
  MapPin,
  Users,
  Clock,
  LayoutDashboard,
  Map,
  TabletSmartphone,
} from "lucide-react";
// import "./Features.css";

const Features = () => {
  return (
    <section className="features-section">
      <div className="tech-stack">
        <div className="card">
          <Database size={48} color="#10b981" />
          <h3>MongoDB</h3>
          <p>
            Stores real-time GPS coordinates, route data, and passenger information with geospatial indexing.
          </p>
        </div>
        <div className="card">
          <Server size={48} color="#3b82f6" />
          <h3>Express.js</h3>
          <p>
            RESTful API with WebSocket support for real-time GPS data streaming and map updates.
          </p>
        </div>
        <div className="card">
          <Globe size={48} color="#0ea5e9" />
          <h3>React</h3>
          <p>
            Interactive map interface with Leaflet integration for real-time bus tracking visualization.
          </p>
        </div>
        <div className="card">
          <Smartphone size={48} color="#a855f7" />
          <h3>Node.js</h3>
          <p>
            High-performance backend handling thousands of concurrent GPS updates and map tile requests.
          </p>
        </div>
      </div>

      <div className="features-list">
        <h2>🚀 Powerful Features for Modern Transit</h2>
        <div className="feature-grid">
          <div className="feature">
            <MapPin size={36} color="#3b82f6" />
            <div>
              <h4>Real-time GPS Tracking</h4>
              <p>
                Track buses with precision GPS technology on real city streets, updating locations every 3 seconds.
              </p>
            </div>
          </div>

          <div className="feature">
            <Users size={36} color="#10b981" />
            <div>
              <h4>Passenger Management</h4>
              <p>
                Monitor passenger counts and capacity in real-time for better service planning and crowd management.
              </p>
            </div>
          </div>

          <div className="feature">
            <Clock size={36} color="#facc15" />
            <div>
              <h4>ETA Predictions</h4>
              <p>
                AI-powered arrival time predictions based on real traffic data and historical patterns.
              </p>
            </div>
          </div>

          <div className="feature">
            <Map size={36} color="#c084fc" />
            <div>
              <h4>Interactive Maps</h4>
              <p>
                Full-featured maps with zoom, pan, and click-to-track functionality using OpenStreetMap.
              </p>
            </div>
          </div>

          <div className="feature">
            <LayoutDashboard size={36} color="#ef4444" />
            <div>
              <h4>Fleet Management</h4>
              <p>
                Comprehensive dashboard for managing entire bus fleet operations with real-time status updates.
              </p>
            </div>
          </div>

          <div className="feature">
            <TabletSmartphone size={36} color="#6366f1" />
            <div>
              <h4>Mobile Responsive</h4>
              <p>
                Fully responsive design works perfectly on mobile devices with touch-friendly map controls.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
