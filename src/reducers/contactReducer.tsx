export default function courseReducer(state = [], action: any) {
    switch(action.type) {
        case 'SUBMIT_CONTACT': 
        return [...state, 
            Object.assign({}, action.contact)
        ];
        default: 
            return state;
    }
}