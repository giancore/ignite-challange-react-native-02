import { DefaultSectionT, SectionList, SectionListData, SectionListRenderItem } from 'react-native';

import { Meal } from '@types';
import { Plus } from 'phosphor-react-native';
import { useTheme } from 'styled-components/native';

import { Button } from '@components/Button';

import * as S from './styles';
import { MealItem } from '../MealItem';

interface Section {
  title: string;
  data: Meal[];
}

interface IHeader {
  section: SectionListData<{ title: string }>;
}

const data: Section[] = [
  {
    title: '12.08.22',
    data: [
      { name: 'X-tudo', description: '', date: '12/08/2022', hour: '20:00', isDiet: false },
      {
        name: 'Whey protein com leite',
        description: '',
        date: '12/08/2022',
        hour: '16:00',
        isDiet: true,
      },
      {
        name: 'Salada cesar com frango',
        description: '',
        date: '12/08/2022',
        hour: '12:30',
        isDiet: true,
      },
      {
        name: 'Vitamina de banana com canela',
        description: '',
        date: '12/08/2022',
        hour: '09:30',
        isDiet: true,
      },
    ],
  },
  {
    title: '14.08.22',
    data: [
      { name: 'X-tudo', description: '', date: '12/08/2022', hour: '20:00', isDiet: false },
      {
        name: 'Whey protein com leite',
        description: '',
        date: '12/08/2022',
        hour: '16:00',
        isDiet: true,
      },
      {
        name: 'Salada cesar com frango',
        description: '',
        date: '12/08/2022',
        hour: '12:30',
        isDiet: true,
      },
      {
        name: 'Vitamina de banana com canela',
        description: '',
        date: '12/08/2022',
        hour: '09:30',
        isDiet: true,
      },
    ],
  },
];

export function Meals() {
  const { COLORS } = useTheme();

  const renderItem: SectionListRenderItem<Meal> = ({ item }) => (
    <MealItem key={item.hour} meal={item} />
  );

  const renderSectionHeader = ({
    section,
  }: {
    section: SectionListData<Meal, DefaultSectionT>;
  }) => <S.Title> {section.title}</S.Title>;

  return (
    <S.Container>
      <S.MealsLabel>Refeições</S.MealsLabel>
      <Button type="PRIMARY" title="Nova refeição" icon={<Plus size={18} color={COLORS.WHITE} />} />

      <SectionList
        sections={data}
        renderItem={renderItem}
        renderSectionHeader={renderSectionHeader}
        showsVerticalScrollIndicator={false}
        fadingEdgeLength={200}
      />
    </S.Container>
  );
}
