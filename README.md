


# Welcome to Air Bon Voyage
*by Sylvia Onwuana*
#### [AirBonVoyage](https://air-bon-voyage.herokuapp.com) is an [AirBnB](https://www.airbnb.com/) clone, that allows users to book hotels and lodges around the world featured on BTS' Bon Voyage mini series.
#

### Table of Contents
* [MVP Feature List](https://github.com/sonwuana1/air-bon-voyage/wiki/MVP-Feature-List)
* [Database Schema and Backend Routes](https://github.com/sonwuana1/air-bon-voyage/wiki/Database-Schema-and-Backend-Routes)
* [Wireframes and Front End Routes](https://github.com/sonwuana1/air-bon-voyage/wiki/Wireframes-and-Front-End-Routes)
#


### Login Page:
![Screen Shot 2021-07-22 at 4 34 46 PM](https://user-images.githubusercontent.com/69067446/126722095-f82dcb90-5af7-4ad9-89e6-dd3dc9659a2b.png)
#

### Built With
The project was built utilizing the following technologies:
* [React](https://reactjs.org/)
* [Bootstrap](https://getbootstrap.com)
* [Google Maps API](https://developers.google.com/maps/documentation)
* [Express](https://expressjs.com/)
#

### Getting Started

To get a copy of this project up and running locally, please follow these simple steps.

### Installation


1. Clone the repo
   ```sh
   git clone https://github.com/sonwuana1/air-bon-voyage.git
   ```
2. Install NPM packages
   ```sh
   npm install
   ```
3. In the backend folder, create a .env file that will be used to define your environment variables. Populate the .env file based on the example below:
   ```JS
   PORT=5000
   DB_USERNAME=auth_app
   DB_PASSWORD=«auth_app user password»
   DB_DATABASE=auth_db
   DB_HOST=localhost
   JWT_SECRET=«generate_strong_secret_here»
   JWT_EXPIRES_IN=604800
   ```
5. Get a free Google Maps API Key at [console.cloud.google.com](https://console.cloud.google.com/)
6. Store your API key in your frontend `.env` file
   ```JS
   REACT_APP_BASE_URL=http://localhost:5000
   REACT_APP_MAPS_KEY=GOOGLEAPIKEY
   ```
#

### Usage

Use this space to show useful examples of how a project can be used. Additional screenshots, code examples and demos work well in this space. You may also link to more resources.

_For more examples, please refer to the [Documentation](https://example.com)_

#### Splash Page:
![Screen Shot 2021-07-22 at 4 35 37 PM](https://user-images.githubusercontent.com/69067446/126722186-c44d4b8a-b5f9-4df6-9bfb-bb86265819d3.png)

#### Google Maps:
#### AirBonVoyage utilizes the [Google Maps Api](https://developers.google.com/maps) so that users can see their lodgings on a map and the surrounding area.
![Screen Shot 2021-07-22 at 4 36 46 PM](https://user-images.githubusercontent.com/69067446/126722244-58f89aed-419b-497b-b4ed-bb6e28614585.png)
#

