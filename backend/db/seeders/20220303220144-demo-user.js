'use strict';
const bcrypt = require('bcryptjs');

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [
      {
        firstName: 'Demo',
        lastName: 'User',
        userName: 'Demo-user',
        email: 'demo@user.io',
        age: '27',
        profileImageUrl: 'https://cdn.pixabay.com/photo/2017/07/18/23/23/user-2517433_1280.png',
        hashedPassword: bcrypt.hashSync('password1')
    },
    {
        firstName: 'Cody',
        lastName: 'Baker',
        userName: 'codyb6500',
        email: 'codyb6500@test.io',
        age: '36',
        profileImageUrl: 'https://combo.staticflickr.com/pw/images/buddyicon02.png',
        hashedPassword: bcrypt.hashSync('password2')
    },
    {
        firstName: 'James',
        lastName: 'Wright',
        userName: 'Writrix',
        email: 'writrix@test.io',
        age: '46',
        profileImageUrl: 'https://farm3.staticflickr.com/2919/buddyicons/62208072@N08.jpg',
        hashedPassword: bcrypt.hashSync('password3')
    },
    {
        firstName: 'Lauren',
        lastName: 'Taylor',
        userName: 'laurentaylor',
        email: 'lrnrtaylor@test.io',
        age: '32',
        profileImageUrl: 'https://farm66.staticflickr.com/65535/buddyicons/168029468@N08.jpg',
        hashedPassword: bcrypt.hashSync('password4')
    },
    {
        firstName: 'Bob',
        lastName: 'Richards',
        userName: 'BobKingofHill247',
        email: 'bobbyrichards@test.io',
        age: '52',
        profileImageUrl: 'https://combo.staticflickr.com/pw/images/buddyicon02.png',
        hashedPassword: bcrypt.hashSync('password5')
    },
    {
      firstName: 'Josh',
      lastName: 'Belkin',
      userName: 'jb2sssa',
      email: 'jb2sssa@test.io',
      age: '18',
      profileImageUrl: 'https://combo.staticflickr.com/pw/images/buddyicon02.png',
      hashedPassword: bcrypt.hashSync('password6')
    },
    {
      firstName: 'Timmy',
      lastName: 'Song',
      userName: 'timmysong',
      email: 'timmysong@test.io',
      age: '14',
      profileImageUrl: 'https://combo.staticflickr.com/pw/images/buddyicon02.png',
      hashedPassword: bcrypt.hashSync('password7')
    },
    {
      firstName: 'Jordyn',
      lastName: 'Hill',
      userName: 'jHill222',
      email: 'jHill222@test.io',
      age: '22',
      profileImageUrl: 'https://combo.staticflickr.com/pw/images/buddyicon02.png',
      hashedPassword: bcrypt.hashSync('password8')
    },
    {
      firstName: 'Sarah',
      lastName: 'Chang',
      userName: 'skchang',
      email: 'jHill222@test.io',
      age: '44',
      profileImageUrl: 'https://combo.staticflickr.com/pw/images/buddyicon02.png',
      hashedPassword: bcrypt.hashSync('password9')
    },
    {
      firstName: 'Khaliah',
      lastName: 'Ali',
      userName: 'kablessed247',
      email: 'kablessed247@test.io',
      age: '32',
      profileImageUrl: 'https://combo.staticflickr.com/pw/images/buddyicon02.png',
      hashedPassword: bcrypt.hashSync('password10')
    },
    {
      firstName: 'Abby',
      lastName: 'White',
      userName: 'abbyWhite111',
      email: 'abbyWhite111@test.io',
      age: '22',
      profileImageUrl: 'https://combo.staticflickr.com/pw/images/buddyicon02.png',
      hashedPassword: bcrypt.hashSync('password11')
    },
    {
      firstName: 'Elise',
      lastName: 'Conway',
      userName: 'ecbaby777',
      email: 'ecbaby777@test.io',
      age: '27',
      profileImageUrl: 'https://combo.staticflickr.com/pw/images/buddyicon02.png',
      hashedPassword: bcrypt.hashSync('password12')
    },
    {
      firstName: 'Ricky',
      lastName: 'Suarez',
      userName: 'nofiestazzz',
      email: 'nofiestazzz@test.io',
      age: '28',
      profileImageUrl: 'https://combo.staticflickr.com/pw/images/buddyicon02.png',
      hashedPassword: bcrypt.hashSync('password13')
    },
    {
      firstName: 'Joji',
      lastName: 'Kawasaki',
      userName: 'jk2000',
      email: 'jk2000@test.io',
      age: '42',
      profileImageUrl: 'https://combo.staticflickr.com/pw/images/buddyicon02.png',
      hashedPassword: bcrypt.hashSync('password14')
    },
    {
      firstName: 'Josh',
      lastName: 'Brown',
      userName: 'joshbruh218',
      email: 'joshbruh218@test.io',
      age: '23',
      profileImageUrl: 'https://combo.staticflickr.com/pw/images/buddyicon02.png',
      hashedPassword: bcrypt.hashSync('password15')
    },
    {
      firstName: 'Kelly',
      lastName: 'Arjavac',
      userName: 'kabella9483',
      email: 'kabella9483@test.io',
      age: '29',
      profileImageUrl: 'https://combo.staticflickr.com/pw/images/buddyicon02.png',
      hashedPassword: bcrypt.hashSync('password16')
    },
    {
      firstName: 'James',
      lastName: 'Rodman',
      userName: 'dontsleep563',
      email: 'dontsleep563@test.io',
      age: '35',
      profileImageUrl: 'https://combo.staticflickr.com/pw/images/buddyicon02.png',
      hashedPassword: bcrypt.hashSync('password17')
    },
    {
      firstName: 'Ilhan',
      lastName: 'Omar',
      userName: 'omar2020',
      email: 'omar2020@test.io',
      age: '47',
      profileImageUrl: 'https://combo.staticflickr.com/pw/images/buddyicon02.png',
      hashedPassword: bcrypt.hashSync('password18')
    },
    {
      firstName: 'Alison',
      lastName: 'Smith',
      userName: 'asmrsmith111',
      email: 'asmrsmith111@test.io',
      age: '36',
      profileImageUrl: 'https://combo.staticflickr.com/pw/images/buddyicon02.png',
      hashedPassword: bcrypt.hashSync('password19')
    },
    {
      firstName: 'Elisa',
      lastName: 'Ahlqvist',
      userName: 'eahvskds83213',
      email: 'eahvskds83213@test.io',
      age: '24',
      profileImageUrl: 'https://combo.staticflickr.com/pw/images/buddyicon02.png',
      hashedPassword: bcrypt.hashSync('password20')
    }
      ], {});
    },

  down: (queryInterface, Sequelize) => {
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete('Users', {
      username: { [Op.in]: ['Demo-lition', 'FakeUser1', 'FakeUser2'] }
    }, {});
  }
};
