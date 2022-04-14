import React, {useState,useEffect, useId} from "react";
//import { fetchData } from "./api";


const App = () => {
  //GraphQL API endpoint
  const GraphQLAPIEndpoint = 'https://fullstack-engineer-test-n4ouilzfna-uc.a.run.app/graphql';

  const BOOKQUERY = `
      {
          book {
              pages {
                  content
                  tokens {
                      position
                      value
                  }
              }
          }
      }
  `;

  const [pages, setPages] = useState([]);
  const [pageNumber, setPageNumber] =useState(1);
  const [loading, setLoading ] = useState(true);
  const [error, setError] = useState(false);
  const [errrorMessage, setErrorMessage] =  useState('');

  const nextClick = (e) => {
    setPageNumber(prev => prev + 1 );
  } 
  const prevClick = (e) => {
    setPageNumber(prev => prev - 1 );
  }
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
     if (element.position[0] == position){
       return element.value;
     }
    });
  }
  useEffect(() => {
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
   
    fetchData();
   
  }, []);

  if(loading){
    return(
      <div>
        Loading ....
        {console.log(" Loading ....")}
      </div>
    )
  }
  var indices = [pageNumber * 2 - 2, pageNumber * 2 - 1];
  var results = [];
  indices.forEach(i => results.push(pages[i]));
  
  return (
    <div className="App">
        {results.map((result, index) => 
          {
            var contentArray = result.content.split(" ");
            console.log(contentArray);
            const firstIndex = index;
          

            return ( 
              <p key={firstIndex}>{
              contentArray.map((el, index) => (
                <button key = {`${firstIndex}${index}`} onClick = {e => textClick(index , contentArray, result)}>{
                  el + " "
                }</button>)
              )}
              </p>
              ) 
            
          }
          
        )} 
        <button onClick={prevClick}>
         Previous
       </button>
       <button onClick={nextClick}>
         next
       </button>
  
    </div>
  );
}

export default App;
