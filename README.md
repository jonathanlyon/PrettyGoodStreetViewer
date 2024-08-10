![PrettyGood Logo](https://res.cloudinary.com/frontly/image/upload/v1718355190/PRETTYGOOD_LOGO_ffawhj.png)

## About PrettyGood

PrettyGood is a purpose-driven brand and media agency dedicated to building brands for good. We believe in the power of positive impact and strive to create meaningful change through our work. 

Visit our website: [www.prettygood.nz](https://www.prettygood.nz)

This project is part of our ongoing efforts to create innovative solutions that make a difference.

# PrettyGood Google Street View Panorama with URL Parameters

## Project Overview

This project implements a Google Street View Panorama that can be initialized with specific coordinates and heading using URL parameters. It's built using TypeScript and the Google Maps JavaScript API.

## Features

- Display a Google Street View Panorama on a web page
- Set initial latitude, longitude, and heading via URL parameters
- Fallback to default values if URL parameters are not provided

## Installation

1. Clone this repository:
   ```
   git clone [Your Repository URL]
   ```

2. Navigate to the project directory:
   ```
   cd [Your Project Directory]
   ```

3. Install dependencies (assuming you're using npm):
   ```
   npm install
   ```

4. Set up your Google Maps API key:
   - Obtain an API key from the [Google Cloud Console](https://console.cloud.google.com/)
   - Add your API key to the project (the exact method depends on your setup)

## Usage

1. Start the development server:
   ```
   npm run dev
   ```

2. Open your browser and navigate to `http://localhost:5173/` (or whatever port your dev server uses)

3. To set the initial view, use URL parameters:
   - `urllat`: Latitude (float)
   - `urllng`: Longitude (float)
   - `urlhead`: Heading (float, in degrees)

   Example:
   ```
   http://www.yoursite.com/?urllat=-36.8645111&urllng=174.7459659&urlhead=180
   ```

## Default Values

If URL parameters are not provided, the following default values are used:
- Latitude: -36.8645111
- Longitude: 174.7459659
- Heading: 0

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the Apache 2.0 License - see the LICENSE file for details.

## Acknowledgments

- Google Maps Platform for providing the Street View API
- PrettyGood team for their support and inspiration

## Author

This project was developed by Jonathan Lyon, Co-Founder and Chief Product Officer at PrettyGood.

---

