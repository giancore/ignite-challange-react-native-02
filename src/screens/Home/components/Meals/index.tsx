import { SectionList, SectionListData, SectionListRenderItem } from 'react-native';

import { useNavigation } from '@react-navigation/native';
import { format } from 'date-fns';
import { Plus } from 'phosphor-react-native';
import { useTheme } from 'styled-components/native';

import { Button } from '@components/Button';
import { Loading } from '@components/Loading';
import { AppNavigatorRoutesProps } from '@routes/app.routes';
import { Meal, MealSectionList } from '@types';

import * as S from './styles';
import { MealItem } from '../MealItem';

type Props = {
  sections: MealSectionList[];
  isLoading: boolean;
};

export function Meals({ isLoading, sections }: Props) {
  const { COLORS } = useTheme();
  const { navigate } = useNavigation<AppNavigatorRoutesProps>();

  const handleGoToNewMeal = () => navigate('newMeal');

  const renderListEmptyComponent = () => {
    return (
      <S.ListEmptyContainer>
        <S.MealsLabel>Não existem refeições cadastradas.</S.MealsLabel>
      </S.ListEmptyContainer>
    );
  };

  const renderItem: SectionListRenderItem<Meal> = ({ item }) => (
    <MealItem key={item.id} meal={item} />
  );

  const renderSectionHeader = ({
    section,
  }: {
    section: SectionListData<Meal, MealSectionList>;
  }) => <S.Title>{format(new Date(section.title), 'dd.MM.yyyy')}</S.Title>;

  return (
    <S.Container>
      <S.MealsLabel>Refeições</S.MealsLabel>

      <Button
        onPress={handleGoToNewMeal}
        type="PRIMARY"
        title="Nova refeição"
        icon={<Plus size={18} color={COLORS.WHITE} />}
      />

      {isLoading ? (
        <Loading />
      ) : (
        <SectionList
          sections={sections}
          renderItem={renderItem}
          renderSectionHeader={renderSectionHeader}
          ListEmptyComponent={renderListEmptyComponent}
          contentContainerStyle={{ flex: sections.length === 0 ? 1 : 0 }}
          showsVerticalScrollIndicator={false}
          fadingEdgeLength={200}
        />
      )}
    </S.Container>
  );
}
