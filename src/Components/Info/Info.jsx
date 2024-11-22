import React, { useEffect, useState } from 'react';
import {
    Container,
    Title,
    CardContainer,
    Card,
    Image,
    Description,
    Button
} from './Info.styled';

const Info = () => {
    const [cardsData, setCardsData] = useState([]);
    const [pageTitle, setPageTitle] = useState('Interacting with our pets');

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(
                'https://newsapi.org/v2/everything?q=tesla&from=2024-10-22&sortBy=publishedAt&apiKey=dfc315e5dc1a415a9f904b06a1999ba3'
            );
            const data = await response.json();
            const articles = data.articles.slice(0, 4).map((article) => ({
                image: article.urlToImage,
                description: article.title,
                title: article.title,
            }));
            setCardsData(articles);
            if (articles.length > 0) {
                setPageTitle(articles[0].title);
            }
        };

        fetchData();
    }, []);

    return (
        <Container>
            <Title>{pageTitle}</Title>
            <CardContainer>
                {cardsData.map((card, index) => (
                    <Card key={index}>
                        <Image src={card.image} alt="news image" />
                        <Description>{card.description}</Description>
                    </Card>
                ))}
            </CardContainer>
            <Button>See more</Button>
        </Container>
    );
};

export default Info;