const User = require('./user')
const Category = require('./category')
const Day = require('./day')
const Activity = require('./activity')
const Group = require('./group')
const SubCategory = require('./subCategory')
const UserGroup = require('./userGroup')
const UserDay = require('/userDay')
const GroupDay = require('/groupDay')
const ActivityDay = require('activityDay')

//Associations
User.belongsToMany(Group, {through: UserGroup})
Group.belongsToMany(User, {through: UserGroup})
Group.belongsToMany(Day, {through: GroupDay})
Day.belongsToMany(Group, {through: GroupDay})
Activity.belongsToMany(Day, {through: ActivityDay})
Day.belongsToMany(Activity, {through: ActivityDay})
Activity.belongsToMany(Category, {through: ActivityCategory})
Category.belongsToMany(Activity, {through: ActivityCategory})
Category.belongsToMany(Product, {through: ProductCategory})
Product.belongsToMany(Order, {through: ProductOrders})
Order.belongsToMany(Product, {through: ProductOrders})

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
  UserGroup
}
