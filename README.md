# Omozan

  Omozan is a clone of Amazon - an e-commerce website where user can order goods from different categories. In Omozan app you can browse different categories of products. In order to add a product to the shopping cart - user needs to create an account and be signed in. Users are able to add, edit or delete their reviews for products. Once items are added to the shopping cart user can adjust quantity of the products in the cart remove them from the cart, or purchase said products. Users also can search app for specific products via search bar.
  
  
# Thechnologies

This project is implemented with following technologies:
* PostgreSQL for data base
* Ruby on Rails - framework for back-end
* JavaScript
* React/Redux
* SCSS
* Webpack and Babel to bundle and transpile the source JavaScript code
* npm to manage project dependencies

# Functionality
In Omozan App, users are able to:
* Create a personal account or use a Demo User to explore webapp functionality
  - ![signup](./app/assets/images/Readme/signup.png)
  - ![login](app/assets/images/Readme/login.png)
  - ![Demouser](app/assets/images/Readme/demo_user.png)
* Users can see featured products on a front page and browse products by category or view all products for sale
  - ![featured](./app/assets/images/Readme/featured_items.png)
  - ![category](./app/assets/images/Readme/category.png)
  - ![category_list](./app/assets/images/Readme/category_list.png)
* Users can view details and image of individual item and its reviews
  - ![details](./app/assets/images/Readme/details.png)
  - ![reviews](./app/assets/images/Readme/reviews.png)
* Users can leave a custom review for products, later edit or delete those reviews. Each user can leave only one review for product
  - ![create_review](./app/assets/images/Readme/create_review.png)
  - ![review_form](./app/assets/images/Readme/review_form.png)
* Users can search for a specific product using the search bar in the header
  - ![searchbar](./app/assets/images/Readme/searchbar.png)
  - ![search_result](./app/assets/images/Readme/search_result.png)

# Code snippets
* Products index fetches products for given category and populates page with product index item by passing product data in each tab, where product item procces data and outputs iformation on given product
* Create/Edit Revies button is dinamic. User is allowed only one review per product, so after creating a review - button changes from "Create review" to "Edit review" and now directs to edit form
* Searchbar is making a direct request to backend using a query 
