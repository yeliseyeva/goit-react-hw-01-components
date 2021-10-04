import PropTypes from 'prop-types';
import s from './TransactionHistory.module.css'

function TransactionHistory ({items}) {
    return (
        <table className={s.transaction}>
            <thead >
                <tr className={s.tr}>
                <th>Type</th>
                <th>Amount</th>
                <th>Currency</th>
                </tr>
            </thead>

            <tbody>

                {items.map(item => (
                    <tr className={s.tr} key={item.id}>
                    <td>{item.type}</td>
                    <td>{item.amount}</td>
                    <td>{item.currency}</td>
                    </tr>
                ))} 
            </tbody>
        </table>

    )
}

TransactionHistory.propTypes = {
    item: PropTypes.arrayOf(PropTypes.shape({
        type: PropTypes.string.isRequired,
        amount: PropTypes.string.isRequired,
        currency: PropTypes.string.isRequired,
    }))
}

export default TransactionHistory;