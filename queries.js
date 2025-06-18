// използваме базата
use cross_bike_shop

// всички потребители
db.users.find()
// всички поръчки
db.orders.find()

// потребител с имейл ivan1@gmail.bg
db.users.find({ email: "ivan1@gmail.bg" })
// поръчки на потребител 1
db.orders.find({ user_id: 1 })

// потребител с име и адрес в София
db.users.find({ name: "Иван Иванов", address: /София/ })
// поръчки с обща стойност над 1500
db.orders.find({ total_price: { $gt: 1500 } })

// промяна на имейл на потребител 1
db.users.updateOne({ _id: 1 }, { $set: { email: "ivan@abv.bg" } })

// промяна на цена на велосипед 2
db.bikes.updateOne({ _id: 2 }, { $set: { price: 1499 } })

// добавяне на 3 броя към аксесоар 3
db.accessories.updateOne({ _id: 3 }, { $inc: { stock: 3 } })

// промяна на общата сума на поръчка 2
db.orders.updateOne({ _id: 2 }, { $set: { total_price: 1499 } })

// промяна на коментар в отзив 3
db.reviews.updateOne({ _id: 3 }, { $set: { comment: "Подобрено окачване след сервиз" } })

// изтриване на потребител 10
db.users.deleteOne({ _id: 10 })

// изтриване на велосипед с ID 10
db.bikes.deleteOne({ _id: 10 })

// изтриване на аксесоар 10
db.accessories.deleteOne({ _id: 10 })

// изтриване на поръчка 10
db.orders.deleteOne({ _id: 10 })

// групиране и броене на велосипеди по вид окачване
db.bikes.aggregate([
  { $group: { _id: "$suspension", count: { $sum: 1 } } }
])

// средна цена на аксесоари по категория
db.accessories.aggregate([
  { $group: { _id: "$category", avgPrice: { $avg: "$price" } } }
])

// обща сума на поръчки по потребител
db.orders.aggregate([
  { $group: { _id: "$user_id", totalSpent: { $sum: "$total_price" } } }
])

// средбна оценка на велосипеди
db.reviews.aggregate([
  { $group: { _id: "$bike_id", avgRating: { $avg: "$rating" } } },
  { $sort: { avgRating: -1 } }
])

// аксесоари с цена под 50 сортирани по цена
db.accessories.aggregate([
  { $match: { price: { $lt: 50 } } },
  { $sort: { price: 1 } }
])

