const mysql = require("mysql");
const inquirer = require("inquirer");

const connection = mysql.createConnection({
    host: "localhost",
    port: 8889,
    user: "root",
    password: "root",
    database: "bamazon"
});
//sql connection with application start
connection.connect(function(err) {
    if (err) {
        console.log("connected as id " + connection.threadId);
        console.log("---------------------------------------");
    }
    action();
});


function action() {
    connection.query("SELECT * FROM products", function(err, data) {
        inquirer.prompt([{
            type: "rawlist",
            message: "What would you like to do?",
            choices: ["See All products", "Buying products"],
            name: "action"
        }]).then(function(response) {
            if (response.action === "See All products") {
                for (let i = 0; i < data.length; i++) {
                    console.log(data[i]);
                }
                action();
            } else {

                itemid();
            }
        });
    });
}


function itemid(){
    inquirer.prompt({
        type:"input",
        message:"What Item would you like to buy?",
        name:"itemid"
    }).then(function(result){
        var itemN=parseInt(result.itemid);
        quantity(itemN);
    });
}

function quantity(item) {
    inquirer.prompt({
        type: "input",
        message: "How many Item would you like to buy?",
        name: "quantity"
    }).then(function(result) {
        var quantityN = parseInt(result.quantity);
        var itemN = item;
        updateQuantity(quantityN, itemN);
    });
}

function updateQuantity(quantityN, itemN) {
    var query = "UPDATE products SET stock_quantity= stock_quantity-? where item_id=?";
    connection.query(query, [quantityN, itemN], function(err, data) {
        console.log("Thank you! You purchaed our Item Number "+itemN+" as "+quantityN+" much!");
    });
    connection.end();
}


