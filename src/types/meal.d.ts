export type Meal = {
  id: string;
  name: string;
  description?: string;
  date: Date;
  isDiet: boolean;
};

export type SectionListItem<T> = { [k in keyof T]: T[k] };
export type SectionListType<T> = {
  title: Date;
  data: SectionListItem<T>[];
};

export type MealSectionList = SectionListType<Meal>;
