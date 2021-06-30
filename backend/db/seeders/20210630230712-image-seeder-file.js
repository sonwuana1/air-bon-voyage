'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Images', [{
      link: 'https://www.scandichotels.com/imageVault/publishedmedia/pnlz1f64wtik70t1hltg/Standard_01.jpg',
      spot_id: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      link: 'https://www.scandichotels.com/imageVault/publishedmedia/rh07gxlgcepju29f981t/Scandic_Park_Juniorsuite_202_2.jpg',
      spot_id: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      link: 'https://www.scandichotels.com/imageVault/publishedmedia/2vi1n14d4i7so99o6493/Bathroom_suite_01.jpg',
      spot_id: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      link: 'https://media.hrs.com/media/image/08/d1/08/First_Hotel_Fridhemsplan-Stockholm-Hotel_outdoor_area-546852.jpg',
      spot_id: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      link: 'https://foto.hrsstatic.com/fotos/0/2/z/1553/100/FFFFFF/http%3A%2F%2Ffoto-origin.hrsstatic.com%2Ffoto%2F5%2F4%2F6%2F8%2F546852%2F546852_z33_12760369.jpg/4ThNIHUicjpbqYVDtTJwjQ%3D%3D/1505%2C776/6/First_Hotel_Fridhemsplan-Stockholm-Double_room_standard-2-546852.jpg',
      spot_id: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      link: 'https://foto.hrsstatic.com/fotos/0/2/z/1600/100/FFFFFF/http%3A%2F%2Ffoto-origin.hrsstatic.com%2Ffoto%2F5%2F4%2F6%2F8%2F546852%2F546852_fr_12564570.jpg/v1rFZNOIQgnguhjcS%2BT3wg%3D%3D/3501%2C2751/6/First_Hotel_Fridhemsplan-Stockholm-Breakfast_room-546852.jpg',
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
      link: 'http://www.tekapotourism.co.nz/accomm/images/lakefront_lodge_1.jpg',
      spot_id: 6,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      link: 'http://www.tekapotourism.co.nz/accomm/images/holiday_park_2.jpg',
      spot_id: 6,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      link: 'http://www.tekapotourism.co.nz/accomm/images/holiday_park_4.jpg',
      spot_id: 6,
      createdAt: new Date(),
      updatedAt: new Date()
    },

  ], {});
  },

  down: (queryInterface, Sequelize) => {

    return queryInterface.bulkDelete('Images', null, {});
  }
};
