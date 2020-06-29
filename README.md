# SPOON FORK LAVENDER <!-- omit in toc -->

## Project Planning

> The Project Planning section should be completed for your project pitch with instructors.
>
> To ensure correct Markdown, I recommend cloning this wiki and copy/pasting the raw template code.

<br>

### Description

_**SPOON FORK LAVENDER** is a restaurant discovery app that allows the users to search restaurants/cafes/bars in New York City. The user is able search for restaurant which will then display a list of restaurants. The user is able to click the restaurant from the list, which provides a more detailed card of the restaurant with the name, locality, type of cuisine, address and price range of the restaurant, as well as click on the "learn more" button that will lead them to the website of the restaurant. 

<br>

### Wireframes

> Use the Wireframes section to display desktop, tablet and mobile views.


![Landing Page](https://i.ibb.co/9318tjL/Homepage-2x.png)

- Desktop Landing

![Search Page](https://i.ibb.co/LNRdfXV/Web-1920-1.png[/img)

- Desktop Body

![Information Index](https://i.ibb.co/HqNDGHL/Web-1920-2-2x.png)

- Desktop Resource Index

![Tablet Resource](https://i.ibb.co/GH0NTxV/iPad-2.png)

- Tablet Resource Index

![Mobile Resource Index](https://i.ibb.co/DbZCQ3j/iPhone.png)

- Mobile Resource Index

<br>

### MVP

> The Minimum Viable Product should be a well-planned and easily-communicated product, ensuring that the client's deliverable will be achievable and meet specifications within the time frame estimated.

_The **SPOON FORK LAVENDER** MVP requirements: The app will have a search feature that allows the user to search restaurants by location (locality) and type of cuisine in a search bar. After entering the data in a search bar, the user will be able to display the restaurants on page and click-through for more information. 

<br>

#### MVP Goals

— Homepage: Design a homepage with a "enter" feature that allows user to scroll down for more information.<br>
— Search Page: Implementation of the Zomato API/Yelp API via Search Bar that will allow users to search for the restaurant based on city or type of cuisine. <br>
— List of Restaurants Page: This page will generate a list of restaurants once the Search button is clicked on the previous page.<br>
— Restaurant Details Page: This page will generate one restaurant with the image and details of the restaurant.
<br>

#### MVP API

> Use the Data Section to define the API(s) you will be consuming for your project, inluding sample URL queries.

|    API     | Quality Docs? | Documentation | Sample Query                            |
| :--------: | :-----------: | :------------ | :-------------------------------------- |
| Yelp API |      yes      | https://www.yelp.com/developers/documentation/v3/get_started | TBD -- I need help with this! |

Sample Query Results:

```

{
  "total": 8228,
  "businesses": [
    {
      "rating": 4,
      "price": "$",
      "phone": "+14152520800",
      "id": "E8RJkjfdcwgtyoPMjQ_Olg",
      "alias": "four-barrel-coffee-san-francisco",
      "is_closed": false,
      "categories": [
        {
          "alias": "coffee",
          "title": "Coffee & Tea"
        }
      ],
      "review_count": 1738,
      "name": "Four Barrel Coffee",
      "url": "https://www.yelp.com/biz/four-barrel-coffee-san-francisco",
      "coordinates": {
        "latitude": 37.7670169511878,
        "longitude": -122.42184275
      },
      "image_url": "http://s3-media2.fl.yelpcdn.com/bphoto/MmgtASP3l_t4tPCL1iAsCg/o.jpg",
      "location": {
        "city": "San Francisco",
        "country": "US",
        "address2": "",
        "address3": "",
        "state": "CA",
        "address1": "375 Valencia St",
        "zip_code": "94103"
      },
      "distance": 1604.23,
      "transactions": ["pickup", "delivery"]
    },
    // ...
  ],
  "region": {
    "center": {
      "latitude": 37.767413217936834,
      "longitude": -122.42820739746094
    }
  }
}

```

<br>

#### MVP Libraries & Dependencies

> Use this section to list the key supporting libraries and their role in the project.

|   Library    | Description                                |
| :----------: | :----------------------------------------- |
|    React     | using react to build out the application   |
| React Router | Use React Router to build componenets.     |

<br>

#### MVP Components

> Use this section to define your React components and the data architecture of your app.

```
src
|__ assets/
      |__ data-tests
      |__ fonts
      |__ images
      |__ wireframes
|__ components/
      |__ Header.jsx
      |__ Search Bar.jsx
      |__ FoodList.jsx
      |__ FoodDetails.jsx
      |__ Homepage.jsx
      |__ Footer.jsx
```

<br>

#### MVP Breakdown

> Use this section to go into further depth regarding every component, including breaking down the components as stateless or stateful, and considering the passing of data between those components.

|  Component   |    Type    | state | props | hooks | Description                                |
| :----------: | :--------: | :---: | :---: | :---: | :----------------------------------------- |
|    App.js    |   class    |   x   |   x   |   x   | TBD |
|    Header    | functional |   x   |   x   |   x   | TBD |
|  FoodList    | functional |   x   |   x   |   x   | TBD |
|  FoodDetail  | functional |   x   |   x   |   x   | TBD |
|   Homepage   | functional |   x   |   x   |   x   | TBD |
|    Footer    | functional |   x   |   x   |   x   | TBD |


<br>

#### MVP Timeframes

> Use this section to estimate the time necessary to build out each of the components you've described above. 
>
> Time frames are key to the development cycle. You have limited time to code your app, and your estimates can then be used to evalute possibilities of your MVP and post-MVP based on time needed. It's best you assume an additional hour for each component, as well as a few hours added to the total time, to play it safe.

| Task             | Priority | Estimated Time | Time Invested | Actual Time |
| ---------------- | :------: | :------------: | :-----------: | :---------: |
| App.js           |    H     |     5 hrs      |     X         |      TBD      |
| FoodList         |    H     |     5 hrs      |     X     |     TBD     |
| FoodDetails      |    H     |     5 hrs      |     X     |     TBD     |
| Homepage         |    M     |     5 hrs      |     X     |     TBD     |
| Search Bar       |    H     |     5 hrs      |     X     |     TBD     |
| Accessing the API |    H     |     2 hrs      |     X     |     TBD     |
| STYLING          |    H     |     8 hrs      |     X     |     TBD     |
| TOTAL            |          |     40 hrs      |     X     |     TBD     |

<br>

### Post-MVP

> Use this section to document ideas you've had that would be fun (or necessary) for your Post-MVP. This will be helpful when you return to your project after graduation!

I would love the generate a random restaurant generator or a map feature on the app! 

<br>

***

## Project Delivery

> The Project Delivery section should be completed as your work on your project.

### Code Showcase

> Use this section to include a brief code snippet of functionality that you are proud of and a brief description.

### Code Issues & Resolutions

> Use this section to list of all major issues encountered and their resolution, if you'd like.
