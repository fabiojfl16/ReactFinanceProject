import { SyntheticEvent } from "react"

interface Props {
    onPortfolioCreate: (e: SyntheticEvent) => void;
    symbol: string;
}

const AddPortfolio = ({ onPortfolioCreate, symbol }: Props) => {
    return (
        <form id="form-portfolio" onSubmit={onPortfolioCreate}>
            <input id='hidden-input' readOnly={true} hidden={true} value={symbol} />
            <button type="submit" id='btn-submit'>Add</button>
        </form>
    )
}

export default AddPortfolio