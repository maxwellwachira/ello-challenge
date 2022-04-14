import { useState, useEffect } from "react";
import { GraphQLAPIEndpoint, BOOKQUERY } from "../api";

export const usePageFetch = () => {

    const [pages, setPages] = useState([]);
    const [pageNumber, setPageNumber] =useState(1);
    const [loading, setLoading ] = useState(true);
    const [error, setError] = useState(false);
    const [errrorMessage, setErrorMessage] =  useState('');


    //function to go to the next page 
    const nextClick = (e) => {
        setPageNumber(prev => prev + 1 );
    } 

    //Function to go to previous page
    const prevClick = (e) => {
        setPageNumber(prev => prev - 1 );
    }

    //Function to handle onClick Text event
    const textClick = (index, contentArray, result) => {
        let text = result.content;
        let position = text.search(`${contentArray[index]}`);
        if (position === -1){
            setError(true)
            setErrorMessage('Does not exist')
            return
        }
        let tokensArray =  result.tokens;

        tokensArray.forEach(element => {
        if (element.position[0] === position){
            return element.value;
        }
        });
    }

    //Function to fetch data from graphQL endpoint
    const fetchData = async() => {
        try{
            let response = await fetch(GraphQLAPIEndpoint, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ query: BOOKQUERY })
        });
        const data = await response.json();
        setPages(data.data.book.pages);
        
        } catch (error){
            setError(true);
            setErrorMessage(error);
        }     
        setLoading(false);
    }

    useEffect(() => {
        fetchData();    
    }, []);

    return {pages, loading, pageNumber, textClick, prevClick, nextClick }

}