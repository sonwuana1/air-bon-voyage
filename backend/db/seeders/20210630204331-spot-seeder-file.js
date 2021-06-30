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
    ], {});
  },

  down: (queryInterface, Sequelize) => {

    return queryInterface.bulkDelete('Spots', null, {});
  }
};
