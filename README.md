
<a name="readme-top"></a>



<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->

### Products Rest API

This project focusing on the REST API. This API is fully functional with filtering, pagination, sorting and selecting. It's fetching the data from the database and provide the products details, so you can able to use this data on the client side in your projects.

### Built With

* ![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
* ![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)
* ![MongoDB](https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white)

<!-- GETTING STARTED -->
## Getting Started
To get a local copy up and running follow these simple steps.

### Prerequisites

This is an example of how to list things you need to use the software and how to install them.
* npm
  ```sh
  npm install npm@latest -g
  ```

### Installation

1. Get a MongoDB Atlas Application connection URL at [https://www.mongodb.com/home](https://www.mongodb.com/home) by creating the database.
2. Clone the repo
   ```sh
   git clone https://github.com/Dharmik3/productsApi.git
   ```
3. Install NPM packages
   ```sh
   npm install
   ```
4. Create `.env` file and put MongoDB url in `.env`
   ```js
   MONGO_URL = ENTER YOUR MONGO URL (without inverted commas);
   ```
5. Run  following command in terminal
   ```sh
   npm start
   ```

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- USAGE EXAMPLES -->
## Usage

Now you can test your url on your browser or postman with following url
 ```js
   http://localhost:4000/api/v1/products/
   ```


_For more examples, please refer to the [live link](https://productsapi.up.railway.app/api/v1/products/)_

If you wants to pass some query parameters then the following is the example

 ```js
   https://products-myg3.onrender.com/api/v1/products/?sort=name,-price&limit=5&select=name
   ```
Below are the query parameter which is passed in the form of key value pair
* select
* limit
* page
* sort

<img width="1440" alt="productsapi1" src="https://user-images.githubusercontent.com/78194918/208819054-9a03d08e-2b16-400a-a6ef-de5227b42242.png">

<img width="1425" alt="productsapi2" src="https://user-images.githubusercontent.com/78194918/208819058-6c4829f5-a45c-4301-8a49-d5425c7174d5.png">


<p align="right">(<a href="#readme-top">back to top</a>)</p>


<!-- CONTRIBUTING -->
## Contributing

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request


<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE.txt` for more information.


<!-- CONTACT -->
## Contact

Dharmik Patel - [@dharmik](https://twitter.com/dharmikS_patel) - dharmikpatel.pepalla@gmail.com

Live Project Link: [https://productsapi.up.railway.app/api/v1/products/](https://products-myg3.onrender.com/api/v1/products)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

[product-screenshot-1]: https://github.com/Dharmik3/productsApi/blob/main/img/productsapi1.png
[product-screenshot-2]: https://github.com/Dharmik3/productsApi/blob/main/img/productsapi2.png
[Nodejs.com]: https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white
[Nodejs-url]: https://nodejs.org 
[express.com]: https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white
[express-url]: https://expressjs.com/ 
[mongodb.com]: https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white
[mongodb-url]: https://mongodb.com/ 
