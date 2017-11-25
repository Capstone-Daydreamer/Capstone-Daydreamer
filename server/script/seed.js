const Models = require('../server/db/models');
const User = Models.User;
const Category = Models.Category;
const Day = Models.Day;
const Activity = Models.Activity;
const Group = Models.Group;
const SubCategory = Models.SubCategory;
const UserGroup = Models.UserGroup;
const UserActivity = Models.UserActivity;
const GroupDay = Models.GroupDay;
const ActivityDay = Models.ActivityDay;
const ActivitySubCategory = Models.ActivitySubCategory;
const CategorySubCategory = Models.CategorySubCategory;
const UserSubCategory = Models.UserSubCategory;
const db = require('../server/db/');


const activities = [
  { name: 'Bears Game', description: 'Head to Soldier Field to root on the bears.', date: '2017-12-03', time: '12:00', location: 'Soldier Field' }, //1
  { name: 'Star Wars: The Last Jedi', description: 'Rian Johnson (Brick, Looper) writes and directs this installment of the Star Wars saga for Disney and Lucasfilm.', date: '2017-12-15', location: 'AMC' }, //2
  { name: 'Lana Del Rey in Concert', description: 'See Lana Del Rey in concert at the United Center', date: '2018-01-11', time: '20:00', location: 'United Center' }, //3
  { name: 'Fox Bar', description: 'Craft cocktails, beer & comfort food in a Soho House locale inspired by British sporting culture.', date: '2017-12-19', location: 'Fox Bar' }, //4
  { name: 'The Girl and the Goat', description: 'Delicious American food with small plates and an open kitchen.', date: '2017-12-02', location: 'The Girl and the Goat' }, //5
  { name: 'Bulls Game', description: 'Cheer on the Bulls at the United Center', date: '2017-12-04', time: '19:00', location: 'United Center' }, //6
  { name: 'Theory', description: 'Hang out at Theory watching your favorite sports teams while enjoying your favorite drink', date: '2017-12-18', location: 'Theory' }, //7
  { name: 'Haymarket Pub and Brewery', description: 'Haymarket Pub and Brewery is a great brewery with board games and good times', date: '2017-12-09', location: 'Haymarket Pub and Brewery' }, //8
  { name: 'The Art Institute', description: 'The Art Institute of Chicago, founded in 1879 and located in Chicago\'s Grant Park, is one of the oldest and largest art museums in the United States.', date: '2018-01-12', location: 'The Art Institute of Chicago' }, //9
  { name: 'The Disaster Artist', description: 'The real life story of writer/director Tommy Wiseau, the man behind what is often referred to as "The Citizen Kane of Bad Movies," The Room, is brought to life, chronicling the odd film\'s troubled development and eventual cult success.', date: '2017-12-01', location: 'AMC' }, //10
  { name: 'Billy Elliot the Musical', description: 'Billy Elliot the Musical is based on the 2000 film "Billy Elliot". Winner of both the Tony Award and Olivier Award for Best Musical, Billy Elliot the Musical is an inspirational story set in an English mining town during the miners\' strike of 1984-85. Billy Elliot takes a journey from the boxing ring to a ballet class to make his dreams come true while challenging the long held beliefs of his hometown. Along the way, he discovers a passion for dance that unites his family, inspires his community and changes his life forever.', date: '2017-12-15', time: '20:00', location: 'Ruth Page Center for Arts' }, //11
];

const activitySubcat = [
  {activityId: 1, subCategoryId: 58}, //1
  {activityId: 1, subCategoryId: 62}, //2
  {activityId: 2, subCategoryId: 29}, //3
  {activityId: 3, subCategoryId: 16}, //4
  {activityId: 3, subCategoryId: 19}, //5
  {activityId: 4, subCategoryId: 1}, //6
  {activityId: 4, subCategoryId: 3}, //7
  {activityId: 5, subCategoryId: 34}, //8
  {activityId: 6, subCategoryId: 57}, //9
  {activityId: 6, subCategoryId: 62}, //10
  {activityId: 7, subCategoryId: 6}, //11
  {activityId: 7, subCategoryId: 34}, //12
  {activityId: 8, subCategoryId: 1}, //13
  {activityId: 8, subCategoryId: 5}, //14
  {activityId: 8, subCategoryId: 6}, //15
  {activityId: 8, subCategoryId: 34}, //16
  {activityId: 8, subCategoryId: 42}, //17
  {activityId: 9, subCategoryId: 31}, //18
  {activityId: 10, subCategoryId: 22}, //19
  {activityId: 10, subCategoryId: 25}, //20
  {activityId: 11, subCategoryId: 66}, //21
]

const groups = [
  { name: 'Besties Forverrr', leader: 4 }, //1
  { name: 'The Dudes', leader: 9 }, //2
  { name: 'Athletes', leader: 2 }, //3
  { name: 'Legend Family', leader: 10 }, //4
  { name: 'Monthly GNO!!', leader: 6 }, //5
  { name: 'College Buddies', leader: 13 }, //6
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

const userActivities = [
  { userId: 1, activityId: 2, userRating: 3}, //1
  { userId: 1, activityId: 5, userRating: 2}, //2
  { userId: 1, activityId: 7, userRating: 3}, //3
  { userId: 1, activityId: 10, userRating: 1}, //4
  { userId: 2, activityId: 1, userRating: 3}, //5
  { userId: 2, activityId: 3, userRating: 2}, //6
  { userId: 2, activityId: 4, userRating: 2}, //7
  { userId: 2, activityId: 5, userRating: 2}, //8
  { userId: 2, activityId: 6, userRating: 3}, //9
  { userId: 2, activityId: 7, userRating: 1}, //10
  { userId: 2, activityId: 8, userRating: 1}, //11
  { userId: 2, activityId: 10, userRating: 3}, //12
  { userId: 3, activityId: 1, userRating: 3}, //13
  { userId: 3, activityId: 3, userRating: 3}, //14
  { userId: 3, activityId: 4, userRating: 1}, //15
  { userId: 3, activityId: 8, userRating: 3}, //16
  { userId: 4, activityId: 2, userRating: 3}, //17
  { userId: 4, activityId: 6, userRating: 2}, //18
  { userId: 4, activityId: 7, userRating: 3}, //19
  { userId: 4, activityId: 11, userRating: 1}, //20
  { userId: 5, activityId: 5, userRating: 2}, //21
  { userId: 5, activityId: 6, userRating: 2}, //22
  { userId: 5, activityId: 7, userRating: 3}, //23
  { userId: 5, activityId: 8, userRating: 3}, //24
  { userId: 5, activityId: 10, userRating: 3}, //25
  { userId: 6, activityId: 2, userRating: 3}, //26
  { userId: 6, activityId: 11, userRating: 0}, //27
  { userId: 7, activityId: 5, userRating: 1}, //28
  { userId: 7, activityId: 7, userRating: 0}, //29
  { userId: 7, activityId: 10, userRating: 3}, //30
  { userId: 8, activityId: 2, userRating: 3}, //1
  { userId: 9, activityId: 1, userRating: 3}, //1
  { userId: 9, activityId: 3, userRating: 2}, //1
  { userId: 9, activityId: 4, userRating: 2}, //1
  { userId: 9, activityId: 5, userRating: 3}, //1
  { userId: 9, activityId: 7, userRating: 1}, //1
  { userId: 9, activityId: 8, userRating: 3}, //1
  { userId: 9, activityId: 10, userRating: 1}, //1
  { userId: 10, activityId: 1, userRating: 3}, //1
  { userId: 10, activityId: 2, userRating: 3}, //1
  { userId: 10, activityId: 3, userRating: 3}, //1
  { userId: 10, activityId: 4, userRating: 3}, //1
  { userId: 10, activityId: 5, userRating: 2}, //1
  { userId: 10, activityId: 8, userRating: 2}, //1
  { userId: 10, activityId: 9, userRating: 1}, //1
  { userId: 10, activityId: 11, userRating: 3}, //1
  { userId: 11, activityId: 2, userRating: 3}, //1
  { userId: 11, activityId: 5, userRating: 2}, //1
  { userId: 11, activityId: 9, userRating: 3}, //1
  { userId: 12, activityId: 2, userRating: 3}, //1
  { userId: 12, activityId: 5, userRating: 1}, //1
  { userId: 12, activityId: 9, userRating: 1}, //1
  { userId: 13, activityId: 1, userRating: 3}, //1
  { userId: 13, activityId: 3, userRating: 1}, //1
  { userId: 13, activityId: 4, userRating: 2}, //1
  { userId: 13, activityId: 8, userRating: 2}, //1
  { userId: 13, activityId: 11, userRating: 3}, //1
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
  { name: 'Dinner & Drinks', date: '2017-11-05' }, //1 activities 5&7
  { name: 'Bring Back the College Days', date: '2018-01-11' }, //2 activities 4&3
  { name: 'Star Wars day!', date: '2017-12-15' }, //3 activites 2
  { name: 'Dinner and Movie with Fam', date: '2017-12-15' }, //4 activites 5&2
  { name: 'Hang out', date: '2017-12-04' }, //5 activites 6&8
  { name: 'Musical Time!', date: '2017-12-15' }, //6 activites 11
  { name: 'Movie', date: '2017-12-01' }, //7 activites 10
  { name: 'Fun day', date: '2017-12-01' }, //8 activites 9
  { name: 'SundayFunday', date: '2017-12-01' }, //9 activites 1&8
]

const activitiesDays = [
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
  {categoryId: 1, subCategoryId: 1},
  {categoryId: 1, subCategoryId: 2},
  {categoryId: 1, subCategoryId: 3},
  {categoryId: 1, subCategoryId: 4},
  {categoryId: 1, subCategoryId: 5},
  {categoryId: 1, subCategoryId: 6},
  {categoryId: 1, subCategoryId: 7},
  {categoryId: 1, subCategoryId: 8},
  {categoryId: 1, subCategoryId: 9},
  {categoryId: 2, subCategoryId: 10},
  {categoryId: 2, subCategoryId: 11},
  {categoryId: 2, subCategoryId: 12},
  {categoryId: 2, subCategoryId: 13},
  {categoryId: 2, subCategoryId: 14},
  {categoryId: 2, subCategoryId: 15},
  {categoryId: 2, subCategoryId: 16},
  {categoryId: 2, subCategoryId: 17},
  {categoryId: 2, subCategoryId: 18},
  {categoryId: 2, subCategoryId: 19},
  {categoryId: 3, subCategoryId: 20},
  {categoryId: 3, subCategoryId: 21},
  {categoryId: 3, subCategoryId: 22},
  {categoryId: 3, subCategoryId: 23},
  {categoryId: 3, subCategoryId: 24},
  {categoryId: 3, subCategoryId: 25},
  {categoryId: 3, subCategoryId: 26},
  {categoryId: 3, subCategoryId: 27},
  {categoryId: 3, subCategoryId: 28},
  {categoryId: 3, subCategoryId: 29},
  {categoryId: 3, subCategoryId: 30},
  {categoryId: 4, subCategoryId: 31},
  {categoryId: 4, subCategoryId: 32}, //23
  {categoryId: 4, subCategoryId: 33},
  {categoryId: 5, subCategoryId: 34},
  {categoryId: 5, subCategoryId: 35},
  {categoryId: 5, subCategoryId: 36},
  {categoryId: 5, subCategoryId: 37},
  {categoryId: 5, subCategoryId: 38},
  {categoryId: 5, subCategoryId: 39},
  {categoryId: 5, subCategoryId: 40},
  {categoryId: 5, subCategoryId: 41},
  {categoryId: 5, subCategoryId: 42},
  {categoryId: 5, subCategoryId: 43},
  {categoryId: 5, subCategoryId: 44},
  {categoryId: 5, subCategoryId: 45},
  {categoryId: 5, subCategoryId: 46},
  {categoryId: 5, subCategoryId: 47},
  {categoryId: 5, subCategoryId: 48},
  {categoryId: 5, subCategoryId: 49},
  {categoryId: 5, subCategoryId: 50},
  {categoryId: 5, subCategoryId: 51},
  {categoryId: 5, subCategoryId: 52},
  {categoryId: 5, subCategoryId: 53},
  {categoryId: 5, subCategoryId: 54},
  {categoryId: 5, subCategoryId: 55},
  {categoryId: 6, subCategoryId: 56},
  {categoryId: 6, subCategoryId: 57},
  {categoryId: 6, subCategoryId: 58},
  {categoryId: 6, subCategoryId: 59},
  {categoryId: 6, subCategoryId: 60},
  {categoryId: 6, subCategoryId: 61},
  {categoryId: 6, subCategoryId: 62},
  {categoryId: 6, subCategoryId: 63},
  {categoryId: 7, subCategoryId: 64}, //22
  {categoryId: 7, subCategoryId: 65}, //25
  {categoryId: 7, subCategoryId: 66}, //28
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
  {userId: 1, subCategoryId: 1}, //1
  {userId: 1, subCategoryId: 5}, //2
  {userId: 1, subCategoryId: 6}, //3
  {userId: 1, subCategoryId: 8}, //4
  {userId: 1, subCategoryId: 19}, //5
  {userId: 1, subCategoryId: 22}, //6
  {userId: 1, subCategoryId: 25}, //7
  {userId: 1, subCategoryId: 29}, //8
  {userId: 1, subCategoryId: 34}, //9
  {userId: 1, subCategoryId: 44}, //10
  {userId: 1, subCategoryId: 49}, //11
  {userId: 1, subCategoryId: 58}, //12
  {userId: 1, subCategoryId: 62}, //13
  {userId: 1, subCategoryId: 63}, //14
  {userId: 2, subCategoryId: 1},
  {userId: 2, subCategoryId: 3},
  {userId: 2, subCategoryId: 5},
  {userId: 2, subCategoryId: 6},
  {userId: 2, subCategoryId: 8},
  {userId: 2, subCategoryId: 10},
  {userId: 2, subCategoryId: 16},
  {userId: 2, subCategoryId: 19},
  {userId: 2, subCategoryId: 22},
  {userId: 2, subCategoryId: 25},
  {userId: 2, subCategoryId: 30},
  {userId: 2, subCategoryId: 34},
  {userId: 2, subCategoryId: 39},
  {userId: 2, subCategoryId: 45},
  {userId: 2, subCategoryId: 48},
  {userId: 2, subCategoryId: 57},
  {userId: 2, subCategoryId: 58},
  {userId: 2, subCategoryId: 62},
  {userId: 3, subCategoryId: 2},
  {userId: 3, subCategoryId: 3},
  {userId: 3, subCategoryId: 6},
  {userId: 3, subCategoryId: 9},
  {userId: 3, subCategoryId: 14},
  {userId: 3, subCategoryId: 15},
  {userId: 3, subCategoryId: 16},
  {userId: 3, subCategoryId: 24},
  {userId: 3, subCategoryId: 33},
  {userId: 3, subCategoryId: 40},
  {userId: 3, subCategoryId: 42},
  {userId: 3, subCategoryId: 55},
  {userId: 3, subCategoryId: 58},
  {userId: 3, subCategoryId: 66},
  {userId: 4, subCategoryId: 1},
  {userId: 4, subCategoryId: 2},
  {userId: 4, subCategoryId: 6},
  {userId: 4, subCategoryId: 7},
  {userId: 4, subCategoryId: 11},
  {userId: 4, subCategoryId: 20},
  {userId: 4, subCategoryId: 27},
  {userId: 4, subCategoryId: 29},
  {userId: 4, subCategoryId: 34},
  {userId: 4, subCategoryId: 36},
  {userId: 4, subCategoryId: 42},
  {userId: 4, subCategoryId: 51},
  {userId: 4, subCategoryId: 53},
  {userId: 4, subCategoryId: 57},
  {userId: 4, subCategoryId: 61},
  {userId: 4, subCategoryId: 62},
  {userId: 4, subCategoryId: 66},
  {userId: 5, subCategoryId: 1},
  {userId: 5, subCategoryId: 6},
  {userId: 5, subCategoryId: 13},
  {userId: 5, subCategoryId: 17},
  {userId: 5, subCategoryId: 22},
  {userId: 5, subCategoryId: 25},
  {userId: 5, subCategoryId: 28},
  {userId: 5, subCategoryId: 33},
  {userId: 5, subCategoryId: 34},
  {userId: 5, subCategoryId: 35},
  {userId: 5, subCategoryId: 38},
  {userId: 5, subCategoryId: 42},
  {userId: 5, subCategoryId: 46},
  {userId: 5, subCategoryId: 57},
  {userId: 5, subCategoryId: 62},
  {userId: 5, subCategoryId: 63},
  {userId: 6, subCategoryId: 2},
  {userId: 6, subCategoryId: 9},
  {userId: 6, subCategoryId: 10},
  {userId: 6, subCategoryId: 16},
  {userId: 6, subCategoryId: 26},
  {userId: 6, subCategoryId: 29},
  {userId: 6, subCategoryId: 47},
  {userId: 6, subCategoryId: 54},
  {userId: 6, subCategoryId: 66},
  {userId: 7, subCategoryId: 13},
  {userId: 7, subCategoryId: 18},
  {userId: 7, subCategoryId: 22},
  {userId: 7, subCategoryId: 25},
  {userId: 7, subCategoryId: 37},
  {userId: 7, subCategoryId: 41},
  {userId: 7, subCategoryId: 46},
  {userId: 8, subCategoryId: 4},
  {userId: 8, subCategoryId: 12},
  {userId: 8, subCategoryId: 21},
  {userId: 8, subCategoryId: 26},
  {userId: 8, subCategoryId: 29},
  {userId: 8, subCategoryId: 39},
  {userId: 8, subCategoryId: 64},
  {userId: 9, subCategoryId: 1},
  {userId: 9, subCategoryId: 3},
  {userId: 9, subCategoryId: 5},
  {userId: 9, subCategoryId: 6},
  {userId: 9, subCategoryId: 8},
  {userId: 9, subCategoryId: 19},
  {userId: 9, subCategoryId: 22},
  {userId: 9, subCategoryId: 25},
  {userId: 9, subCategoryId: 42},
  {userId: 9, subCategoryId: 44},
  {userId: 9, subCategoryId: 53},
  {userId: 9, subCategoryId: 58},
  {userId: 9, subCategoryId: 62},
  {userId: 9, subCategoryId: 63},
  {userId: 10, subCategoryId: 3},
  {userId: 10, subCategoryId: 7},
  {userId: 10, subCategoryId: 14},
  {userId: 10, subCategoryId: 16},
  {userId: 10, subCategoryId: 19},
  {userId: 10, subCategoryId: 23},
  {userId: 10, subCategoryId: 29},
  {userId: 10, subCategoryId: 31},
  {userId: 10, subCategoryId: 32},
  {userId: 10, subCategoryId: 34},
  {userId: 10, subCategoryId: 35},
  {userId: 10, subCategoryId: 39},
  {userId: 10, subCategoryId: 50},
  {userId: 10, subCategoryId: 66},
  {userId: 11, subCategoryId: 2},
  {userId: 11, subCategoryId: 4},
  {userId: 11, subCategoryId: 14},
  {userId: 11, subCategoryId: 16},
  {userId: 11, subCategoryId: 23},
  {userId: 11, subCategoryId: 29},
  {userId: 11, subCategoryId: 31},
  {userId: 11, subCategoryId: 34},
  {userId: 11, subCategoryId: 37},
  {userId: 11, subCategoryId: 40},
  {userId: 11, subCategoryId: 46},
  {userId: 11, subCategoryId: 65},
  {userId: 12, subCategoryId: 16},
  {userId: 12, subCategoryId: 23},
  {userId: 12, subCategoryId: 31},
  {userId: 12, subCategoryId: 34},
  {userId: 12, subCategoryId: 53},
  {userId: 13, subCategoryId: 1},
  {userId: 13, subCategoryId: 3},
  {userId: 13, subCategoryId: 6},
  {userId: 13, subCategoryId: 9},
  {userId: 13, subCategoryId: 13},
  {userId: 13, subCategoryId: 15},
  {userId: 13, subCategoryId: 16},
  {userId: 13, subCategoryId: 19},
  {userId: 13, subCategoryId: 22},
  {userId: 13, subCategoryId: 27},
  {userId: 13, subCategoryId: 31},
  {userId: 13, subCategoryId: 34},
  {userId: 13, subCategoryId: 38},
  {userId: 13, subCategoryId: 42},
  {userId: 13, subCategoryId: 45},
  {userId: 13, subCategoryId: 49},
  {userId: 13, subCategoryId: 57},
  {userId: 13, subCategoryId: 58},
  {userId: 13, subCategoryId: 60},
  {userId: 13, subCategoryId: 62},
  {userId: 13, subCategoryId: 66},
]

const seedData = () =>
User.bulkCreate(users)
.then(() => {
  return Activity.bulkCreate(activities)
})
.then(() => {
  return Category.bulkCreate(cats)
})
.then(() => {
  return Day.bulkCreate(days)
})
.then(() => {
  return Group.bulkCreate(groups)
})
.then(() => {
  return SubCategory.bulkCreate(subcats)
})
.then(() => {
  return UserSubCategory.bulkCreate(userSubcat)
})
.then(() => {
  return CategorySubCategory.bulkCreate(catSubcat)
})
.then(() => {
  return ActivitySubCategory.bulkCreate(activitySubcat)
})
.then(() => {
  return ActivityDay.bulkCreate(activitiesDays)
})
.then(() => {
  return GroupDay.bulkCreate(dayGroup)
})
.then(() => {
  return UserActivity.bulkCreate(userActivities)
})
.then(() => {
  return UserGroup.bulkCreate(userGroup)
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
