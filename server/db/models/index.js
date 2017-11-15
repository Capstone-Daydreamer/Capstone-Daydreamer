const User = require('./user')
const Category = require('./category')
const Day = require('./day')
const Activity = require('./activity')
const Group = require('./group')
const SubCategory = require('./subCategory')
const UserGroup = require('./userGroup')
const UserActivity = require('./userActivity')
const GroupDay = require('./groupDay')
const ActivityDay = require('./activityDay')
const ActivitySubCategory = require('./activitySubCategory')
const CategorySubCategory = require('./categorySubCategory')
const UserSubCategory = require('./userSubCategory')

//Associations
User.belongsToMany(Group, {through: UserGroup})
Group.belongsToMany(User, {through: UserGroup})
User.belongsToMany(Activity, {through: UserActivity})
Activity.belongsToMany(User, {through: UserActivity})
User.belongsToMany(SubCategory, {through: UserSubCategory})
SubCategory.belongsToMany(User, {through: UserSubCategory})
Group.belongsToMany(Day, {through: GroupDay})
Day.belongsToMany(Group, {through: GroupDay})
Activity.belongsToMany(Day, {through: ActivityDay})
Day.belongsToMany(Activity, {through: ActivityDay})
Activity.belongsToMany(SubCategory, {through: ActivitySubCategory})
SubCategory.belongsToMany(Activity, {through: ActivitySubCategory})
Category.belongsToMany(SubCategory, {through: CategorySubCategory})
SubCategory.belongsToMany(Category, {through: CategorySubCategory})

/**
 * We'll export all of our models here, so that any time a module needs a model,
 * we can just require it from 'db/models'
 * for example, we can say: const {User} = require('../db/models')
 * instead of: const User = require('../db/models/user')
 */
module.exports = {
  User,
  Category,
  Day,
  Activity,
  Group,
  SubCategory,
  UserGroup,
  UserActivity,
  GroupDay,
  ActivityDay,
  ActivitySubCategory,
  CategorySubCategory,
  UserSubCategory
}
