# **Emaily Feedback App**  
### Create and send surveys to customers and get their feedback!!  
- Users can Login with google account.  
- Add credits to their account to create and send surveys to customers.  
- View user feedback on Dashboard.  
### Created with **Node**, **React**, **Express**, **Mongodb**.  
## Try the App  
To check out the app, visit https://ancient-hollows-04250.herokuapp.com  
**Note:** While adding credits to your account use card number 4242 4242 4242 4242.  
## Instructions for testing this this app locally  
### Before ruuning the server  
* Clone the repository and install all the required packages by running **npm install**.  
* Get your own google Oauth API key, sendgrid API key, stripe API key and mongodb Atlas collection URI by creating their respective account.  
* Go to the **index.js** file and while connecting to database, replace the default URI with the URI of the **Mongodb Atlas** collection that you have created.  
* After getting all the API keys, create a **.env** file and paste and assign them to the variable names given inside **'config/dev.js'** file.  
* In the **'services/Mailer.js'** file, replace the given email with your sendgrid verified email (In line 10).  
* For handling webhook data, use third party services like ngork. Open a new terminal inside project and type '**npx ngrok http 5000**'. Copy and paste the URL provided by ngrok inside the Event webhook setting in your sendgrid account.  
* Use command **npm run dev** to start both server and client side.  
 
For more information check https://www.udemy.com/course/node-with-react-fullstack-web-development
