![Logo for landing page kora](https://github.com/user-attachments/assets/9e33d7cc-4973-499d-8db6-57e25500ac1f)
# KORA REAL ESTATE APP

**Objective:**
To create a real estate app tailored for the Nigerian market, combining ease of use, advanced filters, and secure blockchain-based smart contracts for property transactions.

**User Experience Flow**

**1. Sign-Up/Onboarding:**

**Sign-Up Page:** Users create an account using their email, phone number, or social media (Google/Facebook). Multi-factor authentication (via OTP or email verification) is implemented for security.

**Onboarding Questionnaire:** After signing up, users answer a series of preference-based questions to personalize their experience. 

Questions include:

1. Preferred location(s).
2. Price range.
3. Property type (e.g., apartment, house, shared living).
4. Number of bedrooms.
5. Features such as pets allowed, parking availability, and furnished/unfurnished options.

**2. Home Page (Find Homes):**
   **Map View:** Upon logging in, users land on a map displaying properties matching their preferences as pins. Clicking a pin displays a mini-popup with property details and a link to the full property page.
   
   **Search Bar:** A persistent search bar at the top allows users to update or refine filters (e.g., change location, adjust price range).
   
   **Navbar Options:**
   1. Find Homes: Current page with the map and search functionality.
   2. Feed: Personalized home suggestions based on filters and user behavior.
   3. Favorites: Properties the user has saved (starred).
   4. My Kora: A user dashboard with personal settings and activity logs.

**3. Feed (Recommended Homes):**
   Automatically populated with properties based on:
   1. Filter preferences from the onboarding questionnaire.
   2. Properties the user has favorited or viewed.
   3. Similar listings to recently interacted homes.

**4. Favorites:**

   1. Displays all user-saved properties in a list or grid view.
   2. Includes actions like sharing the listing, scheduling a viewing, or contacting the seller.
      
**5. My Kora (Profile Page):**
   A hub for managing personal activity and settings, including:
      **Recently Viewed Homes:** Quick access to previously explored properties.
      **Saved Searches:** Users can save filter combinations for quick reuse.
      **Favorites:** A consolidated list of saved properties.
      **Payment History:** Details of completed transactions via blockchain smart contracts.
      **Scheduled Viewings:** Upcoming property viewings and meeting schedules.
      **Profile Settings:**
         1. Personal information (name, email, phone number).
         2. Linked blockchain wallet for transactions.
         3. Notification preferences (email, SMS, app notifications).
         4. Login & security settings (password reset, two-factor authentication).
         
**Functional Requirements**

**Sign-Up/Onboarding**
   1. Users must provide email, phone number, or social media credentials.
   2. Multi-factor authentication to enhance security.
   3. Capture user preferences during onboarding to personalize the experience.
      
**Home Page**
   1. Display properties on an interactive map view.
   2. Allow users to search and refine properties using the search bar and filters.
   3. Provide filter options:
      o Location.
      o Price range.
      o Property type.
      o Bedrooms.
      o Features like pets allowed, parking, furnished status.
      
**Feed**
   1. Dynamically populate recommended homes based on user activity:
      o Filters selected during onboarding or updated via the search bar.
      o History of viewed or favorited properties.
      o Algorithmic suggestions (e.g., “If you liked X property, you might like Y”).
      
**Favorites**
   1. Users can "star" properties to save them to their favorites.
   2. Allow users to view, share, and schedule viewings for saved properties.
      
**My Kora (Profile)**
   1. **Recently Viewed Homes:** Display a chronological list of recently explored properties.
   2. **Saved Searches:** Provide a mechanism for users to save and manage their search preferences.
   3. **Payment History:** Show completed transactions, including timestamps and property details, leveraging blockchain for immutability.
   4. **Linked Blockchain Wallet:**
      o Connect to Ethereum or Binance Smart Chain wallets for seamless transactions.
      
      o Enable smart contract-based escrow payments for buying, renting, and mortgage processing.
   5. **Scheduled Viewings:** Display upcoming appointments with property agents or sellers.
   6. **Profile Settings:**
      o Update personal details.
      o Link or unlink blockchain wallets.
      o Manage communication preferences (e.g., email notifications, SMS alerts).
      o Adjust login and security settings.


**Additional Functional Details**

**1. Smart Contracts for Payment:**
   Implement smart contracts to handle transactions securely.
   
   Users can view the transaction status in their My Kora dashboard (e.g., "Payment Pending," "Escrow Released").
   
   Automatically trigger contract milestones such as property verification or document transfer.

**2. Search Functionality:**

   Filters should be dynamic and customizable at any point.
   
   **Filters to include:**
   
   Keywords (e.g., "sea view," "balcony").
   
   Nearby landmarks or areas of interest (e.g., schools, markets).

**3. Notifications:**
   **Notify users when:**
   New properties matching their preferences are listed.
   
   A seller responds to their inquiry or schedules a meeting.
   
   Payment milestones are met.
   
**4. Agent/Seller Features:**
   Easy listing upload, including verification and property stats.
   
   Communication tools for responding to inquiries or scheduling viewings.










## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
