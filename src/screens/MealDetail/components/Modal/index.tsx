import { Button } from '@components/Button';

import * as S from './styles';

type Props = {
  onCancel: () => void;
  onConfirm: () => void;
  visible: boolean;
};

export function Modal({ onCancel, onConfirm, visible }: Props) {
  return (
    <S.Overlayer visible={visible}>
      <S.Container>
        <S.Content>
          <S.Title>Deseja realmente excluir o registro da refeição?</S.Title>
          <S.ButtonContainer>
            <Button
              title="Cancelar"
              onPress={onCancel}
              type="SECONDARY"
              style={S.ButtonStyle.container}
            />
            <S.Separator />
            <Button title="Sim, excluir" onPress={onConfirm} style={S.ButtonStyle.container} />
          </S.ButtonContainer>
        </S.Content>
      </S.Container>
    </S.Overlayer>
  );
}
