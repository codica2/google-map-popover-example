import React, { useState, useEffect, useRef } from "react";
import { compose, withProps } from "recompose";
import { withScriptjs, withGoogleMap, GoogleMap } from "react-google-maps";

import MarkerWithLabel from "react-google-maps/lib/components/addons/MarkerWithLabel";
import MarkerClusterer from "react-google-maps/lib/components/addons/MarkerClusterer";

import Popover from "./Popover";

import clusterMarker from "./assets/location.svg";
import marker from "./assets/marker.svg";

import mapStyles from "./styles.json";
import "./App.scss";

const mapOptions = {
  styles: mapStyles,
  disableDefaultUI: true
};

export const MapContext = React.createContext({});

const App = ({ defaultZoom, defaultCenter }) => {
  const [isDragging, toggleDragging] = useState(false);
  const [zoom, setZoom] = useState(defaultZoom);
  const map = useRef();

  useEffect(() => {
    map.current =
      map.current.context.__SECRET_MAP_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
  }, []);

  return (
    <MapContext.Provider value={{ isDragging, zoom }}>
      <GoogleMap
        ref={map}
        defaultZoom={defaultZoom}
        defaultCenter={defaultCenter}
        options={mapOptions}
        onDragStart={() => toggleDragging(true)}
        onDragEnd={() => toggleDragging(false)}
        onZoomChanged={() => setZoom(map.current.zoom)}
      >
        <MarkerClusterer
          averageCenter
          gridSize={50}
          anchor={[]}
          cssClass="cluster"
          styles={[
            {
              anchorText: [-25, 15],
              textColor: "#fff",
              url: clusterMarker,
              height: 70,
              width: 50,
              textSize: 16
            }
          ]}
        >
          <Popover
            width={400}
            height={350}
            preferredPosition="top-start"
            trigger={
              <MarkerWithLabel
                position={{ lat: 50.00497, lng: 36.23143 }}
                labelAnchor={new window.google.maps.Point(0, 0)}
                icon={marker}
                labelVisible={false}
                animation={window.google.maps.Animation.DROP}
              >
                <div />
              </MarkerWithLabel>
            }
          >
            <div>
              <h3>Freedom Square (Kharkiv)</h3>

              <iframe
                title="square"
                width="100%"
                height="300"
                src="https://www.youtube.com/embed/vsRQSVFENqc"
                frameBorder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />

              <p>
                The main part of the square is bordered to the west by the site
                of a removed statue of Lenin, to the east by Sumska Street, to
                the north by the Hotel Kharkiv and to the south by Shevchenko
                park. It is approximately 690–750 metres (2,260–2,460 feet) long
                and 96–125 metres (315–410 feet) wide. The area of the complete
                square is approximately 12 hectares (30 acres)
              </p>
            </div>
          </Popover>

          <Popover
            width={300}
            height={400}
            preferredPosition="bottom-end"
            trigger={
              <MarkerWithLabel
                position={{ lat: 50.01631, lng: 36.24667 }}
                labelAnchor={new window.google.maps.Point(0, 0)}
                icon={marker}
                labelVisible={false}
                animation={window.google.maps.Animation.DROP}
              >
                <div />
              </MarkerWithLabel>
            }
          >
            <div>
              <h3>Park of Maxim Gorky</h3>

              <img
                src="/img/kharkiv-gorky-park-in.jpg"
                alt="kharkiv-gorky-park-in"
              />

              <p>
                Maxim Gorky Central Park for Culture and Recreation (Ukrainian:
                Парк культури і відпочинку «Максим Горький») is a Kharkov city
                park consisting of over 130 hectares of land. It is bounded in
                the southern corner by Vesnina Street in the east - Sumy Street
                to the north - the so-called elite private settlement
                construction, and in the west - Dynamo street corner and
                Novgorod.
              </p>
            </div>
          </Popover>

          <Popover
            width={350}
            height={500}
            preferredPosition="left"
            trigger={
              <MarkerWithLabel
                position={{ lat: 50.01542, lng: 36.22053 }}
                labelAnchor={new window.google.maps.Point(0, 0)}
                icon={marker}
                labelVisible={false}
                animation={window.google.maps.Animation.DROP}
              >
                <div />
              </MarkerWithLabel>
            }
          >
            <div>
              <h3>Codica</h3>

              <img src="/img/codica.jpg" alt="codica" />

              <p>
                Suspendisse nisl elit, rhoncus eget, elementum ac, condimentum
                eget, diam. Quisque id mi. Integer ante arcu, accumsan a,
                consectetuer eget, posuere ut, mauris.
              </p>

              <p>
                Maecenas malesuada. Praesent turpis. In dui magna, posuere eget,
                vestibulum et, tempor auctor, justo. Pellentesque egestas, neque
                sit amet convallis pulvinar, justo nulla eleifend augue, ac
                auctor orci leo non est. Nam at tortor in tellus interdum
                sagittis. Phasellus blandit leo ut odio. Donec id justo. In ut
                quam vitae odio lacinia tincidunt.
              </p>
            </div>
          </Popover>
        </MarkerClusterer>
      </GoogleMap>
    </MapContext.Provider>
  );
};

const withMapProps = withProps({
  googleMapURL:
    "https://maps.googleapis.com/maps/api/js?key=AIzaSyD-T-s9YkmOCcqXmYB8oQe8MNH9d80vh1k&v=3.exp&libraries=geometry,drawing,places",
  loadingElement: <div style={{ height: `100%` }} />,
  containerElement: <div style={{ height: `100%` }} />,
  mapElement: <div style={{ height: `100%` }} />,
  defaultZoom: 15,
  defaultCenter: { lat: 50.01422, lng: 36.2329 }
});

const enhance = compose(
  withMapProps,
  withScriptjs,
  withGoogleMap
);

export default enhance(App);
