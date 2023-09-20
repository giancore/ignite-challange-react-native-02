import { Meal, MealSectionList } from '@types';

export function convertMealsToGroupList(meals: Meal[]) {
  const groupedAndSortedMeals = meals.reduce<MealSectionList[]>((result, current) => {
    const { date } = current;
    const dateEntry = result.find((entry) => entry.title === date);

    if (dateEntry) {
      dateEntry.data.push(current);
    } else {
      result.push({ title: current.date, data: [current] });
    }

    return result;
  }, []);

  groupedAndSortedMeals.forEach((group) => {
    group.data.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
  });

  groupedAndSortedMeals.sort((a, b) => new Date(a.title).getTime() - new Date(b.title).getTime());

  return groupedAndSortedMeals;
}
