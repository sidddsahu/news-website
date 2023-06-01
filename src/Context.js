import React, { useReducer, useContext, useEffect, } from "react";
import reducer from "./reducer";
// import axios from "axios";
let API = "http://hn.algolia.com/api/v1/search?"

const initialState ={
     isLoading : true,
    query: "HTML",
    nbPages: 0,
    page:0,
    hits:[],
}

const AppContext = React.createContext()

const AppProvider = ({children}) =>{

    const [state, dispatch ] = useReducer(reducer, initialState)

    const fetchApiData = async (url) => {
        dispatch({
            type: "SET_LOADING"
        })
        try {
            const res = await fetch(url);
            const data = await res.json()
            // console.log(data)
            dispatch({
                type:"GET_STORIES",
                payload:{
                    hits: data.hits,
                    nbPages: data.nbPages
                }
        })
            // isLoading = false
        } catch (error) {
            console.log(error)

        }
    }

    //To Remove the post
    const removePost = (id) =>{
        dispatch({
            type: "REMOVE_POST",
            payload: id
        })
    }

    // Search 
    const searchPost = (searchQuery) =>{
        dispatch({
            type: "SEARCH_QUERY",
            payload: searchQuery
        })
    }


    // Pagination
    const getNextPage = () =>{
        dispatch({
            type: "NEXT_PAGE"

        })
    }

    const getPrevPage = () =>{
        dispatch({
            type: "PREV_PAGE"

        })
    }


  //  To call the api function
    useEffect(() => {
        fetchApiData(`${API}query=${state.query}&page=${state.page}`)
    }, [state.query, state.page])

    return (
        <AppContext.Provider value={{...state, removePost, searchPost, getNextPage, getPrevPage}}>{children}</AppContext.Provider>
    )
}
// custom hook
const useGlobalHook = () =>{
    return  useContext(AppContext)
}

export  {AppContext ,  AppProvider, useGlobalHook,  };