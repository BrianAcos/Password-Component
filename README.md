First you hace to install all the dependecies, run:

### `npm install`

Second run the aplication

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

Password component:

Props: The PasswordComponent accepts the following props:

hasNumbers: Boolean indicating whether the password must contain numbers.

maxLength: Maximum length allowed for the password.

minLength: Minimum length required for the password.

hasLetters: Boolean indicating whether the password must contain letters.

hasSpecialChar: Boolean indicating whether the password must contain special characters.

hasUppercase: Boolean indicating whether the password must contain uppercase letters.

hasNoConsecutive: Boolean indicating whether consecutive characters are not allowed.

ableToSubmit: Callback function to inform the parent component whether the input is valid.

Styling: The component assumes the existence of a stylesheet (styles.css) for styling purposes.

External Dependencies
The component relies on external resources such as images (CheckImg and ErrorImg), types (InputProps), and regular expressions for its functionality.
