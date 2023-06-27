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
