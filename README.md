# Weatherapp
This project is a web application that allows users to fetch and display current weather information for a specified city. It utilizes HTML, CSS, and JavaScript to create a responsive interface where users can input a city name. Upon submitting the form, JavaScript handles the event to prevent default form submission behavior, fetches weather data asynchronously from the OpenWeatherMap API using the entered city name and a pre-defined API key.

The getWeatherData function manages the API request, ensuring proper error handling in case of network issues or invalid responses. If successful, the retrieved JSON data containing details like city name, temperature, humidity, weather description, and weather ID is processed.

The displayweatherinfo function dynamically generates HTML elements to present this weather data in a clear format within a designated container (card). It calculates temperature in Celsius, adds appropriate weather emojis based on weather conditions, and styles elements accordingly using CSS classes.

Additionally, error handling is implemented through the displayError function, which informs users if they fail to enter a city name or encounter issues fetching data.

Overall, this project demonstrates practical use of asynchronous JavaScript, API integration, DOM manipulation, and error handling to create a user-friendly weather information application on the web.
