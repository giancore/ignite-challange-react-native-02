import { useState } from 'react';

import { yupResolver } from '@hookform/resolvers/yup';
import { useNavigation } from '@react-navigation/native';
import { AppNavigatorRoutesProps } from '@routes/app.routes';
import { Controller, useForm } from 'react-hook-form';
import { useTheme } from 'styled-components/native';
import * as yup from 'yup';

import { Button } from '@components/Button';
import { Input, MaskInput } from '@components/Input';
import { Select } from '@components/Select';

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

export function NewMeal() {
  const { COLORS } = useTheme();
  const { navigate, goBack } = useNavigation<AppNavigatorRoutesProps>();
  const [isDiet, setIsDiet] = useState<boolean>();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormDataProps>({
    defaultValues: {
      name: undefined,
      description: undefined,
      date: undefined,
      hour: undefined,
      isDiet: undefined,
    },
    resolver: yupResolver(mealSchema),
  });

  async function handleAddMeal(data: FormDataProps) {
    console.log(data);
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
        <Button title="Cadastrar refeição" onPress={handleSubmit(handleAddMeal)} />
      </S.ButtonContainer>
    </S.Container>
  );
}