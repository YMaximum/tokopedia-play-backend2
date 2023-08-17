# TOKOPEDIA PLAY (BACKEND)


## DATABASE SCHEMA
The database will be created based on `DATABASE_URL` inside `.env` file. The default value is :
```
DATABASE_URL = mongodb://127.0.0.1:27017/midtermyassar
```
There will be 3 collections inside the database :
- `videos`
- `products`
- `comments`

The details for each collections shown below
### Videos
This collection used the schema for Video as below :
``` 
{
    videoID: {
        type: String,
        required: true,
        unique: true
    },
    thumbnailUrl: {
        type: String,
        required: true
    }
}
```

### Products
This collection used the schema for Product as below :
```
{
    videoID: {
        type: String,
        required: true
    },
    productID: {
        type: String,
        required: true,
        unique: true
    },
    productUrl: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    }
}
```

### Comments
This collection used the schema for Comment as below :
```
{
    videoID: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true
    },
    comment: {
        type: String,
        required: true
    },
    timestamp: {
        type: Date,
        default: Date.now
    }
}
```

## FILE & FOLDER STRUCTURE
I put all of the code for the project inside the `internal` folder. Inside the `internal` folder, there are 4 more folder:

- controller
- models
- routes
- service

The `controller` folder contains all of the handler/controller for the API request. The `Models` folder contains all of the models/collections for the database. The `routes` folder contains all of the used routes in this project. The `service` folder contains all of the necessary logic to access data or modify data from models.

`app.js` define the express configuration and middleware. `server.js` is the entry point to the application. The server will start after `server.js` run.

## API LIST

### __*GET /api/videos*__

Returns all videos

- URL Params:
    - None
- Data Params:
    - None
- Headers:
    - Content-Type: application/json
- Success Response:
    - Code: 200
    - Content:

    ```
        [
	        {
		        "_id": string,
		        "videoID": string,
		        "thumbnailUrl": string
	        }
        ]
    ```

### __*GET /api/videos/:videoID/products*__

Returns all products with specified parameter `videoID`

- URL Params:
    - *Required*: `videoID=[string]`
- Data Params:
    - None
- Headers:
    - Content-Type: application/json
- Success Response:
    - Code: 200
    - Content:

    ```
        [
	        {
		        "_id": string,
		        "videoID": string,
		        "productID": string,
		        "productUrl": string,
		        "title": string,
		        "price": number
	        }
        ]
    ```

### __*GET /api/videos/:videoID/comments*__

Returns all comments with specified parameter `videoID`

- URL Params:
    - *Required*: `videoID=[string]`
- Data Params:
    - None
- Headers:
    - Content-Type: application/json
- Success Response:
    - Code: 200
    - Content:

    ```
        [
	        {
		        "_id": string,
		        "videoID": string,
		        "username": string,
		        "comment": string,
		        "timestamp": date
	        }
        ]
    ```

### __*POST /api/videos*__

Create a new Video and returns the new object

- URL Params:
    - None
- Data Params:

    ```
        {
            "videoID": string,
	        "thumbnailUrl": string
        }   
    ```
- Headers:
    - Content-Type: application/json
- Success Response:
    - Code: 201
    - Content:

    ```
        {
            "videoID": string,
	        "thumbnailUrl": string
        }  
    ```

### __*POST /api/videos/:videoID/addProduct*__

Create a new Product for the specified parameter `videoID` and returns the new object

- URL Params:
    - None
- Data Params:

    ```
        {
            "productID": string,
            "productUrl": string,
	        "title": string,
	        "price": number
        } 
    ```
- Headers:
    - Content-Type: application/json
- Success Response:
    - Code: 201
    - Content:

    ```
        {
            "productID": string,
            "productUrl": string,
	        "title": string,
	        "price": number
        } 
    ```

### __*POST /api/videos/:videoID/addComment*__

Create a new Comment for the specified parameter `videoID` and returns the new object

- URL Params:
    - None
- Data Params:

    ```
        {
            "username": string,
            "comment": string
        }
    ```
- Headers:
    - Content-Type: application/json
- Success Response:
    - Code: 201
    - Content:

    ```
        {
            "username": string,
            "comment": string
        }
    ```




## HOW TO RUN

1. Download the code or clone the repository

    ```bash
    git clone https://github.com/YMaximum/tokopedia-play-backend.git
    ```
2. Install dependencies

    ```bash
    npm install
    ```
3. Open the `.env` file to edit your database connection url and server port. Example for default:

    ```
    DATABASE_URL = mongodb://127.0.0.1:27017/midtermyassar
    PORT = 3000
    ```

4. Run the server

    ```bash
    npm run start
    ```

5. Server will run on

    ```
    http://localhost:PORT
    ```

## HOW TO TEST API

I'm not providing an initial data for the database, so you must add your own data using `POST` method provided in the API. The data params of `POST` method for each API routes already shown at the API list section. Enter the data params in JSON format with the right data type. After you add your data to the database, you can test the `GET` method using API routes provided above.

## CONTACT

Kindly reach out to me through my email : *yassarnaufal@gmail.com*