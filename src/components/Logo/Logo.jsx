import LogoMobImage from 'helpers/logo/logoMobile.png';
import LogoMobImageX from 'helpers/logo/logoMobile@2x.png';
import LogoDeskImage from 'helpers/logo/logoDesk.png';
import LogoDeskImageX from 'helpers/logo/logoDesk@2x.png';

import {
  ImageThumb,
  LogoImage,
  LogoLink,
  LogoName,
  LogoNameAcent,
  LogoNameText,
} from './Logo.styled';

export default function Logo({ onClick, isAuth, isOnHome, UserId }) {
  return (
    <LogoLink onClick={onClick} to={isAuth ? `/${UserId}/diary` : '/home'}>
      <ImageThumb>
        <picture>
          <source
            srcSet={`${LogoMobImage} 1x, ${LogoMobImageX} 2x`}
            media="max-width: 480px"
            type="image/png"
          />
          <source
            srcSet={`${LogoDeskImage} 1x, ${LogoDeskImageX} 2x`}
            media="min-width: 481px"
            type="image/png"
          />
          <LogoImage src={LogoDeskImage} alt="Company logo" />
        </picture>
      </ImageThumb>
      <LogoName isAuth={isAuth} isOnHome={isOnHome}>
        <LogoNameText>Slim</LogoNameText>
        <LogoNameAcent>Mom</LogoNameAcent>
      </LogoName>
    </LogoLink>
  );
}
