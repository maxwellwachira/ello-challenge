import React from 'react';
//Hooks
import { usePageFetch } from '../../hooks/usePageFetch';
//styling
import { Wrapper, TextButton, Content, ButtonWrapper } from './Page.styles';

const Page = () => {
    const {pages, loading, pageNumber, textClick, prevClick, nextClick} = usePageFetch();
    var indices = [pageNumber * 2 - 2, pageNumber * 2 - 1];
    var results = [];
    indices.forEach(i => results.push(pages[i]));

    if(loading){
        return(
          <div>
            Loading ....
            {console.log(" Loading ....")}
          </div>
        )
    }
  
    return (
        <Wrapper>
            <Content>
                {results.map((result, index) => 
                    {
                        var contentArray = result.content.split(" ");
                        console.log(contentArray);
                        const firstIndex = index;

                        return ( 
                        <p key={firstIndex}>{
                            contentArray.map((el, index) => (
                                <TextButton key = {`${firstIndex}${index}`} onClick = {e => textClick(index , contentArray, result)}>{
                                el + " "
                                }</TextButton>)
                            )}
                        </p>
                        )                     
                    }
                    
                    )} 
                    <ButtonWrapper>
                        <button onClick={prevClick} className={pageNumber === 1 ? 'hidden' : ''}>Previous</button>
                        <button onClick={nextClick} className={pageNumber === pages.length/2  ? 'hidden' : ''}>next</button>
                    </ButtonWrapper>
            </Content>
        </Wrapper>
    );
}

export default Page;