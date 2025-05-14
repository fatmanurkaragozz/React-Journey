// Props ile gelen sonucu gösteren bileşen
const ResultBox = ({ result }) => (
    <div className="result-box">
        <input
            type="text"
            value={result}
            placeholder="Converted amount"
            readOnly
            className="input result-input"
        />
    </div>
);

export default ResultBox;
