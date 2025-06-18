// използааме базата
use cross_bike_shop

// създаване всички колекции 
db.createCollection('users')
db.createCollection('bikes')
db.createCollection('orders')
db.createCollection('reviews')
db.createCollection('accessories')

db.users.insertMany([
  { "_id": 1, "name": "Иван Иванов", "email": "ivan1@gmail.bg", "created_at": "2025-06-01", "address": "София, бул. Велосипедна 1" },
{ "_id": 2, "name": "Мария Петрова", "email": "maria2@abv.bg", "created_at": "2025-06-02", "address": "Пловдив, ул. Байк 22" },
{ "_id": 3, "name": "Георги Димитров", "email": "georgi3@gmail.bg", "created_at": "2025-06-03", "address": "Варна, бул. МТБ 3" },
{ "_id": 4, "name": "Николай Николов", "email": "nikolay4@gmail.bg", "created_at": "2025-06-04", "address": "Русе, ул. Трейл 4" },
{ "_id": 5, "name": "Елена Алексиева", "email": "elena5@gmail.bg", "created_at": "2025-06-05", "address": "Бургас, бул. Райдър 5" },
{ "_id": 6, "name": "Стоян Георгиев", "email": "stoyan6@gmail.bg", "created_at": "2025-06-06", "address": "Плевен, ул. Шок 6" },
{ "_id": 7, "name": "Росица Тодорова", "email": "rosica7@abv.bg", "created_at": "2025-06-07", "address": "Стара Загора, ул. Велофан 7" },
{ "_id": 8, "name": "Ангел Иванов", "email": "angel8@abv.bg", "created_at": "2025-06-08", "address": "Шумен, бул. Спортен 8" },
{ "_id": 9, "name": "Теодора Христова", "email": "teodora9@abv.bg", "created_at": "2025-06-09", "address": "Хасково, ул. Тандем 9" },
{ "_id": 10, "name": "Петър Петров", "email": "petar10@abv.bg", "created_at": "2025-06-10", "address": "Перник, ул. Каска 10" }
])

db.bikes.insertMany([
  { "_id": 1, "brand": "KTM", "model": "Wild Cross 1", "price": 1299, "stock": 5, "frame_material": "алуминий", "wheel_size": 29, "suspension": "предна" },
{ "_id": 2, "brand": "Cube", "model": "Nature Pro", "price": 1549, "stock": 8, "frame_material": "въглерод", "wheel_size": 27, "suspension": "двойна" },
{ "_id": 3, "brand": "Scott", "model": "Aspect 950", "price": 1399, "stock": 6, "frame_material": "алуминий", "wheel_size": 29, "suspension": "предна" },
{ "_id": 4, "brand": "Drag", "model": "ZX Trail", "price": 1199, "stock": 7, "frame_material": "алуминий", "wheel_size": 27, "suspension": "двойна" },
{ "_id": 5, "brand": "Specialized", "model": "Rockhopper", "price": 1699, "stock": 4, "frame_material": "въглерод", "wheel_size": 29, "suspension": "предна" },
{ "_id": 6, "brand": "Bianchi", "model": "Magma", "price": 1899, "stock": 5, "frame_material": "алуминий", "wheel_size": 29, "suspension": "двойна" },
{ "_id": 7, "brand": "Trek", "model": "Marlin 7", "price": 1799, "stock": 3, "frame_material": "въглерод", "wheel_size": 27, "suspension": "предна" },
{ "_id": 8, "brand": "Cannondale", "model": "Trail 5", "price": 1499, "stock": 6, "frame_material": "алуминий", "wheel_size": 29, "suspension": "двойна" },
{ "_id": 9, "brand": "Ghost", "model": "Kato", "price": 1599, "stock": 5, "frame_material": "алуминий", "wheel_size": 27, "suspension": "предна" },
{ "_id": 10, "brand": "Merida", "model": "Big Nine", "price": 1499, "stock": 4, "frame_material": "въглерод", "wheel_size": 29, "suspension": "двойна" }
])

db.orders.insertMany([
  { "_id": 1, "user_id": 1, "items": [ { "product_type": "bike", "product_id": 1, "quantity": 1 }, { "product_type": "accessory", "product_id": 1, "quantity": 2 } ], "total_price": 1359, "order_date": "2025-06-05" },
{ "_id": 2, "user_id": 2, "items": [ { "product_type": "bike", "product_id": 2, "quantity": 1 } ], "total_price": 1549, "order_date": "2025-06-06" },
{ "_id": 3, "user_id": 3, "items": [ { "product_type": "bike", "product_id": 3, "quantity": 1 }, { "product_type": "accessory", "product_id": 3, "quantity": 1 } ], "total_price": 1419, "order_date": "2025-06-07" },
{ "_id": 4, "user_id": 4, "items": [ { "product_type": "bike", "product_id": 4, "quantity": 1 } ], "total_price": 1199, "order_date": "2025-06-08" },
{ "_id": 5, "user_id": 5, "items": [ { "product_type": "bike", "product_id": 5, "quantity": 1 } ], "total_price": 1699, "order_date": "2025-06-09" },
{ "_id": 6, "user_id": 6, "items": [ { "product_type": "accessory", "product_id": 5, "quantity": 2 } ], "total_price": 70, "order_date": "2025-06-10" },
{ "_id": 7, "user_id": 7, "items": [ { "product_type": "bike", "product_id": 7, "quantity": 1 } ], "total_price": 1799, "order_date": "2025-06-11" },
{ "_id": 8, "user_id": 8, "items": [ { "product_type": "bike", "product_id": 8, "quantity": 1 }, { "product_type": "accessory", "product_id": 8, "quantity": 1 } ], "total_price": 1524, "order_date": "2025-06-12" },
{ "_id": 9, "user_id": 9, "items": [ { "product_type": "bike", "product_id": 9, "quantity": 1 } ], "total_price": 1599, "order_date": "2025-06-13" },
{ "_id": 10, "user_id": 10, "items": [ { "product_type": "accessory", "product_id": 10, "quantity": 1 } ], "total_price": 40, "order_date": "2025-06-14" }
])

db.accessories.insertMany([
  { "_id": 1, "name": "Каска X1", "category": "каски", "price": 30, "stock": 10 },
{ "_id": 2, "name": "Гума GripMax", "category": "гуми", "price": 45, "stock": 12 },
{ "_id": 3, "name": "Бутилка за вода", "category": "бутилки", "price": 20, "stock": 8 },
{ "_id": 4, "name": "Педали MTB", "category": "педали", "price": 60, "stock": 6 },
{ "_id": 5, "name": "Помпа Roadie", "category": "помпи", "price": 35, "stock": 7 },
{ "_id": 6, "name": "Светлина Ultra", "category": "светлини", "price": 70, "stock": 5 },
{ "_id": 7, "name": "Каска ProRider", "category": "каски", "price": 55, "stock": 4 },
{ "_id": 8, "name": "Грипове Gel", "category": "ръкохватки", "price": 25, "stock": 10 },
{ "_id": 9, "name": "Звънец Sonic", "category": "аксесоари", "price": 15, "stock": 11 },
{ "_id": 10, "name": "Стойка за телефон", "category": "аксесоари", "price": 40, "stock": 9 }
])

db.reviews.insertMany([
  { "_id": 1, "user_id": 1, "bike_id": 1, "rating": 5, "comment": "Перфектен байк за офроуд!", "created_at": "2025-06-07" },
{ "_id": 2, "user_id": 2, "bike_id": 2, "rating": 4, "comment": "Стабилен и лек.", "created_at": "2025-06-08" },
{ "_id": 3, "user_id": 3, "bike_id": 3, "rating": 3, "comment": "Очаквах по-добро окачване.", "created_at": "2025-06-09" },
{ "_id": 4, "user_id": 4, "bike_id": 4, "rating": 4, "comment": "Много удобен!", "created_at": "2025-06-10" },
{ "_id": 5, "user_id": 5, "bike_id": 5, "rating": 5, "comment": "Прекрасна инвестиция.", "created_at": "2025-06-11" },
{ "_id": 6, "user_id": 6, "bike_id": 6, "rating": 2, "comment": "Твърде тежък.", "created_at": "2025-06-12" },
{ "_id": 7, "user_id": 7, "bike_id": 7, "rating": 5, "comment": "Идеален за планини!", "created_at": "2025-06-13" },
{ "_id": 8, "user_id": 8, "bike_id": 8, "rating": 3, "comment": "ОК за цената.", "created_at": "2025-06-14" },
{ "_id": 9, "user_id": 9, "bike_id": 9, "rating": 4, "comment": "Добро управление.", "created_at": "2025-06-15" },
{ "_id": 10, "user_id": 10, "bike_id": 10, "rating": 3, "comment": "Не съм доволен от спирачките.", "created_at": "2025-06-16" }
])
