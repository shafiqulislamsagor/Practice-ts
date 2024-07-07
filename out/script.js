"use strict";
// console.log('Starting')
const response1 = {
    status: 200,
    type: "success",
    data: {
        message: "Data fetched successfully"
    }
};
const response2 = {
    status: 404,
    type: "error",
    data: "Data not found"
};
console.log(response1);
