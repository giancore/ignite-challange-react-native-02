import 'react-native-get-random-values';

import { yupResolver } from '@hookform/resolvers/yup';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { format, parse } from 'date-fns';
import { Controller, useForm } from 'react-hook-form';
import { v4 as uuidv4 } from 'uuid';
import * as yup from 'yup';

import { Button } from '@components/Button';
import { Input, MaskInput } from '@components/Input';
import { Select } from '@components/Select';
import { AppRoutesType } from '@routes/app.routes';
import { mealCreate } from '@storage/meal';
import { Meal } from '@types';

import * as S from './styles';

type FormDataProps = {
  name: string;
  description?: string;
  date: string;
  hour: string;
  isDiet: boolean;
};

const mealSchema = yup.object({
  name: yup.string().required('Informe o nome'),
  description: yup.string(),
  date: yup.string().required('Informe a data'),
  hour: yup.string().required('Informe a hora'),
  isDiet: yup.boolean().required('Informe se a refeição está dentro da dieta'),
});

type Props = NativeStackScreenProps<AppRoutesType, 'newMeal'>;

export function NewMeal({ navigation, route }: Props) {
  const { name, description, date, isDiet, id } = route?.params?.meal || {};

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormDataProps>({
    defaultValues: {
      name,
      description,
      date: date ? format(new Date(date), 'dd/MM/yyyy') : undefined,
      hour: date ? format(new Date(date), 'HH:mm') : undefined,
      isDiet,
    },
    resolver: yupResolver(mealSchema),
  });

  async function handleAddMeal(data: FormDataProps) {
    try {
      const meal: Meal = {
        id: id ?? uuidv4(),
        description: data.description,
        isDiet: data.isDiet,
        name: data.name,
        date: parse(`${data.date} ${data.hour}`, 'dd/MM/yyyy HH:mm', new Date()),
      };

      await mealCreate(meal);

      if (data.isDiet) {
        navigation.navigate('mealIsDiet');
      } else {
        navigation.navigate('mealIsNotDiet');
      }
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <S.Container>
      <S.Content>
        <Controller
          control={control}
          name="name"
          render={({ field: { value, onChange } }) => (
            <Input
              label="Nome"
              errorMessage={errors.name?.message}
              onChangeText={onChange}
              value={value}
            />
          )}
        />
        <Controller
          control={control}
          name="description"
          render={({ field: { value, onChange } }) => (
            <Input
              label="Descrição"
              errorMessage={errors.description?.message}
              onChangeText={onChange}
              value={value}
              numberOfLines={6}
              multiline
              textAlignVertical="top"
            />
          )}
        />
        <S.InputContainerRow>
          <S.InputContainer>
            <Controller
              control={control}
              name="date"
              render={({ field: { value, onChange } }) => (
                <MaskInput
                  label="Data"
                  errorMessage={errors.date?.message}
                  onChangeText={onChange}
                  value={value}
                  type="date"
                  mask="99/99/9999"
                  keyboardType="numeric"
                  options={{
                    dateFormat: 'DD/MM/YYYY',
                  }}
                />
              )}
            />
          </S.InputContainer>

          <S.Separator />
          <S.InputContainer>
            <Controller
              control={control}
              name="hour"
              render={({ field: { value, onChange } }) => (
                <MaskInput
                  label="Hora"
                  errorMessage={errors.hour?.message}
                  onChangeText={onChange}
                  value={value}
                  type="time"
                  mask="99:99"
                  keyboardType="numeric"
                  options={{
                    timeFormat: 'HH:mm',
                  }}
                />
              )}
            />
          </S.InputContainer>
        </S.InputContainerRow>
        <S.InputContainer>
          <S.Label>Está dentro da dieta?</S.Label>

          <Controller
            control={control}
            name="isDiet"
            render={({ field: { value, onChange } }) => (
              <Select
                onSelectIfIsDiet={onChange}
                errorMessage={errors.isDiet?.message}
                value={value}
              />
            )}
          />
        </S.InputContainer>
      </S.Content>
      <S.ButtonContainer>
        <Button
          title={id ? 'Salvar alterações' : 'Cadastrar refeição'}
          onPress={handleSubmit(handleAddMeal)}
        />
      </S.ButtonContainer>
    </S.Container>
  );
}
