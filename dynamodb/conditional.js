
const AWS = require("aws-sdk");
AWS.config.update({ region: 'us-east-2'});

const docClient = new AWS.DynamoDB.DocumentClient();

// ------------------------------------------------------------
// Conditional Wrties
// Are Idempotent- Only the first write request is considered
// -------------------------------------------------------------
docClient.put({

    TableName: 'td_notes_sdk',
    Item: {
        user_id: 'abc',
        timestamp: 1,
        title: 'Changed title',
        content: 'Changed content'

    },
    ConditionExpression: '#t <> :t' ,
    ExpressionAttributeNames: {
        '#t' : "timestamp"
    },
    ExpressionAttributeValues:{
        ':t' : 1
    }
}, (err, data) =>{
    if(err) {
        console.log(err);

    }else{
        console.log(data);
    }
});
