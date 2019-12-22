const AWS = require("aws-sdk");
AWS.config.update({ region: 'us-east-2'});

const dynamodb = new AWS.DynamoDB();

// ---------------------------------------
// To List the Tables in DynamoDB
// ---------------------------------------

dynamodb.listTables({}, (err, data) => {
  if (err) {
      console.log(err); // an error occurred
  }else{     
      console.log(data);
  } 
});

// -----------------------------------------------------
// To Describe (table and metadata) about the table
// -----------------------------------------------------

dynamodb.describeTable({
    TableName: "td_notes_sdk"

}, (err, data) => {

  if (err) {
          console.log(err); // an error occurred
      }else{     
          console.log(JSON.stringify(data, null, 2));
        //   console.log(data);
      } 
    });
    

// ---------------------------------------
// To Create a Table in DynamoDB
// ---------------------------------------

dynamodb.createTable({

    TableName: "td_notes_sdk",
    AttributeDefinitions:[
        {
            AttributeName: "user_id",
            AttributeType: "S"
        },
        {
            AttributeName: "timestamp",
            AttributeType: "N"

        }
    ],
    KeySchema:[
        {
            AttributeName: "user_id",
            KeyType: "HASH"

        },
        {
            AttributeName: "timestamp",
            KeyType: "RANGE"
        }
    ],
    ProvisionedThroughput:{
        ReadCapacityUnits: 1,
        WriteCapacityUnits: 1
    }

    }, (err, data) => {


      if (err) {
              console.log(err); // an error occurred
          }else{     
              console.log(JSON.stringify(data, null, 2));
            //   console.log(data);
          } 
        });


// ---------------------------------------
// To Update the Table in DynamoDB
// ---------------------------------------

dynamodb.updateTable({

    TableName: "td_notes_sdk",
    ProvisionedThroughput: {
        ReadCapacityUnits: 2,
        WriteCapacityUnits: 1
    }
    
}, (err, data) => {

    if (err) {
              console.log(err); // an error occurred
          }else{     
              console.log(JSON.stringify(data, null, 2));
            //   console.log(data);
          } 
});



// ---------------------------------------
// To Delete the Table 
// ---------------------------------------


dynamodb.deleteTable({
    TableName: "td_notes_sdk"

},(err, data) => {

        if (err) {
                  console.log(err); // an error occurred
              }else{     
                  console.log(JSON.stringify(data, null, 2));
                //   console.log(data);
              } 
    
    
    });
    