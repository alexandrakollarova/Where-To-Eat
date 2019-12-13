import React from 'react';

const AppContext = React.createContext({
   places: [],
   savePlace: () => {},
   unsavePlace: () => { }, 
   updateSearchResults: () => {},

   activeButtonIndex: null,

   users: [],
   isSignedIn: "",
   createUser: () => {},
   activeUserId: null,
   handleUserSignedIn: () => {},

   collectionList: [],
   setCollectionList: () => {},
   
   showSignupForm: false, 
   showConfigWindow: false,
   showPopup: false,
   showLoginForm: false,
 
   showModalForConfigWindow: () => {},
   showModalForPopup: () => {},
   showModalForSignupForm: () => {},
   hideModalForSignupForm: () => {},
   showModalForLoginForm: () => {},
   hideModalForLoginForm: () => {},
   hideModalForConfigWindow: () => {},
   hideModalForPopup: () => {},   

   isMenuActive: false,    
})

export default AppContext;