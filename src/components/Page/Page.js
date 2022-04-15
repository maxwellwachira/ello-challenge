import React from 'react';
//Hooks
import { usePageFetch } from '../../hooks/usePageFetch';
//styling
import { Wrapper, TextButton, Content, ButtonWrapper, StyledModal } from './Page.styles';

const Page = () => {
    //hooks from usePageFetch
    const {pages, loading, pageNumber, text, isOpen, textClick, prevClick, nextClick, toggleModal} = usePageFetch();
    //array with the indices of the left and right pages
    var indices = [pageNumber * 2 - 2, pageNumber * 2 - 1];
    //array to hold content and tokenized data of the left and right pages
    var results = [];
    indices.forEach(i => results.push(pages[i]));

    //Return Loading while data is being fetched from GraphQL endpoint
    if(loading){
        return(
          <div>
            Loading ....
          </div>
        )
    }
    //Return this once loading is done
    return (
      <>
        <Wrapper>
            <Content>
              {results.map((result, index) => {
                //make content an array 
                var contentArray = result.content.split(" ");
                return ( 
                  <p key={index}>{
                    //map through the content array and make each word clickable
                      contentArray.map((el, index) => (
                          <TextButton key = {index} onClick = {e => textClick(index , contentArray, result)}>{
                          el + " "
                          }</TextButton>)
                      )}
                  </p>
                )} 
              )} 
              {/* Previous and Next Buttons. Previous button hides when pageNumber = 1 and Next button hides on the last age */}
              <ButtonWrapper>
                  <button onClick={prevClick} className={pageNumber === 1 ? 'hidden' : ''}>Previous</button>
                  <button onClick={nextClick} className={pageNumber === pages.length/2  ? 'hidden' : ''}>next</button>
              </ButtonWrapper>
            </Content>
        </Wrapper>
       {/* Modal that displays clicked text */}
        <StyledModal
            isOpen={isOpen}
            onBackgroundClick={toggleModal}
            onEscapeKeydown={toggleModal}
        >
          <span>{text}</span>
          <button onClick={toggleModal}>Close me</button>
        </StyledModal>
      </>
    );
}

export default Page;