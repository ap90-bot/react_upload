import React,{useState,useEffect,useReducer} from 'react'

const notesReducer =(state,action) =>{
    switch(action.type) {
        case 'POPULATE_NOTES':
            return action.notes
            default:
                return state
    }
}