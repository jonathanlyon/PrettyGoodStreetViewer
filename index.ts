/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */

let panorama: google.maps.StreetViewPanorama;

// Function to get URL parameters
function getUrlParams() {
  const params = new URLSearchParams(window.location.search);
  const urllat = params.get('urllat');
  const urllng = params.get('urllng');
  const urlhead = params.get('urlhead');

  return { 
    urllat: urllat ? parseFloat(urllat) : null, 
    urllng: urllng ? parseFloat(urllng) : null,
    urlhead: urlhead ? parseFloat(urlhead) : null     
  };
}

// Get the parameters
let { urllat, urllng, urlhead } = getUrlParams();

// Default coordinates if URL parameters are not provided
// urllat=-36.8645111&urllng=174.7459659 

const defaultLat = -36.8645111;
const defaultLng = 174.7459659;
const defaulthead = -30;

// Example usage: Print the coordinates
//console.log(`Latitude: ${urllat ?? defaultLat}, Longitude: ${urllng ?? defaultLng}, Heading: ${urlhead ?? defaulthead}`);
console.log(
  `Latitude: ${urllat ?? `Latitude Default: ${defaultLat}`}, ` +
  `Longitude: ${urllng ?? `Longitude Default: ${defaultLng}`}, ` +
  `Heading: ${urlhead ?? `Heading Default: ${defaulthead}`}`
);

function initialize() {
  panorama = new google.maps.StreetViewPanorama(
    document.getElementById("street-view") as HTMLElement,
    {
      position: { 
        lat: urllat ?? defaultLat, 
        lng: urllng ?? defaultLng 
      },
      pov: {
        heading: urlhead ?? defaulthead,
        pitch: 0 
       },
      zoom: 1,
    }
  );

  const PrettyGoodIcon = document.createElement("img");
  PrettyGoodIcon.src = "https://res.cloudinary.com/frontly/image/upload/v1723375572/exclude_x7jewx.svg";


  // Set up the markers on the map
  const pgMarker = new google.maps.Marker({
    position: { lat: -36.8645111, lng: 174.7459659 },
    map: panorama,
    title: "PrettyGood",
    icon: PrettyGoodIcon.src,
  });


}



declare global {
  interface Window {
    initialize: () => void;
  }
}
window.initialize = initialize;
export {};