'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('Reviews', [{
        rating: 5,
        content: 'Beautiful and spacious room with a gorgeous view of the city! I see why BTS stayed here!',
        user_id: 1,
        spot_id: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        rating: 2,
        content: 'More bugs then I could count! Staff was nice though...no wonder jungkook had those mosquito nets 🤔',
        user_id: 2,
        spot_id: 6,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        rating: 4,
        content: 'Staff was very friendly and the room was very clean.',
        user_id: 3,
        spot_id: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        rating: 3,
        content: "Ehhh...i've had better. Did Prince Jimin really stay here???",
        user_id: 1,
        spot_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        rating: 3,
        content: 'The breakfast was ok 😒',
        user_id: 3,
        spot_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        rating: 5,
        content: 'The view is incredible!!! BORAHAE ARMY!!!!!!',
        user_id: 2,
        spot_id: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        rating: 4,
        content: 'The room was very spacious and clean. I wonder if Namjoon was in this room?',
        user_id: 2,
        spot_id: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        rating: 5,
        content: "I'm pretty sure yoongi slept in this bed 😋",
        user_id: 3,
        spot_id: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        rating: 4,
        content: "I CANT WAIT TO COME BACK!!!!!!!!!",
        user_id: 2,
        spot_id: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        rating: 1,
        content: "The staff was very rude to us when we inquired about which rooms BTS members stay in.",
        user_id: 1,
        spot_id: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        rating: 3,
        content: "Cute room...terrible service",
        user_id: 1,
        spot_id: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        rating: 4,
        content: "The cabins are very luxurious. I can see why Jin loved it so much 😍",
        user_id: 1,
        spot_id: 6,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        rating: 5,
        content: "What a very nice hotel.",
        user_id: 2,
        spot_id: 7,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        rating: 3,
        content: "It was a little flashy for my taste 😒",
        user_id: 3,
        spot_id: 7,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        rating: 3,
        content: "Place looks kind of old...",
        user_id: 1,
        spot_id: 8,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        rating: 2,
        content: "The beds were too hard!",
        user_id: 2,
        spot_id: 8,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        rating: 4,
        content: "I love this place 😍",
        user_id: 1,
        spot_id: 9,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        rating: 4,
        content: "a little small but cute!",
        user_id: 3,
        spot_id: 9,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        rating: 5,
        content: "WOW JUST WOW 😱",
        user_id: 2,
        spot_id: 10,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        rating: 5,
        content: "this place was made for BTS!!!!!!",
        user_id: 3,
        spot_id: 10,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        rating: 4,
        content: "cute, small, and convenient",
        user_id: 2,
        spot_id: 11,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        rating: 5,
        content: "10/10 would def recommend 👍",
        user_id: 1,
        spot_id: 11,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        rating: 4,
        content: "cute little luxurious cubbies in the heart of the city!",
        user_id: 3,
        spot_id: 12,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        rating: 1,
        content: "Absolutely NO PRIVACY 🤬",
        user_id: 3,
        spot_id: 12,
        createdAt: new Date(),
        updatedAt: new Date()
      },

    ], {});
  },

  down: (queryInterface, Sequelize) => {

    return queryInterface.bulkDelete('Reviews', null, {});
  }
};
