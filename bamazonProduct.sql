DROP DATABASE IF EXISTS bamazon_db;
CREATE DATABASE bamazon;

CREATE TABLE products(
item_id INTEGER(11) AUTO_INCREMENT NOT NULL,
product_name varchar(55),
department_name varchar(55),
price INTEGER(50),
stock_quantity varchar(30),
PRIMARY KEY(item_id)
);

insert into products (product_name,department_name,price,stock_quantity) values("TV","Electrics",100,10);
insert into products (product_name,department_name,price,stock_quantity) values("Computer","Electrics",200,20);
insert into products (product_name,department_name,price,stock_quantity) values("IPHONE","Electrics",50,100);
insert into products (product_name,department_name,price,stock_quantity) values("Milk","Food",2,1000);
insert into products (product_name,department_name,price,stock_quantity) values("Orange","Food",1,10000);
insert into products (product_name,department_name,price,stock_quantity) values("Gum","Food",1,20000);
insert into products (product_name,department_name,price,stock_quantity) values("Tshirt","Clothes",10,1000);
insert into products (product_name,department_name,price,stock_quantity) values("Pents","Clothes",60,300);
insert into products (product_name,department_name,price,stock_quantity) values("Shoes","Shoes",50,1000);
insert into products (product_name,department_name,price,stock_quantity) values("Coffee","Foot",5,1000);

