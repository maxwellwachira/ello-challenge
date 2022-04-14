import React from 'react';
//Hooks
import { usePageFetch } from '../../hooks/usePageFetch';
//styling
import { Wrapper, TextButton, Content, ButtonWrapper, StyledModal } from './Page.styles';

const Page = () => {
    const {pages, loading, pageNumber, text, isOpen, textClick, prevClick, nextClick, toggleModal} = usePageFetch();
    var indices = [pageNumber * 2 - 2, pageNumber * 2 - 1];
    var results = [];
    indices.forEach(i => results.push(pages[i]));

    if(loading){
        return(
          <div>
            Loading ....
          </div>
        )
    }
  
    return (
      <>
        <Wrapper>
            <Content>
              {results.map((result, index) => {
                var contentArray = result.content.split(" ");
                const firstIndex = index;
                return ( 
                  <p key={firstIndex}>{
                      contentArray.map((el, index) => (
                          <TextButton key = {`${firstIndex}${index}`} onClick = {e => textClick(index , contentArray, result)}>{
                          el + " "
                          }</TextButton>)
                      )}
                  </p>
                )} 
              )} 
              <ButtonWrapper>
                  <button onClick={prevClick} className={pageNumber === 1 ? 'hidden' : ''}>Previous</button>
                  <button onClick={nextClick} className={pageNumber === pages.length/2  ? 'hidden' : ''}>next</button>
              </ButtonWrapper>
            </Content>
        </Wrapper>
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