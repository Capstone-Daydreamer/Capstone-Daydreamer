// const Models = require('../server/db/models');
// const Event = Models.Event;
// const User = Models.User;
// const UserEvent = Models.UserEvent;
// const db = require('../server/db/');


const activities = [
  { name: 'Bears Game', description: 'Head to Soldier Field to root on the bears.', startdate: '2017-12-03', starttime: '12:00', location: 'Soldier Field' }, //1
  { name: 'Star Wars: The Last Jedi', description: 'Rian Johnson (Brick, Looper) writes and directs this installment of the Star Wars saga for Disney and Lucasfilm.', date: '2017-12-15', location: 'AMC' }, //2
  { name: 'Lana Del Rey in Concert', description: 'See Lana Del Rey in concert at the United Center', startdate: '2018-01-11', starttime: '20:00', location: 'United Center' }, //3
  { name: 'Fox Bar', description: 'Craft cocktails, beer & comfort food in a Soho House locale inspired by British sporting culture.', startdate: '2017-12-19', location: 'Fox Bar' }, //4
  { name: 'The Girl and the Goat', description: 'Delicious American food with small plates and an open kitchen.', startdate: '2017-12-02', location: 'The Girl and the Goat' }, //5
  { name: 'Bulls Game', description: 'Cheer on the Bulls at the United Center', startdate: '2017-12-04', starttime: '19:00', location: 'United Center' }, //6
  { name: 'Theory', description: 'Hang out at Theory watching your favorite sports teams while enjoying your favorite drink', startdate: '2017-12-18', location: 'Theory' }, //7
  { name: 'Haymarket Pub and Brewery', description: 'Haymarket Pub and Brewery is a great brewery with board games and good times', startdate: '2017-12-09', location: 'Haymarket Pub and Brewery' }, //8
  { name: 'The Art Institute', description: 'The Art Institute of Chicago, founded in 1879 and located in Chicago\'s Grant Park, is one of the oldest and largest art museums in the United States.', startdate: '2018-01-12', location: 'The Art Institute of Chicago' }, //9
  { name: 'The Disaster Artist', description: 'The real life story of writer/director Tommy Wiseau, the man behind what is often referred to as "The Citizen Kane of Bad Movies," The Room, is brought to life, chronicling the odd film\'s troubled development and eventual cult success.', startdate: '2017-12-01', location: 'AMC' }, //10
  { name: 'Billy Elliot the Musical', description: 'Billy Elliot the Musical is based on the 2000 film "Billy Elliot". Winner of both the Tony Award and Olivier Award for Best Musical, Billy Elliot the Musical is an inspirational story set in an English mining town during the miners\' strike of 1984-85. Billy Elliot takes a journey from the boxing ring to a ballet class to make his dreams come true while challenging the long held beliefs of his hometown. Along the way, he discovers a passion for dance that unites his family, inspires his community and changes his life forever.', startdate: '2017-12-15', starttime: '20:00', location: 'Ruth Page Center for Arts' }, //11
];

const activitySubcat = [
  {activitiesId: 1, subcategoryId: 58}, //1
  {activitiesId: 1, subcategoryId: 62}, //2
  {activitiesId: 2, subcategoryId: 29}, //3
  {activitiesId: 3, subcategoryId: 16}, //4
  {activitiesId: 3, subcategoryId: 19}, //5
  {activitiesId: 4, subcategoryId: 1}, //6
  {activitiesId: 4, subcategoryId: 3}, //7
  {activitiesId: 5, subcategoryId: 34}, //8
  {activitiesId: 6, subcategoryId: 57}, //9
  {activitiesId: 6, subcategoryId: 62}, //10
  {activitiesId: 7, subcategoryId: 6}, //11
  {activitiesId: 7, subcategoryId: 34}, //12
  {activitiesId: 8, subcategoryId: 1}, //13
  {activitiesId: 8, subcategoryId: 5}, //14
  {activitiesId: 8, subcategoryId: 6}, //15
  {activitiesId: 8, subcategoryId: 34}, //16
  {activitiesId: 8, subcategoryId: 42}, //17
  {activitiesId: 9, subcategoryId: 31}, //18
  {activitiesId: 10, subcategoryId: 22}, //19
  {activitiesId: 10, subcategoryId: 25}, //20
  {activitiesId: 11, subcategoryId: 66}, //21
]

const groups = [
  { name: 'Besties Forverrr', leaderId: 4 }, //1
  { name: 'The Dudes', leaderId: 9 }, //2
  { name: 'Athletes', leaderId: 2 }, //3 
  { name: 'Legend Family', leaderId: 10 }, //4
  { name: 'Monthly GNO!!', leaderId: 6 }, //5
  { name: 'College Buddies', leaderId: 13 }, //6
]

const userGroup = [
  { groupId: 1, userId: 1 },
  { groupId: 1, userId: 4 },
  { groupId: 1, userId: 6 },
  { groupId: 1, userId: 8 },
  { groupId: 2, userId: 1 },
  { groupId: 2, userId: 2 },
  { groupId: 2, userId: 5 },
  { groupId: 2, userId: 7 },
  { groupId: 2, userId: 9 },
  { groupId: 3, userId: 2 },
  { groupId: 3, userId: 4 },
  { groupId: 3, userId: 5 },
  { groupId: 4, userId: 10 },
  { groupId: 4, userId: 11 },
  { groupId: 4, userId: 12 },
  { groupId: 5, userId: 4 },
  { groupId: 5, userId: 6 },
  { groupId: 5, userId: 10 },
  { groupId: 5, userId: 13 },
  { groupId: 6, userId: 2 },
  { groupId: 6, userId: 3 },
  { groupId: 6, userId: 9 },
  { groupId: 6, userId: 10 },
  { groupId: 6, userId: 13 },
]

const users = [
  { email: 'johndoe@yahoo.com', password: '123', name: 'John Doe' }, //1
  { email: 'mikeadams@yahoo.com', password: '123', name: 'Mike Adams' }, //2
  { email: 'angelabennet@yahoo.com', password: '123', name: 'Angela Bennet' }, //3
  { email: 'serenawilliams@yahoo.com', password: '123', name: 'Serena Williams' }, //4
  { email: 'scottiepippen@yahoo.com', password: '123', name: 'Scottie Pippen' }, //5
  { email: 'taylorswift@yahoo.com', password: '123', name: 'Taylor Swift' }, //6
  { email: 'kanyewest@yahoo.com', password: '123', name: 'Kanye West' }, //7
  { email: 'charliechocolate@yahoo.com', password: '123', name: 'Charlie Chocolate' }, //8
  { email: 'nealyoung@yahoo.com', password: '123', name: 'Neal Young' }, //9
  { email: 'chrissyteigen@yahoo.com', password: '123', name: 'Chrissy Teigen' }, //10
  { email: 'johnlegend@yahoo.com', password: '123', name: 'John Legend' }, //11
  { email: 'lunalegend@yahoo.com', password: '123', name: 'Luna Legend' }, //12
  { email: 'michelleobama@yahoo.com', password: '123', name: 'Michelle Obama' } //13
]

const userEvent = [
  { userId: 1, activityId: 2}, //1
  { userId: 1, activityId: 5}, //2
  { userId: 1, activityId: 7}, //3
  { userId: 1, activityId: 10}, //4
  { userId: 2, activityId: 1}, //5
  { userId: 2, activityId: 3}, //6
  { userId: 2, activityId: 4}, //7
  { userId: 2, activityId: 5}, //8
  { userId: 2, activityId: 6}, //9
  { userId: 2, activityId: 7}, //10
  { userId: 2, activityId: 8}, //11
  { userId: 2, activityId: 10}, //12
  { userId: 3, activityId: 1}, //13
  { userId: 3, activityId: 3}, //14
  { userId: 3, activityId: 4}, //15
  { userId: 3, activityId: 8}, //16
  { userId: 4, activityId: 2}, //17
  { userId: 4, activityId: 6}, //18
  { userId: 4, activityId: 7}, //19
  { userId: 4, activityId: 11}, //20
  { userId: 5, activityId: 5}, //21
  { userId: 5, activityId: 6}, //22
  { userId: 5, activityId: 7}, //23
  { userId: 5, activityId: 8}, //24
  { userId: 5, activityId: 10}, //25
  { userId: 6, activityId: 2}, //26
  { userId: 6, activityId: 11}, //27
  { userId: 7, activityId: 5}, //28
  { userId: 7, activityId: 7}, //29
  { userId: 7, activityId: 10}, //30
  { userId: 8, activityId: 2}, //1
  { userId: 9, activityId: 1}, //1
  { userId: 9, activityId: 3}, //1
  { userId: 9, activityId: 4}, //1
  { userId: 9, activityId: 5}, //1
  { userId: 9, activityId: 7}, //1
  { userId: 9, activityId: 8}, //1
  { userId: 9, activityId: 10}, //1
  { userId: 10, activityId: 1}, //1
  { userId: 10, activityId: 2}, //1
  { userId: 10, activityId: 3}, //1
  { userId: 10, activityId: 4}, //1
  { userId: 10, activityId: 5}, //1
  { userId: 10, activityId: 8}, //1
  { userId: 10, activityId: 9}, //1
  { userId: 10, activityId: 11}, //1
  { userId: 11, activityId: 2}, //1
  { userId: 11, activityId: 5}, //1
  { userId: 11, activityId: 9}, //1
  { userId: 12, activityId: 2}, //1
  { userId: 12, activityId: 5}, //1
  { userId: 12, activityId: 9}, //1
  { userId: 13, activityId: 1}, //1
  { userId: 13, activityId: 3}, //1
  { userId: 13, activityId: 4}, //1
  { userId: 13, activityId: 8}, //1
  { userId: 13, activityId: 11}, //1
]

const dayGroup = [
  {groupId: 1, dayId: 3}, //1
  {groupId: 2, dayId: 1}, //2
  {groupId: 2, dayId: 7}, //3
  {groupId: 3, dayId: 5}, //4
  {groupId: 4, dayId: 4}, //5
  {groupId: 4, dayId: 8}, //6
  {groupId: 5, dayId: 6}, //7
  {groupId: 6, dayId: 2}, //8
  {groupId: 6, dayId: 9}, //9
]

const days = [
  { name: 'Dinner & Drinks', date: '2017-12-05' }, //1 activities 5&7
  { name: 'Bring Back the College Days', date: '2018-01-11' }, //2 activities 4&3
  { name: 'Star Wars day!', date: '2017-12-15' }, //3 activites 2
  { name: 'Dinner and Movie with Fam', date: '2017-12-15' }, //4 activites 5&2
  { name: 'Hang out', date: '2017-12-04' }, //5 activites 6&8
  { name: 'Musical Time!', date: '2017-12-15' }, //6 activites 11
  { name: 'Movie', date: '2017-12-01' }, //7 activites 10
  { name: 'Fun day', date: '2017-12-01' }, //8 activites 9
  { name: 'SundayFunday', date: '2017-12-01' }, //9 activites 1&8
]

const dayActivity = [
  { dayId: 1, activityId: 5 }, //1
  { dayId: 1, activityId: 7 }, //2
  { dayId: 2, activityId: 3 }, //3
  { dayId: 2, activityId: 4 }, //4
  { dayId: 3, activityId: 2 }, //5
  { dayId: 4, activityId: 2 }, //6
  { dayId: 4, activityId: 5 }, //7
  { dayId: 5, activityId: 6 }, //8
  { dayId: 5, activityId: 8 }, //9
  { dayId: 6, activityId: 11 }, //10
  { dayId: 7, activityId: 10 }, //11
  { dayId: 8, activityId: 9 }, //12
  { dayId: 9, activityId: 1 }, //13
  { dayId: 9, activityId: 8 }, //14
]

const cats = [
  { name: 'Bars'}, //1
  { name: 'Concerts'}, //2
  { name: 'Movies'}, //3
  { name: 'Museums'}, //4
  { name: 'Restaurants'}, //5
  { name: 'Sports Games'}, //6
  { name: 'Theater'} //7
]

const catSubcat = [
  {categoryId: 1, subcategoryId: 1},
  {categoryId: 1, subcategoryId: 2},
  {categoryId: 1, subcategoryId: 3},
  {categoryId: 1, subcategoryId: 4},
  {categoryId: 1, subcategoryId: 5},
  {categoryId: 1, subcategoryId: 6},
  {categoryId: 1, subcategoryId: 7},
  {categoryId: 1, subcategoryId: 8},
  {categoryId: 1, subcategoryId: 9},
  {categoryId: 2, subcategoryId: 10},
  {categoryId: 2, subcategoryId: 11},
  {categoryId: 2, subcategoryId: 12},
  {categoryId: 2, subcategoryId: 13},
  {categoryId: 2, subcategoryId: 14},
  {categoryId: 2, subcategoryId: 15},
  {categoryId: 2, subcategoryId: 16},
  {categoryId: 2, subcategoryId: 17},
  {categoryId: 2, subcategoryId: 18},
  {categoryId: 2, subcategoryId: 19},
  {categoryId: 3, subcategoryId: 20},
  {categoryId: 3, subcategoryId: 21},
  {categoryId: 3, subcategoryId: 22},
  {categoryId: 3, subcategoryId: 23},
  {categoryId: 3, subcategoryId: 24},
  {categoryId: 3, subcategoryId: 25},
  {categoryId: 3, subcategoryId: 26},
  {categoryId: 3, subcategoryId: 27},
  {categoryId: 3, subcategoryId: 28},
  {categoryId: 3, subcategoryId: 29},
  {categoryId: 3, subcategoryId: 30},
  {categoryId: 4, subcategoryId: 31},
  {categoryId: 4, subcategoryId: 32}, //23
  {categoryId: 4, subcategoryId: 33},
  {categoryId: 5, subcategoryId: 34},
  {categoryId: 5, subcategoryId: 35},
  {categoryId: 5, subcategoryId: 36},
  {categoryId: 5, subcategoryId: 37},
  {categoryId: 5, subcategoryId: 38},
  {categoryId: 5, subcategoryId: 39},
  {categoryId: 5, subcategoryId: 40},
  {categoryId: 5, subcategoryId: 41},
  {categoryId: 5, subcategoryId: 42},
  {categoryId: 5, subcategoryId: 43},
  {categoryId: 5, subcategoryId: 44},
  {categoryId: 5, subcategoryId: 45},
  {categoryId: 5, subcategoryId: 46},
  {categoryId: 5, subcategoryId: 47},
  {categoryId: 5, subcategoryId: 48},
  {categoryId: 5, subcategoryId: 49},
  {categoryId: 5, subcategoryId: 50},
  {categoryId: 5, subcategoryId: 51},
  {categoryId: 5, subcategoryId: 52},
  {categoryId: 5, subcategoryId: 53},
  {categoryId: 5, subcategoryId: 54},
  {categoryId: 5, subcategoryId: 55},
  {categoryId: 6, subcategoryId: 56},
  {categoryId: 6, subcategoryId: 57},
  {categoryId: 6, subcategoryId: 58},
  {categoryId: 6, subcategoryId: 59},
  {categoryId: 6, subcategoryId: 60},
  {categoryId: 6, subcategoryId: 61},
  {categoryId: 6, subcategoryId: 62},
  {categoryId: 6, subcategoryId: 63},
  {categoryId: 7, subcategoryId: 64}, //22
  {categoryId: 7, subcategoryId: 65}, //25
  {categoryId: 7, subcategoryId: 66}, //28
]

const subcats = [
  { name: 'Beer' }, //1
  { name: 'Champagne' }, //2
  { name: 'Cocktail' }, //3
  { name: 'Dive' }, //4
  { name: 'Pub' }, //5
  { name: 'Sports' }, //6
  { name: 'Tiki' }, //7
  { name: 'Whiskey' }, //8
  { name: 'Wine' }, //9
  { name: 'Country' }, //10
  { name: 'Electric Dance Music' }, //11
  { name: 'Folk' }, //12
  { name: 'Hip Hop' }, //13
  { name: 'Jazz' }, //14
  { name: 'Opera' }, //15
  { name: 'Pop' }, //16
  { name: 'Punk' }, //17
  { name: 'Rap' }, //18
  { name: 'Rock' }, //19
  { name: 'Action' }, //20
  { name: 'Animation' }, //21
  { name: 'Comedy Movie' }, //22
  { name: 'Children Movie' }, //23
  { name: 'Documentary' }, //24
  { name: 'Drama Movie' }, //25
  { name: 'Fantasy' }, //26
  { name: 'Horror' }, //27
  { name: 'Musical Movie' }, //28
  { name: 'SciFi' }, //29
  { name: 'Western' }, //30
  { name: 'Art' }, //31
  { name: 'Children Museum' }, //32
  { name: 'History' }, //33
  { name: 'American' }, //34
  { name: 'Asian Fusion' }, //35
  { name: 'Barbeque' }, //36
  { name: 'Cajun' }, //37
  { name: 'Chinese' },//38
  { name: 'Dessert' },//39
  { name: 'French' },//40
  { name: 'German' },//41
  { name: 'Gluten-Free' },//42
  { name: 'Greek' },//43
  { name: 'Indian' },//44
  { name: 'Italian' },//45
  { name: 'Japanese' },//46
  { name: 'Mediterranean' },//47
  { name: 'Polish' },//48
  { name: 'Seafood' },//49
  { name: 'Southern' },//50
  { name: 'Steak House' },//51
  { name: 'Tapas' },//52
  { name: 'Thai' },  //53
  { name: 'Vegan' },//54
  { name: 'Vegetarian' }, //55
  { name: 'Baseball' },//56
  { name: 'Basketball' },//57
  { name: 'Football' },//58
  { name: 'Soccer' },//59
  { name: 'Golf' },//60
  { name: 'Tennis' },//61
  { name: 'Pro' },//62
  { name: 'College' },//63
  { name: 'Comedy Theatre' }, //64
  { name: 'Drama Theatre' }, //65
  { name: 'Musical Theatre' }, //66
]

const userSubcat = [
  {userId: 1, subcategoryId: 1}, //1
  {userId: 1, subcategoryId: 5}, //2
  {userId: 1, subcategoryId: 6}, //3
  {userId: 1, subcategoryId: 8}, //4
  {userId: 1, subcategoryId: 19}, //5
  {userId: 1, subcategoryId: 22}, //6
  {userId: 1, subcategoryId: 25}, //7
  {userId: 1, subcategoryId: 29}, //8
  {userId: 1, subcategoryId: 34}, //9
  {userId: 1, subcategoryId: 44}, //10
  {userId: 1, subcategoryId: 49}, //11
  {userId: 1, subcategoryId: 58}, //12
  {userId: 1, subcategoryId: 62}, //13
  {userId: 1, subcategoryId: 63}, //14
  {userId: 2, subcategoryId: 1},
  {userId: 2, subcategoryId: 3},
  {userId: 2, subcategoryId: 5},
  {userId: 2, subcategoryId: 6},
  {userId: 2, subcategoryId: 8},
  {userId: 2, subcategoryId: 10},
  {userId: 2, subcategoryId: 16},
  {userId: 2, subcategoryId: 19},
  {userId: 2, subcategoryId: 22},
  {userId: 2, subcategoryId: 25},
  {userId: 2, subcategoryId: 30},
  {userId: 2, subcategoryId: 34},
  {userId: 2, subcategoryId: 39},
  {userId: 2, subcategoryId: 45},
  {userId: 2, subcategoryId: 48},
  {userId: 2, subcategoryId: 57},
  {userId: 2, subcategoryId: 58},
  {userId: 2, subcategoryId: 62},
  {userId: 3, subcategoryId: 2},
  {userId: 3, subcategoryId: 3},
  {userId: 3, subcategoryId: 6},
  {userId: 3, subcategoryId: 9},
  {userId: 3, subcategoryId: 14},
  {userId: 3, subcategoryId: 15},
  {userId: 3, subcategoryId: 16},
  {userId: 3, subcategoryId: 24},
  {userId: 3, subcategoryId: 33},
  {userId: 3, subcategoryId: 40},
  {userId: 3, subcategoryId: 42},
  {userId: 3, subcategoryId: 55},
  {userId: 3, subcategoryId: 58},
  {userId: 3, subcategoryId: 66},
  {userId: 4, subcategoryId: 1},
  {userId: 4, subcategoryId: 2},
  {userId: 4, subcategoryId: 6},
  {userId: 4, subcategoryId: 7},
  {userId: 4, subcategoryId: 11},
  {userId: 4, subcategoryId: 20},
  {userId: 4, subcategoryId: 27},
  {userId: 4, subcategoryId: 29},
  {userId: 4, subcategoryId: 34},
  {userId: 4, subcategoryId: 36},
  {userId: 4, subcategoryId: 42},
  {userId: 4, subcategoryId: 51},
  {userId: 4, subcategoryId: 53},
  {userId: 4, subcategoryId: 57},
  {userId: 4, subcategoryId: 61},
  {userId: 4, subcategoryId: 62},
  {userId: 4, subcategoryId: 66},
  {userId: 5, subcategoryId: 1},
  {userId: 5, subcategoryId: 6},
  {userId: 5, subcategoryId: 13},
  {userId: 5, subcategoryId: 17},
  {userId: 5, subcategoryId: 22},
  {userId: 5, subcategoryId: 25},
  {userId: 5, subcategoryId: 28},
  {userId: 5, subcategoryId: 33},
  {userId: 5, subcategoryId: 34},
  {userId: 5, subcategoryId: 35},
  {userId: 5, subcategoryId: 38},
  {userId: 5, subcategoryId: 42},
  {userId: 5, subcategoryId: 46},
  {userId: 5, subcategoryId: 57},
  {userId: 5, subcategoryId: 62},
  {userId: 5, subcategoryId: 63},
  {userId: 6, subcategoryId: 2},
  {userId: 6, subcategoryId: 9},
  {userId: 6, subcategoryId: 10},
  {userId: 6, subcategoryId: 16},
  {userId: 6, subcategoryId: 26},
  {userId: 6, subcategoryId: 29},
  {userId: 6, subcategoryId: 47},
  {userId: 6, subcategoryId: 54},
  {userId: 6, subcategoryId: 66},
  {userId: 7, subcategoryId: 13},
  {userId: 7, subcategoryId: 18},
  {userId: 7, subcategoryId: 22},
  {userId: 7, subcategoryId: 25},
  {userId: 7, subcategoryId: 37},
  {userId: 7, subcategoryId: 41},
  {userId: 7, subcategoryId: 46},
  {userId: 8, subcategoryId: 4},
  {userId: 8, subcategoryId: 12},
  {userId: 8, subcategoryId: 21},
  {userId: 8, subcategoryId: 26},
  {userId: 8, subcategoryId: 29},
  {userId: 8, subcategoryId: 39},
  {userId: 8, subcategoryId: 64},
  {userId: 9, subcategoryId: 1},
  {userId: 9, subcategoryId: 3},
  {userId: 9, subcategoryId: 5},
  {userId: 9, subcategoryId: 6},
  {userId: 9, subcategoryId: 8},
  {userId: 9, subcategoryId: 19},
  {userId: 9, subcategoryId: 22},
  {userId: 9, subcategoryId: 25},
  {userId: 9, subcategoryId: 42},
  {userId: 9, subcategoryId: 44},
  {userId: 9, subcategoryId: 53},
  {userId: 9, subcategoryId: 58},
  {userId: 9, subcategoryId: 62},
  {userId: 9, subcategoryId: 63},
  {userId: 10, subcategoryId: 3},
  {userId: 10, subcategoryId: 7},
  {userId: 10, subcategoryId: 14},
  {userId: 10, subcategoryId: 16},
  {userId: 10, subcategoryId: 19},
  {userId: 10, subcategoryId: 23},
  {userId: 10, subcategoryId: 29},
  {userId: 10, subcategoryId: 31},
  {userId: 10, subcategoryId: 32},
  {userId: 10, subcategoryId: 34},
  {userId: 10, subcategoryId: 35},
  {userId: 10, subcategoryId: 39},
  {userId: 10, subcategoryId: 32},
  {userId: 10, subcategoryId: 50},
  {userId: 10, subcategoryId: 66},
  {userId: 11, subcategoryId: 2},
  {userId: 11, subcategoryId: 4},
  {userId: 11, subcategoryId: 14},
  {userId: 11, subcategoryId: 16},
  {userId: 11, subcategoryId: 23},
  {userId: 11, subcategoryId: 29},
  {userId: 11, subcategoryId: 31},
  {userId: 11, subcategoryId: 34},
  {userId: 11, subcategoryId: 37},
  {userId: 11, subcategoryId: 40},
  {userId: 11, subcategoryId: 46},
  {userId: 11, subcategoryId: 65},
  {userId: 12, subcategoryId: 16},
  {userId: 12, subcategoryId: 23},
  {userId: 12, subcategoryId: 31},
  {userId: 12, subcategoryId: 34},
  {userId: 12, subcategoryId: 53},
  {userId: 13, subcategoryId: 1},
  {userId: 13, subcategoryId: 3},
  {userId: 13, subcategoryId: 6},
  {userId: 13, subcategoryId: 9},
  {userId: 13, subcategoryId: 13},
  {userId: 13, subcategoryId: 15},
  {userId: 13, subcategoryId: 16},
  {userId: 13, subcategoryId: 19},
  {userId: 13, subcategoryId: 22},
  {userId: 13, subcategoryId: 27},
  {userId: 13, subcategoryId: 31},
  {userId: 13, subcategoryId: 34},
  {userId: 13, subcategoryId: 38},
  {userId: 13, subcategoryId: 42},
  {userId: 13, subcategoryId: 45},
  {userId: 13, subcategoryId: 49},
  {userId: 13, subcategoryId: 57},
  {userId: 13, subcategoryId: 58},
  {userId: 13, subcategoryId: 60},
  {userId: 13, subcategoryId: 62},
  {userId: 13, subcategoryId: 66},
]

const seedData = () =>
User.bulkCreate(users)
.then(() => {
  return Event.bulkCreate(events)
})
.then(() => {
  return UserEvent.bulkCreate(userEvt)
})

const runSeed = () => {
  db.sync({ force: true })
    .then(() => {
      console.log('DB Seeding Ran!');
      return seedData();
    })
    .catch(err => {
      console.log('Seed error', err);
    })
    .then(() => {
      db.close();
      return null;
    });
};

runSeed();

