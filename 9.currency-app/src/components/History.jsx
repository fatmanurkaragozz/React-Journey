// Çevrim geçmişini listeleyen component
const History = ({ history }) => {
    return (
        <div className="history">
            <h3>Conversion History</h3>
            {history.length === 0 ? (
                <p className="history-empty">No history yet.</p>
            ) : (
                <ul>
                    {history.map((item, index) => (
                        <li key={index}>
                            {item.amount} {item.from} → {item.to} = {item.result}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default History;
