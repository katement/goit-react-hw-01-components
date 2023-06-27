import PropTypes from 'prop-types';
import { Tr, Trthead, Trtable } from './TransactionHistory.styled';

export const TransactionHistory = ({ transactions }) => (
  <Trtable class="transaction-history">
    <Trthead>
      <tr>
        <th>Type</th>
        <th>Amount</th>
        <th>Currency</th>
      </tr>
    </Trthead>

    <tbody>
      {transactions.map(({ id, type, currency, amount }) => {
        return (
          <Tr
            key={id}
            type={transactions.type}
            currency={transactions.currency}
            amount={transactions.amount}
          >
            <td>{type}</td>
            <td>{amount}</td>
            <td>{currency}</td>
          </Tr>
        );
      })}
    </tbody>
  </Trtable>
);

TransactionHistory.propTypes = {
  transactions: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ).isRequired,
};
