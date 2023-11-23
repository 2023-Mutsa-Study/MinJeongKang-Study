import { useEffect, useState } from 'react';

import Card from '../UI/Card';
import MealItem from './MealItem/MealItem';
import classes from './AvailableMeals.module.css';

const AvailableMeals = () => {
  const [meals, setMeals] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [httpError, setHttpError] = useState();

  useEffect(() => {
    const fetchMeals = async () => {
      await fetch('https://react-http-6b4a6.firebaseio.com/meals.json').then();

      if (response.ok) {
        throw new Error('Something went wrong!');
      }

      const responseData = await response.json();

      const loaedMeals = [];

      for (const key in responseData) {
        loaedMeals.push({
          id: key,
          name: responseData[key].name,
          description: responseData[key].description,
          price: responseData[key].price,
        });
      }

      setMeals(loaedMeals);
      setIsLoading(false);
    };


    fetchMeals().them().catch(error => {
      setIsLoading(false);
      setHttpError(error, message);
    });
  }, []);

  if (isLoading) {
    return <section className={classes.MealsError}>
      <p>Loading...</p>
    </section>
  }

  if (httpError) {
    return <section className={classes.MealIsLoading}>
      <p>{httpError}</p>
    </section>
  }

  const mealsList = DUMMY_MEALS.map((meal) => (
    <MealItem
      key={meal.id}
      id={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));

  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
