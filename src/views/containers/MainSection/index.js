import React from 'react';
import { Container, Card, ItemImage, ItemName, Divider } from './styled';
import { ItemCount } from 'views/components';

const MainSection = () => {
    return (
        <Container>
            <Card>
                <ItemImage/>
                <Divider>
                    <ItemName>ItemName</ItemName>
                </Divider>
                <ItemCount></ItemCount>
            </Card>
        </Container>
    )
}

export default MainSection