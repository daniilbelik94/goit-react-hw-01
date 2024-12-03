import styles from './TransactionHistory.module.css'

export default function TransactionHistory({ items }) {
    return (
        <table  className={styles.table}>
  <thead className={styles.table_thead}>
    <tr>
      <th className={styles.table_th}>Type</th>
      <th className={styles.table_th}>Amount</th>
      <th className={styles.table_th}>Currency</th>
    </tr>
  </thead>

    <tbody>
        {items.map(item => (
            <tr className={styles.table_tr} key={item.id} > 
                <td className={styles.table_td}>{item.type}</td>
                <td className={styles.table_td}>{item.amount}</td>
                <td className={styles.table_td}>{item.currency}</td>
             </tr>
            ))}
  </tbody>
</table>

    );
}
