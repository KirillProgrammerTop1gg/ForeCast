import React from 'react';
import img1 from "../image/info1.png";
import img2 from "../image/info2.png";
import img3 from "../image/info3.png";
import img4 from "../image/info4.png";
import {
    Container,
    Title,
    CardContainer,
    Card,
    Image,
    Description,
    Button
} from './Info.styled';

const cardsData = [
    {
        image: img1,
        description: 'Rescue pups pose as ghosts in festive photo shoot',
    },
    {
        image: img2,
        description: 'Cat interrupts morning coffee on sunny Washington morning',
    },
    {
        image: img3,
        description: 'New study finds dogs pay more attention to women',
    },
    {
        image: img4,
        description: 'Petting dogs gives health benefit, even if they are not yours',
    },
];

const Info = () => (
    <Container>
        <Title>Interacting with our pets</Title>
        <CardContainer>
            {cardsData.map((card, index) => (
                <Card key={index}>
                    <Image src={card.image} alt="pet image" />
                    <Description>{card.description}</Description>
                </Card>
            ))}
        </CardContainer>
        <Button>See more</Button>
    </Container>
);

export default Info;