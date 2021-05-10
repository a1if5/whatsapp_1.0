import styled from "styled-components";

function ChatScreen() {
    return (
        <Container>
            <h1>Chat Screen</h1>
        </Container>
    )
}

export default ChatScreen;

const Container = styled.div`
flex: 1;
overflow: scroll;
height: 100vh;

::-webkit-scrollbar {
    display: none;
}
-ms-overflow-style: none;
scrollbar-width: none;
`;