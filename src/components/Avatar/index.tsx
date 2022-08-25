import { ImgHTMLAttributes } from 'react';
import { Container } from './styles';

interface AvatarProps extends ImgHTMLAttributes<HTMLImageElement> {
  hasBorder?: boolean;
}

export function Avatar({hasBorder = true, ...props }: AvatarProps) {
  return (
    <Container hasBorder={hasBorder}>
      <img {...props} />
    </Container>
  );
}
