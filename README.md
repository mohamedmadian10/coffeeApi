# coffee rest-api
This is a rest api for two screens, one for coffee machines and one for coffee pods
## install
npm install

to install node modules 


## run the app
nodemon

## run the database
open cmd and run mongod



# REST API
The REST API to the example app is described below.


# get All coffee machines
## request
"url": "localhost:3000/api/coffee_machines",
methode : "get"
# filter by product_type
"url": "localhost:3000/api/coffee_machines?product_type=large machine",
methode : "get"

# filter by water_line_compatible
"url": "localhost:3000/api/coffee_machines?water_line_compatible=true",
methode : "get"

# get All coffee pods
## request
"url": "localhost:3000/api/coffee_pods",
methode : "get"
# filter by product_type
"url": "localhost:3000/api/coffee_pods?product_type=espresso pod",
methode : "get"

# filter by coffee_flavor
"url": "localhost:3000/api/coffee_pods?coffee_flavor=vanilla",
methode : "get"

# filter by pack_size
"url": "localhost:3000/api/coffee_pods?pack_size=7 dozen",
methode : "get"

# filter by product_type and coffee_flavor
"url": "localhost:3000/api/coffee_pods?product_type=espresso pod&&coffee_flavor=vanilla",
methode : "get"





# [documentation apis] [https://www.postman.com/collections/e8db0ac4f3b22949aba3]

