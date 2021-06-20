## Week 2 Assignment: Student Store

Submitted by: **Robert Velasco**

Deployed Application: [Student Store Deployed Site](https://glib-reading.surge.sh/#)

### Application Features

#### CORE FEATURES

- [x] The API should contain an endpoint that serves an array of all products in the store
- [x] A Store model should handle all data management logic for the API and be the interface for read/write operations to the JSON file.
- [x] The frontend should include a landing page that displays the products available for purchase.
- [x] Each product should have an individual page that shows the details of the product.

#### STRETCH FEATURES

- [x] Deploy your website with Heroku & Surge. 
- [ ] An endpoint should exist for creating orders and saving them to a JSON file. Each order should contain the email of the person placing the order, the items associated with the order, and the quantity of each item purchased.
- [ ] There should be a `Sidebar` component that appears on every page and has two states - `open` and `closed`. When the sidebar is opened, it should display a shopping cart of all the products the user currently has in their cart. It should also calculate and display the total amount in dollars for the checked-out items. When it's closed, the sidebar should be much thinner and not display its internal content.
- [ ] A checkout form should be available that allows the user to enter their email and send their order to the API.
- [ ] Create an endpoint for fetching all orders in the database, and an endpoint for serving an individual order based on its id.
- [ ] Create an endpoint that serves only a single product based on the product's id
- [ ] Build a page in the UI that displays the list of all past orders and lets the user click on any individual order to take them to a more detailed page of the transaction.
- [ ] Allow users to use an input to filter orders by the email of the person who placed the order.

### Walkthrough Video

Initial Submit:
https://www.loom.com/share/9e12fabb91e6439e8beda07fb871c802

Updated Cart Functionality:
https://www.loom.com/share/78b87c56aae84567bc172c740e2f294c

### Reflection

* Did the topics discussed in your labs prepare you to complete the assignment? Be specific, which features in your weekly assignment did you feel unprepared to complete?

Yes, the lab topics were incredibly helpful. Personally, I had some trouble understanding the dynamic routing in react, but I watched that specific lecture video from Day 3
many times over to understand. I felt prepared to complete most of the weekly assignmnent with what we learned, excpet for the sidebar. For the most part, it was a CSS battle.

* If you had more time, what would you have done differently? Would you have added additional features? Changed the way your project responded to a particular event, etc.
  
I don't I would have changed anything about my process. I'm happy with my plan for developing this assignment. 
Given more time, I had a number of different fetaures I would have liked to implement (which I will work on during my own time after submission). 
Firstly, I want to complete my sidebar functionality, where users can add items to their cart and submit and order.
Moreover, I want to implement a search bar that can find products by name and pull up their individual product page.
I want to add some filter buttons that change the displayed products on the Home feed based on product categories. 
I want to add a page for users to review their order history.

* Reflect on your project demo, what went well? Were there things that maybe didn't go as planned? Did you notice something that your peer did that you would like to try next time?

I think my project demo went well. I wish I spent some time talking about my wireframe and development process for the assignment however.

### Open-source libraries used

- https://fonts.google.com/specimen/Raleway#standard-styles
- https://react-icons.github.io/react-icons/icons?name=ai

### Shout out

I would like to shoutout Stephanie. We worked together on Wednesday's lab, which is the day I think I learned the most. I really enjoyed debugging our code together.
We were both learning at the same pace which was really nice, and she shared a number of useful resources for styling.
