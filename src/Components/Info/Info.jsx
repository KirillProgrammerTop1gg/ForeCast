import React, { useEffect, useState } from 'react';
import {
    Container,
    Title,
    CardContainer,
    Card,
    Image,
    Description,
    Button,
} from './Info.styled';

const Info = () => {
    const [cardsData, setCardsData] = useState([]);
    const [page, setPage] = useState(1);
    const [hasMore, setHasMore] = useState(true);

    const fetchData = async (pageNumber) => {
        const response = await fetch(
            `https://newsapi.org/v2/everything?q=tesla&from=2024-10-22&sortBy=publishedAt&page=${pageNumber}&pageSize=4&apiKey=dfc315e5dc1a415a9f904b06a1999ba3`
        );
        const data = await response.json();
        return data.articles.map((article) => ({
            image: article.urlToImage,
            description: article.title,
        }));
    };

    useEffect(() => {
        const loadInitialData = async () => {
            const articles = await fetchData(1);
            setCardsData(articles);
            if (articles.length < 4) setHasMore(false);
        };

        loadInitialData();
    }, []);

    const loadMore = async () => {
        const nextPage = page + 1;
        const articles = await fetchData(nextPage);
        setCardsData((prev) => [...prev, ...articles]);
        setPage(nextPage);
        if (articles.length < 4) setHasMore(false);
    };

    return (
        <Container>
            <Title>Interacting with our pets</Title>
            <CardContainer>
                {cardsData.map((card, index) => (
                    <Card key={index}>
                        <Image src={card.image} alt="news" />
                        <Description>{card.description}</Description>
                    </Card>
                ))}
            </CardContainer>
            {hasMore && <Button onClick={loadMore}>See more</Button>}
        </Container>
    );
};

export default Info;