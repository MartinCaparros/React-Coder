import React from 'react';
import { Container, Card, ItemImage, ItemName, Divider } from './styled';

const MainSection = () => {
    return (
        <Container>
            <Card>
                <ItemImage/>
                <Divider>
                    <ItemName>ItemName</ItemName>
                </Divider>
            </Card>
        </Container>
    )
}

export default MainSection