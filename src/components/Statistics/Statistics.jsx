import PropTypes from 'prop-types';
import { getRandomHexColor } from 'components/utils/randomHexColor';
import {
  StatisticsTile,
  StatisticsSection,
  StatisticsUl,
  StatisticsLi,
  StatisticsLabel,
  StatisticsPercentage,
} from './Statistics.styled';

export const Statistics = ({ stats, title }) => {
  return (
    <StatisticsSection>
      {title && <StatisticsTile>{title}</StatisticsTile>}

      <StatisticsUl>
        {stats.map(({ id, label, percentage }) => {
          return (
            <StatisticsLi
              style={{ backgroundColor: getRandomHexColor() }}
              key={id}
            >
              <StatisticsLabel>{label}</StatisticsLabel>
              <StatisticsPercentage>{percentage}%</StatisticsPercentage>
            </StatisticsLi>
          );
        })}
      </StatisticsUl>
    </StatisticsSection>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }).isRequired
  ),
};
