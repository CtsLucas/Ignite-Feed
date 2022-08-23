import PropTypes from 'prop-types';
import { Container } from './styles';

export function Avatar({ src, hasBorder = true }) {
  return (
    <Container hasBorder={hasBorder}>
      <img src={src} alt="" />
    </Container>
  );
}

Avatar.propTypes = {
  src: PropTypes.string.isRequired,
  hasBorder: PropTypes.bool,
};

Avatar.defaultProps = {
  hasBorder: true,
};
