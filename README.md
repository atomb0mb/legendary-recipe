# legendary-recipe
An Angular application that allow the users to manage their recipe and shopping list.


demo: https://lengendaryrecipe.web.app

## Technology

* [Angular](https://angular.io/docs)
* [FireBase-RestAPI](https://firebase.google.com/docs/reference/rest/auth#section-api-usage)

## Project Description
As a cooking lover, I always want to manage my recipe on like pinterest. But I want to start from a small step. So I learned Angular and created this simple recipe book application. I can log in and manage and view my recipe. When I decides which recipe to make on that day, I can add the ingredient to the shopping list for shopping!

## Overview

* The current homepage of the application is the authenticate tab and a login page.
* User can sign up for a new account or sign in with an exisiting account.
* After logged in the the system, user can fetch the exisiting recipe from the database.
* User can modify, add, get, and delete the recipe.
* User can add ingredients to the shopping list on the recipe page.
* User can modify, add, and delete ingredients on the shopping list on the shopping list page.
* User can navigate to view ingredient in shopping list.
* User will redirect to recipe page with auto-login feature if the token is not expires.
* User can logout the system manually or auto-logout when the token expires.
* For the recipe information, user can add a name, image, description, and ingredients (optional) for the recipe.

## Security
* The unauthorized user is restricted to URL access. It will redirect the unauthorized user to the login page.


## Usecase 1 Create an account or Login with an exisiting accont
Use the sample account for testing or Create a new account
    id:       test@hotmail.com
    pass:     332211
To Create a new account
1. Enter a valid email
2. Enter a password that its length must greater than 6
3. Click > Sign up


## Use case 2 Login and retrieve the recipe
1. Enter your Email and Password then clicks > Login.
2. After login, you will redirect to the recipe page. The recipe page is empty.
3. On the top right, click > Manage > Fetch Data
4. After fetching the data, you will see the recipes.

## Use case 3 add a new recipe 
1. On the recipe page, click > New Recipe
2. On the right, Enter the following fields: name, image URL, and description. Ingredient is optional.
3. Once you are done, click > Save.
4. The new recipe will show up on the list.

## Use case 4 To save your recipe to the database
Pre: Use case 3
1. On the top right, click > Manage > Save Data

## Use case 5 To delete your recipe and update the database
1. Select a recipe from your list.
2. Click > Manage Recipe > Delete recipe
3. On the top right, click > Manage > Save Data

## Use case 6 To edit your recipe and update the database
1. Select a recipe from your list.
2. Click > Manage Recipe > Edit recipe
3. On the top right, click > Manage > Save Data

## Use case 7 To add ingredient to your shopping list via selected recipe
1. Select a recipe from your list.
2. Click > Manage Recipe > To Shopping List

## Use case 8 To view your shopping list
1. Click > Shopping List tab

## Use case 9 To add ingredient to your shopping list at Shopping List tab
2. Enter the name field and amount field
3. Click > Add

## Use case 10 To edit ingredient to your shopping list at Shopping List tab
1. Select the ingredient from the list
2. Edit the name field and/or amount field
3. Click > Update

## Use case 11 To delete ingredient to your shopping list at Shopping List tab
1. Select the ingredient from the list
2. Click > Delete


## For reuse the code
Pre: Be Familiar with angular CLI and FireBase


1. npm install 
2. Please include your fireBaseAPIKey in project > src > environments > environments.ts & environment.prod.ts
3. Please replace your firebase realtime database Http request in src > app > auth > auth.service.ts

