import styled from 'styled-components';

const LoadContainer = styled.div`
    height: 100%;
    min-height: 100vh;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`

const Load = styled.h1`
    font-family: 'montserrat', sans-serif;
    font-size: clamp(3rem, 6vw, 6rem);
    letter-spacing: .5rem;
`

const Loader = () => {

    return (
        <LoadContainer>
            <Load>
                Loading...
            </Load>
        </LoadContainer>
    )
}

export default Loader
