import styled from 'styled-components'

const Div = styled.div`
    display:flex;
    flex-direction: column;
    justify-content:center;
    width: 80%;
    margin: 2% auto;
    background-color: slategray;
    border: 2px solid brown;
    padding: 1%;

    nav{
        display:flex;
        flex-direction: row;
        justify-content: space-around;
    }

    img{
        width:90%;
        margin:2% auto;
        border: 4px solid darkolivegreen;
    }
`

export default Div