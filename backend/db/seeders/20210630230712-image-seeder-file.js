'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Images', [{
      link: 'https://i.imgur.com/mfEwQeb.jpeg',
      spot_id: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      link: 'https://i.imgur.com/l1peYh4.jpeg',
      spot_id: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      link: 'https://i.imgur.com/WiO1sTI.jpeg',
      spot_id: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      link: 'https://i.imgur.com/I0fwpMw.jpeg',
      spot_id: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      link: 'https://i.imgur.com/YdB1O57.jpeg',
      spot_id: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      link: 'https://i.imgur.com/FZQDzMM.jpeg',
      spot_id: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      link: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0d/4c/72/6e/hale-lamalama-ka-ili.jpg?w=1200&h=-1&s=1',
      spot_id: 3,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      link: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0d/4c/73/28/lamalama-suite.jpg?w=1200&h=-1&s=1',
      spot_id: 3,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      link: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0d/63/f8/01/relaxing-peaceful-and.jpg?w=1200&h=-1&s=1',
      spot_id: 3,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      link: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/78629515.jpg?k=1532e83bd9ef5feae6191dd2261e2424d5715d481a112b6e7cf7bceb6ba2868e&o=&hp=1',
      spot_id: 4,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      link: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/78629570.jpg?k=67c3e41bed4f7f0a7d231054c69244da18c2d951bd429589376cbffdc3948d1d&o=&hp=1',
      spot_id: 4,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      link: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/78629579.jpg?k=f0fe57cf835eaa91a6767d2c439358decc5e24792009492d5c2f2722bc2e9d25&o=&hp=1',
      spot_id: 4,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      link: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1c/ac/f1/67/ulysses-aparthotel.jpg?w=1100&h=-1&s=1',
      spot_id: 5,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      link: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1c/ac/f1/79/studio-apartment.jpg?w=1200&h=-1&s=1',
      spot_id: 5,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      link: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1c/ac/f1/84/front-restaurant.jpg?w=1200&h=-1&s=1',
      spot_id: 5,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      link: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/34882118.jpg?k=80bd44e683b0431e64254c8eab7fd2371bccab32421df5742d71d701b094b14c&o=&hp=1',
      spot_id: 6,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      link: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/177352911.jpg?k=d817a5034a7044bf28e177492796bbd90fa91f4fefbc605bf82b1c4621c83eb5&o=&hp=1',
      spot_id: 6,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      link: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/177354161.jpg?k=7c58991bead7941ffaae1ba984997c738e90a352a31aa579996aeb6902c1584b&o=&hp=1',
      spot_id: 6,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      link: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/90041808.jpg?k=69559858a71f9718bc8686ed95257a0265a40738e9c7165203c618ec81b14e0b&o=&hp=1',
      spot_id: 7,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      link: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/90041783.jpg?k=e70d95e67ef5db88feb4d9addb0e4938b8d357ee5fb11755b2fffaa7fbd4552e&o=&hp=1',
      spot_id: 7,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      link: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/90041805.jpg?k=2e8d7e8fdb7d230c4c4a2d548461e2e92cba2b290721f302dfd74d4f9f0d9155&o=&hp=1',
      spot_id: 7,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      link: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/230960593.jpg?k=16b12374fe21021ba01e1c1c5f045cf88c8e0a0ddec1fe7e2fa93897113ccb52&o=&hp=1',
      spot_id: 8,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      link: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/252636273.jpg?k=0b69a5a26f17b2ae6927beae1cbc39cdb05c36ad88887255e0ad13952542572f&o=&hp=1',
      spot_id: 8,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      link: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/196971887.jpg?k=0835c96c2bb1a4b214ad1a650d5b0f7d0429bc9bcff64964c48dfd5e99979e20&o=&hp=1',
      spot_id: 8,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      link: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/168529249.jpg?k=7ec8c03cacb05ad1bda3697a99d9daa2435bebff70565bb047c9e45822d9b034&o=&hp=1',
      spot_id: 9,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      link: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/263707393.jpg?k=825f17bccaabc2fe2b0991537fd271aaae97d3a8fa03fb3f3dda23b52f11c9f2&o=&hp=1',
      spot_id: 9,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      link: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/263707206.jpg?k=082dac55cce4f581b6362674975a42b14d14640a806071756c5c982f65d8687c&o=&hp=1',
      spot_id: 9,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      link: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/261720764.jpg?k=9e9c9f9f822b09a0de43eb6938390dd1f99c720af7b029ff67e7ab4fee60af3b&o=&hp=1',
      spot_id: 10,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      link: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/261720458.jpg?k=2dfc9033fa39c5e0f3c61573cf9db305543823169f0f9f6b000c6ceeec0f6f6c&o=&hp=1',
      spot_id: 10,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      link: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/261720895.jpg?k=73154ec52069603a87c5119a8720f7d3fcfa7c95df1a0b5c8238cd6b09bf86fa&o=&hp=1',
      spot_id: 10,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      link: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/221261208.jpg?k=935228ff3c9f025bf906f4faf80d1b8a41ff5faf595488cf08608b1384d2e655&o=&hp=1',
      spot_id: 11,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      link: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/221256745.jpg?k=688299c361d4af4be09112ec29f03ca457d940adeab923c3882614f8e323be8e&o=&hp=1',
      spot_id: 11,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      link: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/221256764.jpg?k=cd9882cc71d4aa7b8665d1c05e1a013b93867168b649b76421d69b7d3f1ecef7&o=&hp=1',
      spot_id: 11,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      link: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/109815391.jpg?k=f192dd7a485065bff93b5fd3e2598aeb52d46849185eaecda6a169d61d929a88&o=&hp=1',
      spot_id: 12,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      link: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/109815387.jpg?k=b1f34b51d2d427612ac8637705886d854fd2f435ad5d3a03d85524d1db32d50c&o=&hp=1',
      spot_id: 12,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      link: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/109815332.jpg?k=6a751ab4c332717979afde5327b4a2e4fc1efc1d17de40fe9a505155bca801e6&o=&hp=1',
      spot_id: 12,
      createdAt: new Date(),
      updatedAt: new Date()
    },

  ], {});
  },

  down: (queryInterface, Sequelize) => {

    return queryInterface.bulkDelete('Images', null, {});
  }
};
