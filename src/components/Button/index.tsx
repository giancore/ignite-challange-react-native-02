import { TouchableOpacityProps } from 'react-native';

import * as S from './styles';

type Props = TouchableOpacityProps & {
  title: string;
  icon?: JSX.Element;
  type?: S.ButtonTypeStyleProps;
};

export function Button({ title, icon, type = 'PRIMARY', ...rest }: Props) {
  return (
    <S.Container type={type} {...rest}>
      {icon && <S.IconContainer>{icon}</S.IconContainer>}
      <S.Title type={type}>{title}</S.Title>
    </S.Container>
  );
}
