import React, { useState } from 'react';
import styles from './styles.module.css';
import styled from 'styled-components';
const StyledText = styled.h2`
  color: ${(props) => {
    if (props.numClicked % 2 === 0) {
      return "blue";
    }
    return "red";
  }};
`;
export default function App() {
    const [numClicked, setNumClicked] = useState(0);
    const handleClick = () => {
      setNumClicked((current) => {
        return current = current + 1;
      });
    };
    const textStyle = numClicked % 2 === 0 ? styles['textBlue'] : styles['textRed'];
    
    return (
        <div>
            <div className={styles.container1}> 
                <button onClick={handleClick}>Click me</button>
                <p className={textStyle}>You have clicked {numClicked} times.</p>
                
            </div>
            <div className={styles.container2}>
                <button onClick={handleClick}>Click here</button>
                <h2 
                    style={{
                            color:  (numClicked % 2 === 0) ? 'blue' : 'red'
                    }}
                    >You clicked {numClicked} times
                </h2>
            </div>
            <div className={styles.container3}> 
                <StyledText numClicked={numClicked}>
                    You clicked {numClicked} times
                </StyledText>
            </div>
           
            
        </div>
    );
  }