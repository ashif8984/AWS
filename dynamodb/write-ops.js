
const AWS = require("aws-sdk");
AWS.config.update({ region: 'us-east-2'});

const docClient = new AWS.DynamoDB.DocumentClient();

// ---------------------------------------
// To Write data to DynamoDB Table
// ---------------------------------------

// docClient.put({

//     TableName: 'td_notes_sdk',
//     Item: {
//         user_id: 'bb',
//         timestamp: 2,
//         title: 'changed title',
//         content: 'changed content'

//     }
// }, (err, data) =>{
//     if(err) {
//         console.log(err);

//     }else{
//         console.log(data);
//     }
// });

// -----------------------------------------
// To Update data within the DynamoDB Table
// -----------------------------------------

// docClient.update({
//     TableName : 'td_notes_sdk',
//     Key: {
//         user_id: 'bb',
//         timestamp: 1
//     },
//     UpdateExpression: 'set #t = :t',
//     ExpressionAttributeNames: {
//         '#t': 'title'
//     },
//     ExpressionAttributeValues:{
//         ':t': "Updated title"
//     }
    
// },(err, data) =>{
//         if(err) {
//             console.log(err);
    
//         }else{
//             console.log(data);
//         }
//     });


// ---------------------------------------
// To Delete the data from DynamoDB Table
// ---------------------------------------
// docClient.delete({
//     TableName: 'td_notes_sdk',
//     Key: {
//         user_id: 'bb',
//         timestamp: 1
//     }

// },(err, data) =>{
//             if(err) {
//                 console.log(err);
        
//             }else{
//                 console.log(data);
//             }
//         });

// ---------------------------------------
// To Batch Operation on DynamoDB Table
// ---------------------------------------

docClient.batchWrite({

    RequestItems: {
        'td_notes_sdk': [
            {
                DeleteRequest: {
                    Key: {
                        user_id: 'bb',
                        timestamp: 2
                    }
                }
            },
                {
                    PutRequest:{
                        Item:{
                            user_id: '11',
                            timestamp: 1,
                            title: 'Tile 11',
                            content: 'Content11'
,
                        }
                    }
                }
        ]
    }

    
},(err, data) =>{
                if(err) {
                    console.log(err);
            
                }else{
                    console.log(data);
                }
            });
    
    

