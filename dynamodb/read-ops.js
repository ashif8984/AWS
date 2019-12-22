
const AWS = require("aws-sdk");
AWS.config.update({ region: 'us-east-2'});

const docClient = new AWS.DynamoDB.DocumentClient();

// ---------------------------------------
// Read Data from DynamoDB Table
// ---------------------------------------

// docClient.get({
//     TableName: 'td_notes_sdk',
//     Key:{
//         user_id: 'abc',
//         timestamp:1
//     }

// }, (err, data) =>{
//     if(err) {
//         console.log(err);

//     }else{
//         console.log(data);
//     }
// });

// -------------------------------------------
// Perform Query Operation from DynamoDB Table
// -------------------------------------------

// docClient.query({
//     TableName: 'td_notes_sdk',
//     KeyConditionExpression: "user_id = :uid",
//     ExpressionAttributeValues: {
//         ":uid" : "abc"
//     }

// }, (err, data) =>{
//     if(err) {
//         console.log(err);

//     }else{
//         console.log(data);
//     }
// });

// ----------------------------------------------------------
// Scan from DynamoDB Table
//  Note:     Scan = query against all the partition
//           Query = query against single  partition
// ---------------------------------------------------------

// docClient.scan({

//     TableName: 'td_notes_sdk',
//     FilterExpression: "title = :title",
//     ExpressionAttributeValues: {
//         ":title": "Tile 11"
//     }
// }, (err, data) =>{
//     if(err) {
//         console.log(err);

//     }else{
//         console.log(data);
//     }
// });


// ----------------------------------------------------
// Batch Read from Multiple Table in DynamoDB 
// -----------------------------------------------------

docClient.batchGet({

    RequestItems: {
        'td_notes_sdk': {
          Keys: [
            {
               user_id: 'abc',
               timestamp: 1
            },
          ]
        },
        'td_notes1': {
          Keys: [
            { 
                user_id: '343sdfn', 
                timestamp: 1576757122
            },
          ]
        }
      }

}, (err, data) =>{
    if(err) {
        console.log(err);

    }else{
        console.log(data);
        console.log(JSON.stringify(data, null,2 ));
    }
});