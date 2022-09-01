# Running the App

In the command prompt or terminal clone the app

##### git clone https://github.com/mustafaDabah/Blog-App.git 

##### CD into the folder Blog-App

install dependencies

##### npm i

Available Scripts In the project folder, you can run:

##### npm start 
Runs the app in the development mode. Open http://localhost:3000 to view it in the browser.

The page will reload if you make edits. You will also see any lint errors in the console.

##### npm test

Launches the test runner in the interactive watch mode. 

# what about this app ? 

##### you created web app which has the following 
1. User list by name 
   - on hover to show popup with username and email
   - on click to navigate to user detail page 
   
- 2.User detail page 
   - show section with user profile
   - show section with user posts 
      - show post list w/ comments, each post can be updated or deleted.
   - show section with user albums
     - expand to show album list, on click each album to show photos
	 
	
###### I used a free REST APIs - https://jsonplaceholder.typicode.com/ to design the page.

######  I made 2 version one with redux toolkit and use createAsyncThunk and other I used RTK query . 
