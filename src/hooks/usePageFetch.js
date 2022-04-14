import { useState, useEffect } from "react";
import { GraphQLAPIEndpoint, BOOKQUERY } from "../api";

export const usePageFetch = () => {
    //state to hold all pages details
    const [pages, setPages] = useState([]); 
    //state to keep track of the page number
    const [pageNumber, setPageNumber] =useState(1);
    //state to improve on User Experience while fetching data from GraphQL using async await
    const [loading, setLoading ] = useState(true);
    //state that holds value of clicked text
    const [text, setText] = useState('');
    //state to keep track of whether Modal is Open or closed
    const [isOpen, setIsOpen] = useState(false);


    //function to go to the next page 
    const nextClick = (e) => {
        setPageNumber(prev => prev + 1 );
    } 

    //Function to go to previous page
    const prevClick = (e) => {
        setPageNumber(prev => prev - 1 );
    }

    //function to toggle modal
    const toggleModal = (e) => {
        setIsOpen(!isOpen);
    }

    //Function to handle onClick Text events
    const textClick = (index, contentArray, result) => {
        toggleModal();
        let text = result.content;
        let position = 0;
        //array to hold all the indices where there is a match between the string and text
        let positionArray = [];
        let tokensArray =  result.tokens;
        
        //Loop to add indices to the Position array
        for (let i = 0; i < text.split(" ").length; i++){
            position = text.indexOf(`${contentArray[index]}`, (position + 1));
            positionArray.push(position);
        }

        tokensArray.forEach(element => {   
            positionArray.forEach(position => {
                //check if the index matches to the first value of the position list
                if(position === element.position[0]){
                    var valueLength = element.position[1] - element.position[0];
                    //Handle Punctuation
                    const punctuation = ['.', ',', '!', '"'];
                    punctuation.every(el => {
                        var punctuated = contentArray[index].includes(el)
                        if (punctuated) {
                            valueLength = valueLength + 1;
                           return false;
                        }
                    });
                    //check if the length matches 
                    if (valueLength === contentArray[index].length){
                        setText(element.value);
                    }
                }      
            });    
             
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
            console.log(error);
        }     
        setLoading(false);
    }

    useEffect(() => {
        fetchData();    
    }, []);

    return {pages, loading, pageNumber, text,isOpen, textClick, prevClick, nextClick, toggleModal}

}