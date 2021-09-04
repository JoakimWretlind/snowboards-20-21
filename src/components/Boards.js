import Board from './Board'
import {
    Main,
    Title,
    Underline,
    BoardsDiv,
    Copyright
} from './Styling'

const Boards = ({ boards, removeBoard }) => {
    return (
        <>
            <Main>
                <Title>Top Snowboards of 2020/ 2021</Title>
                <Underline />
                <BoardsDiv>
                    {boards.map((board) => {
                        return <Board key={board.id} {...board} removeBoard={removeBoard} />;
                    })}
                    <Copyright>Copyright &copy; 2021 Joakim Wretlind</Copyright>
                </BoardsDiv>
            </Main>
        </>
    )
}

export default Boards;