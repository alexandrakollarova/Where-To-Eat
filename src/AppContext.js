import React from 'react';

const AppContext = React.createContext({
   places: [],
   users: [],
   
   showSignupForm: false,   
   showModal: () => {},
   hideModal: () => {},

   isSignedIn: "",

   createUser: () => {},
   
   addPlace: () => {},

   updateSearchResults: () => {}
})

export default AppContext