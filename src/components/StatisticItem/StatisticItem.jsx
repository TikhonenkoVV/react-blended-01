import PropTypes from 'prop-types';
import {
  StatisticBox,
  StatisticText,
  StatisticCounter,
} from './StatisticItem.styled';
import { IconContext } from 'react-icons';

export const StatisticItem = ({title, total, icon}) => {
  return <StatisticBox>
    <IconContext.Provider
      value={{ color: 'blue', size: '50px' }}
    >
    {icon}
    </IconContext.Provider>
    <StatisticCounter>{total}</StatisticCounter>
    <StatisticText>{title}</StatisticText>
  </StatisticBox>;
};
StatisticItem.propTypes = {
  title: PropTypes.string.isRequired,
  total: PropTypes.number.isRequired,
  icon: PropTypes.object.isRequired,
}
