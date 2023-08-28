import LogoImg from '@assets/logo.svg';
import profileImg from '@assets/profile.png';

import * as S from './styles';

export function Header() {
  return (
    <S.Container>
      <LogoImg />
      <S.Profile source={profileImg} />
    </S.Container>
  );
}
