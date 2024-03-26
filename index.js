#! /usr/bin/env node
import inquirer from "inquirer";
let question = await inquirer.prompt([
    { message: "Enter Amount", type: "number", name: "amount" },
    {
        message: "Select your Currency",
        type: "list",
        name: "currency",
        choices: ["USD", "PKR", "SAR", "UAED"],
    },
    {
        message: "Select the Currency you want to convert in",
        type: "list",
        name: "convert",
        choices: ["USD", "PKR", "SAR", "UAED"],
    },
]);
if (question.currency === "USD" && question.convert === "PKR") { // usd to pkr
    console.log(question.amount * 277);
}
else if (question.currency === "USD" && question.convert === "SAR") { // usd to sar
    console.log(question.amount * 3.75);
}
else if (question.currency === "USD" && question.convert === "UAED") { // usd to uaed
    console.log(question.amount * 3.67);
}
else if (question.currency === "PKR" && question.convert === "USD") { // pkr to usd
    console.log(question.amount / 277);
}
else if (question.currency === "PKR" && question.convert === "SAR") { //  pkr to sar
    console.log(question.amount / 74.05);
}
else if (question.currency === "PKR" && question.convert === "UAED") { //  pkr to uaed
    console.log(question.amount * 0.013);
}
else if (question.currency === "SAR" && question.convert === "USD") { //  sar to usd
    console.log(question.amount / 3.75);
}
else if (question.currency === "SAR" && question.convert === "PKR") { //  sar to pkr
    console.log(question.amount * 74.05);
}
else if (question.currency === "SAR" && question.convert === "UAED") { //  sar to uaed
    console.log(question.amount * 0.98);
}
else if (question.currency === "UAED" && question.convert === "USD") { // uaed to usd
    console.log(question.amount / 3.67);
}
else if (question.currency === "UAED" && question.convert === "PKR") { //  uaed to pkr
    console.log(question.amount * 75.64);
}
else if (question.currency === "UAED" && question.convert === "SAR") { // uaed to sar
    console.log(question.amount * 1.02);
}
else {
    console.log("Invalid Input");
}
