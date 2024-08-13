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
  const svgid = params.get('svgid'); // Get the value of 'svgfilenumber'

  return { 
    urllat: urllat ? parseFloat(urllat) : null, 
    urllng: urllng ? parseFloat(urllng) : null,
    urlhead: urlhead ? parseFloat(urlhead) : null,
    svgid: svgid ? svgid : null 
  };
}

// Get the parameters
let { urllat, urllng, urlhead, svgid } = getUrlParams();

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
    }
  );

  const PrettyGoodIcon = document.createElement("img");
    
  // Check if the svgid is a single digit, if so, prepend a zero
  if (svgid && svgid.length === 1) {
    svgid = '0' + svgid;
  }

  if (svgid) {
    PrettyGoodIcon.src = `https://data.aaap.ai/ooh/prettygood_svg_info_cards/ooh_${svgid}.svg`;
    console.log(PrettyGoodIcon.src); // Outputs: https://data.aaap.ai/ooh/prettygood_svg_info_cards/ooh_722.svg
  } else {
    PrettyGoodIcon.src = "https://res.cloudinary.com/frontly/image/upload/v1723472357/5_kqjcp6.svg";
  }
  
 
  // Set up the markers on the map
  const pgMarker = new google.maps.Marker({
    position: { 
      lat: urllat ?? defaultLat, 
      lng: urllng ?? defaultLng 
    },
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