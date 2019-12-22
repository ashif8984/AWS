# AWS - DynamoDB
Amazon DynamoDB is a fully managed NoSQL database service that provides fast and predictable performance with seamless scalability
For more ref: https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Introduction.html

## Getting started

>With following below steps you easily run DynamoDb commands (operation) using AWS CLI.

#### Step 1: Download and install AWS- CLI
1. Refer to the link to install aws-cli msi installer: https://docs.aws.amazon.com/cli/latest/userguide/install-windows.html#install-msi-on-windows
2. Create a new user in AWS and give the programmtic access
 1. Add the installed directory of the AWS-CLI to the PATH variable in env varibales
 2. Also add the region, secret access key, access key id to the user variable in env variables
2. Create a new folder name- dynamodb and open the folder using IDE (ex: VS-Code)

#### Step 3: Initialize the folder using node init and install 'aws-sdk'
``` 
# under the terminal run the below commands
$ node init
$ node install aws-sdk --save
```
Note: check the package.json file to check if the aws-sdk has been installed.

### Step 4: Run the each file and check the result:
```
# download each file in the repo and save it locally.
# To run Table level operation open the file table-ops.js in IDE and 
  run only the below code while commenting the other section

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

# open terminal from within the IDE and navaigate to the path containing the file
# now run the below in the terminal to list the tables in dynamodb

$ node table-ops.js 
```

Likewise you can perform other operation one-by-one by running node <filename> in the terminal and commenting out other code.

### Contact me :

Contact | Link
------------- | -------------
LinkedIn:  |https://www.linkedin.com/in/ashif-eqbal-4ba85278/
Email:  | ashif8984@gmail.com
