const initialState ={

    firstname:"Kutlo",
    surname:"Sekwamote",
    email:"ksekwamote@yahoo.com",
    phoneNumber:"+267 77105790",
    dob:"",
    address:"P O BOX 45",

    occupation: "",
    
}

export function personalReducer(state=initialState, action){
        switch(action.type){
            case "CHANGE_FIRSTNAME":
                return {...state , firstname:action.payload}
            case "CHANGE_SURNAME":
                return {...state , surname:action.payload}
            case "CHANGE_EMAIL":
                return {...state , email:action.payload}
            case "CHANGE_PHONE_NUMBER":
                return {...state , phoneNumber:action.payload}
            case "CHANGE_DATE_OF_BIRTH":
                return {...state , dob:action.payload}
            case "CHANGE_ADDRESS":
                return {...state , address:action.payload}
            case "ADD_CURRENT_OCCUPATION":
                return {...state , occupation:action.payload}
            default:
                return state 
        }
}