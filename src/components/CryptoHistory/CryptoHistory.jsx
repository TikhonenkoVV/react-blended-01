import PropTypes from 'prop-types';
import { BaseTable, THead, Th, Tr, Td } from './CryptoHistory.styled';
import { formatDate } from 'services/format-date';

export const CryptoHistory = ({ cryptoHistory }) => {
  return (
    <BaseTable>
      <THead>
        <tr>
          <Th>№</Th>
          <Th>PRICE</Th>
          <Th>AMOUNT</Th>
          <Th>DATE</Th>
        </tr>
      </THead>

      <tbody>
        {cryptoHistory.map((item, index) => (
          <Tr key={item.id}>
            <Td>{index + 1}</Td>
            <Td>{item.price}</Td>
            <Td>{item.amount}</Td>
            <Td>{formatDate(item.date)}</Td>
          </Tr>
        ))}
      </tbody>
    </BaseTable>
  );
};

CryptoHistory.propTypes = {
  cryptoHistory: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      price: PropTypes.number.isRequired,
      amount: PropTypes.number.isRequired,
      date: PropTypes.string.isRequired,
    }),
  ),
};
