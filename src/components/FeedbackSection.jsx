import styled from 'styled-components';
import { FaStar } from 'react-icons/fa';

const FeedbackWrapper = styled.section`
  padding: 4rem;
  background-color: #f9f9f9;
  text-align: center;
`;

const Title = styled.h2`
  font-size: 2.5rem;
  color: #333;
  margin-bottom: 2rem;
`;

const ReviewContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2rem;
`;

const ReviewCard = styled.div`
  background-color: white;
  border-radius: 10px;
  padding: 2rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  width: 300px;
  text-align: left;
`;

const ReviewerName = styled.h3`
  font-size: 1.25rem;
  margin-bottom: 0.5rem;
`;

const ReviewText = styled.p`
  font-size: 1rem;
  color: #666;
  margin-bottom: 1rem;
`;

const Stars = styled.div`
  display: flex;
  margin-bottom: 1rem;
`;

const Star = styled(FaStar)`
  color: ${({ active }) => (active ? '#ffc107' : '#e4e5e9')};
  margin-right: 5px;
`;

const ReviewCardComponent = ({ name, text, rating }) => {
    const renderStars = () => {
        const totalStars = 5;
        return Array.from({ length: totalStars }, (_, index) => (
            <Star key={index} active={index < rating} />
        ));
    };

    return (
        <ReviewCard>
            <ReviewerName>{name}</ReviewerName>
            <ReviewText>{text}</ReviewText>
            <Stars>{renderStars()}</Stars>
        </ReviewCard>
    );
};

const FeedbackSection = () => {
    const reviews = [
        {
            name: 'John Doe',
            text: 'Amazing service! The food arrived hot and super fast.',
            rating: 5,
        },
        {
            name: 'Jane Smith',
            text: 'Great variety of restaurants. Easy to use app!',
            rating: 4,
        },
        {
            name: 'Mark Johnson',
            text: 'Had some issues with payment, but overall good.',
            rating: 3,
        },
    ];

    return (
        <FeedbackWrapper>
            <div>
                <Title>User Feedback</Title>
                <ReviewContainer>
                    {reviews.map((review, index) => (
                        <ReviewCardComponent
                            key={index}
                            name={review.name}
                            text={review.text}
                            rating={review.rating}
                        />
                    ))}
                </ReviewContainer>
            </div>
        </FeedbackWrapper>
    );
};

export default FeedbackSection;

