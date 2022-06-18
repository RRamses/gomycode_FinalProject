


const initialstate={
    ask: [{
        id:1,
        title:"devellopement",
        contenu:"tu prefere backend ou frontend  ",
        categorie:"react",

    } ,
    {   
        id:2,
        title:"searchbar",
        contenu:"comment faire une barre de rechercher ",
        categorie:"react",

    }   
    ],
    answer:[{

    }],

    count_ask:0,
}



function Reducer(state=initialstate,action){
    switch(action.type){
        case 'ADD-ASK':{
             return{ask: [...state.ask,action.payload]};
        }
        case 'ADD-ANSWER':{
            return{answer: [...state.answer,action.payload]};
       }
       case 'COUNT-ASK':{
        return{count_ask: [...state.count_ask,action.payload]};
   }
        default: return state;
    }

}

export default Reducer;