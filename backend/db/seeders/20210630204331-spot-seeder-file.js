'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

      return queryInterface.bulkInsert('Spots', [{
        name: 'Scandic Park Hotel',
        description: 'Sit back in the armchair with a book, or relax in bed in front of the TV. You can use the desk if you need to get some work done.',
        location: 'Scandic Park, Karlavägen 43, 114 31 Stockholm, Sweden',
        price: 142.31,
        num_of_guests: 2,
        num_of_beds: 2,
        num_of_baths: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'First Hotel Fridhemsplan',
        description: 'First Hotel Fridhemsplan is a completely rebuilt and affordable hotel in central Stockholm. All rooms are non-smoking and comes with a quality Jensen beds and LED TVs. The bathrooms are spacious, fresh and attractively designed with tile and marble. WiFi and breakfast is included in all room prices.',
        location: 'Sankt Eriksgatan 20, 112 39 Stockholm, Sweden',
        price: 115.25,
        num_of_guests: 2,
        num_of_beds: 2,
        num_of_baths: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Hale Lamalama Ka 'ili Bed & Breakfast",
        description: "Aloha and welcome to Hale Lamalama Ka`ili (House of Radiant Spirit of Health), dedicated to sustaining and improving the physical and spiritual health of our guests. Relax in our peaceful, calming suites after exploring beautiful beaches, volcanos, and rain-forests of the spectacular Hilo region of Hawai'i's Big Island. The main house has 3 bedrooms. The master contains a king bed, the second a queen bed, and the third bedroom contains 2 full beds. Each bedroom has its own luxurious bathroom. The main living area is open and contains a fully functional kitchen, dining room, and living room. The 40 foot by 10 foot lanai faces the ocean. Our suites have private bathrooms, refrigerator, microwave, cable TV, telephone, WiFi, coffee/tea maker.",
        location: '1335 Kalanianaole Ave, Hilo, Island of Hawaii, HI',
        price: 250,
        num_of_guests: 6,
        num_of_beds: 3,
        num_of_baths: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Shortlets Malta Waterfront Apartment",
        description: "Waterfront Valletta House offers accommodations with free WiFi, air conditioning, an outdoor swimming pool and a garden. This beachfront property offers access to a patio. The holiday home has 4 bedrooms, a flat-screen TV with satellite channels, an equipped kitchen with a dishwasher and a microwave, a washing machine, and 4 bathrooms with a hot tub.",
        location: '1820 Valletta, Malta',
        price: 4500,
        num_of_guests: 5,
        num_of_beds: 4,
        num_of_baths: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Ulysses Aparthotel',
        description: 'From hotel rooms to studios not to mention one and two bedroom apartments, we offer a wide range of accommodation options. Not only is all our accommodation newly refurbished but it’s located right in the heart of Xlendi Bay.',
        location: '2/4 Triq il-Gostra, XLN1404, Xlendi, Gozo – Malta',
        price: 570,
        num_of_guests: 4,
        num_of_beds: 3,
        num_of_baths: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Lake Tekapo The Lakefront Lodge Backpackers',
        description: 'Facing the lake, the Lake Tekapo Backpackers Lodge features a huge common room with lovely natural Macrocarpa wooden dining tables and an open fireplace, which make the crisp winters of Mackenzie country much more pleasant! It also has TV, Wi-Fi, Internet Kiosks, Kitchen, Bathroom & Laundry facilities. The village is a 10-minute stroll, where there are plenty of cafes and restaurants, plus a well-stocked supermarket.',
        location: 'Lake Tekapo, Mackenzie Country, New Zealand',
        price: 300,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Hotel The Designers Seoul Station',
        description: "Conveniently located outside Exit 10 of Sookmyung Women's University Subway Station (Line 4) and 2,450 feet from Seoul Station. The hotel provides 24-hour front desk services and free on-site parking. WiFi is available in all areas of the hotel free of charge. The modern guest rooms are fitted with a flat-screen TV, work desk and seating area with a coffee table. Private bathroom is equipped with a rain shower and comes with bathrobes, slippers and free toiletries.",
        location: '305, Hangang-daero, Yongsan-gu, Yongsan-Gu, 04320 Seoul, South Korea',
        price: 286.25,
        num_of_guests: 2,
        num_of_beds: 2,
        num_of_baths: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Twin Panda Guesthouse',
        description: "88 Hostel is an 8-minute walk from Hongik University Subway Station (Line 2, Airport Railroad and Gyeongui Line) and the surrounding indie arts scene at Hongdae. It offers a free luggage storage service, as well as complimentary Wi-Fi access throughout its premises. Equipped with air conditioning and heating systems, rooms feature a flat-screen TV, a hairdryer and an private bathroom.",
        location: '22-3, Wausan-ro 29 ra-gil, Mapo-gu, Mapo-Gu, 04053 Seoul, South Korea',
        price: 247,
        num_of_guests: 2,
        num_of_beds: 2,
        num_of_baths: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Seoul N Hotel Dongdaemun',
        description: "Seoul N Hotel DDM is a 6-minute walk away from Dongmyo Subway Station (Line 1 and 6). All rooms come with air conditioning. Private rooms feature a flat-screen TV, fridge and electric kettle. Both private and shared bathrooms include a hairdryer and shower amenities. WiFi is available in all rooms.",
        location: '21, Jong-ro 66ga-gil, Jongno-gu, Jongno-Gu, 03115 Seoul, South Korea',
        price: 223.20,
        num_of_guests: 2,
        num_of_beds: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'APA Hotel Ueno Hirokoji',
        description: "Located in Tokyo, 300 feet from Kamezumiinari Shrine, APA Hotel Ueno Hirokoji features views of the city. Featuring a restaurant, the 3-star hotel has air-conditioned rooms with free WiFi, each with a private bathroom. Private parking is available on site. All rooms in the hotel are fitted with a kettle. At APA Hotel Ueno Hirokoji the rooms come with a desk and a flat-screen TV.",
        location: '101-0021 Tokyo-to, Chiyoda-ku Sotokanda 5-3-3, Japan',
        price: 278,
        num_of_guests: 2,
        num_of_beds: 1,
        num_of_baths: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Grids Tokyo Ueno Hotel & Hostel',
        description: "Featuring a bar and a shared lounge, Grids Tokyo Ueno Hotel&Hostel is located in Tokyo, 2,300 feet from Hozenji Temple and less than 0.6 mi from Genryu-in Temple. Among the facilities at this property are a 24-hour front desk and a shared kitchen, along with free WiFi throughout the property. The property is close to popular attractions like Kemmyo-in Temple, Shunsho-in Temple and Tozen-in Temple.",
        location: '110-0005 Tokyo-to, Taito-ku Ueno 7-10-4, Japan',
        price: 381,
        num_of_guests: 3,
        num_of_beds: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Imano Tokyo Ginza Hostel',
        description: "Featuring free WiFi throughout the property, Imano Tokyo Ginza Hostel offers accommodations in Tokyo, 0.7 mi from Kachidoki Bridge. There is a shared lounge on the 2nd floor of this accommodations.",
        location: '104-0041 Tokyo-to, Chuo-ku Shintomi 1-5-10, Japan',
        price: 461,
        num_of_guests: 6,
        num_of_beds: 6,
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ], {});
  },

  down: (queryInterface, Sequelize) => {

    return queryInterface.bulkDelete('Spots', null, {});
  }
};
