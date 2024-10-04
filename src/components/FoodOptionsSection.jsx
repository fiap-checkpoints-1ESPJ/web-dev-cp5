import { useState, useEffect } from 'react';
import styled from 'styled-components';

const Section = styled.section`
  background-color: #f8f8f8;
  padding: 4rem 2rem;
  text-align: center;
`;

const Title = styled.h2`
  font-size: 2.5rem;
  color: #333;
  margin-bottom: 2rem;
`;

const MealsContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 2rem;
  flex-wrap: wrap;
`;

const MealCard = styled.div`
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  width: 300px;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
`;

const MealImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

const MealInfo = styled.div`
  padding: 1rem;
`;

const MealName = styled.h3`
  font-size: 1.25rem;
  color: #333;
  margin-bottom: 0.5rem;
`;

const MealCategory = styled.p`
  font-size: 1rem;
  color: #666;
`;

const FoodDeliverySection = () => {
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    const fetchMeals = async () => {
      const mealPromises = Array(3).fill().map(() =>
        fetch('https://www.themealdb.com/api/json/v1/1/random.php')
          .then(response => response.json())
          .then(data => data.meals[0])
      );

      const fetchedMeals = await Promise.all(mealPromises);
      setMeals(fetchedMeals);
    };

    fetchMeals();
  }, []);

  return (
    <Section>
      <Title>Types of food you can have tonight!!!</Title>
      <MealsContainer>
        {meals.map((meal) => (
          <MealCard key={meal.idMeal}>
            <MealImage src={meal.strMealThumb} alt={meal.strMeal} />
            <MealInfo>
              <MealName>{meal.strMeal}</MealName>
              <MealCategory>{meal.strCategory}</MealCategory>
            </MealInfo>
          </MealCard>
        ))}
      </MealsContainer>
    </Section>
  );
};

export default FoodDeliverySection;
