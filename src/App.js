import React, { useState, useEffect } from 'react'
import { GlobalStyle } from './globalStyle'
import Loader from './components/Loader'
import Boards from './components/Boards'

import {
  Main,
  Title,
  FetchBtn
} from './components/Styling'

const url = 'https://snowboardapi.herokuapp.com/snowboards'

function App() {
  const [loading, setLoading] = useState(true);
  const [boards, setBoards] = useState([]);

  const removeBoard = (id) => {
    const newBoards = boards.filter((board) => board.id !== id)
    setBoards(newBoards)
  }

  const fetchBoards = async () => {
    setLoading(true); // extra caution from useState  
    setTimeout(() => {
      setLoading(false)
    }, 2000)

    try {
      const res = await fetch(url);
      const boards = await res.json();
      setTimeout(() => {
        setLoading(false)
      }, 2000)
      // setLoading(false);
      setBoards(boards);

    } catch (err) {
      setLoading(false)
      console.log(err)
    }

  }

  // Get the fetchBoards function
  useEffect(() => {
    fetchBoards()
  }, []);

  // Loading
  if (loading) {
    return (
      <Main>
        <Loader />
      </Main>
    )
  };

  // If all items are removed
  if (boards.length === 0) {
    return (
      <Main>
        <Title className="endOfBoards">no boards left</Title>
        <FetchBtn onClick={fetchBoards}>
          refresh
        </FetchBtn>
      </Main>
    )
  }

  return (
    <>
      <Main>
        <GlobalStyle />
        <Boards boards={boards} removeBoard={removeBoard} />
      </Main>
    </>
  );
}

export default App;
