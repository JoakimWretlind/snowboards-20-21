import React, { useState } from 'react'
import {
    SingleBoard,
    BoardImg,
    BoardFooter,
    BoardInfo,
    BoardH4,
    BoardPrice,
    BoardP,
    ReadMore,
    ReadBoard,
    DeleBtn
} from './Styling'

const Board = ({ id, image, info1, info2, title, price, removeBoard }) => {
    const [readMore, setReadMore] = useState(false);
    const [readEvenMore, setReadEvenMore] = useState(false);

    const handleRead = () => {
        setReadMore(!readMore)
        setReadEvenMore(!readEvenMore)
    }

    return (
        <>
            <SingleBoard>
                <BoardImg src={image} alt={title} readMore={readMore} />
                <BoardFooter>
                    <BoardInfo>
                        <BoardH4>{title}</BoardH4>
                        <BoardPrice>${price}</BoardPrice>
                        <BoardP >
                            {readMore ? info1 : `${info1.substring(0, 200)}...`}
                            <ReadMore>
                                {readEvenMore ? info2 : ``}
                            </ReadMore>
                            <ReadBoard onClick={handleRead}>
                                {readMore ? 'show less' : '  read more'}
                            </ ReadBoard>
                        </BoardP>
                        <DeleBtn onClick={() => removeBoard(id)}>
                            not interested
                        </DeleBtn>
                    </BoardInfo>
                </BoardFooter>
            </SingleBoard>
        </>
    )
}

export default Board
