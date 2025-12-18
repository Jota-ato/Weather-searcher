🌦️ Weather Searcher

A modern, high-performance weather search application built with React 19, TypeScript, and Vite. This application provides real-time weather data for any city worldwide using the OpenWeather API, featuring strict data validation and a responsive UI.

🚀 Features

Real-time Weather Data: Get current temperature, thermal sensation, and daily high/low temperatures.

Geocoding Search: Search for weather data using city names and country codes.

Type-Safe Validation: Implements Zod for schema validation of API responses to ensure application stability and robust error handling.

Modern UI/UX: Styled with Tailwind CSS v4 for a clean, responsive interface.

Visual Feedback: Includes a custom CSS spinner for loading states and error alerts for invalid searches.

🛠️ Tech Stack

Framework: React 19

Build Tool: Vite

Language: TypeScript

Styling: Tailwind CSS v4

Data Validation: Zod

HTTP Client: Axios

📋 Prerequisites

To run this project, you need an API key from OpenWeatherMap. This project uses the Current Weather Data and Geocoding API endpoints.

⚙️ Installation

Clone the repository:

git clone [https://github.com/your-username/weather-searcher.git](https://github.com/your-username/weather-searcher.git)
cd weather-searcher


Install dependencies:

npm install


Configure Environment Variables:
Create a .env file in the root directory and add your API key:

VITE_API_KEY=your_openweather_api_key


Start the development server:

npm run dev


🌐 Deployment Notes (Netlify/Vercel)

When deploying this project to production, keep the following in mind:

Environment Variables: Ensure you add VITE_API_KEY to your hosting provider's environment variables panel. In Vite, variables must start with the VITE_ prefix to be accessible in the client-side code.

Security (HTTPS): All API calls are configured using the https protocol to comply with modern browser security policies (preventing "Mixed Content" errors on SSL-secured domains).

📂 Project Structure

src/hooks/useWeather.ts: Contains the core logic for API calls, state management, and Zod schema validation.

src/components/Form.tsx: A controlled component for user input and search execution.

src/components/WeatherDetail.tsx: Handles the display of processed weather information.

src/components/Spinner/: Contains the loading animation logic and styles.

src/helpers/: Utility functions for data transformation (e.g., Kelvin to Celsius conversion).

Developed with ❤️ by [Your Name/Github Username]