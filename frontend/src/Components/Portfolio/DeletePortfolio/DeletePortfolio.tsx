import { SyntheticEvent } from 'react'

interface Props {
    onPortfolioDelete: (e: SyntheticEvent) => void;
    portfolioValue: string;
}

const DeletePortfolio = (props: Props) => {
    return (
        <div>
            <form onSubmit={props.onPortfolioDelete}>
                <input hidden={true} value={props.portfolioValue} />
                <button>Delete</button>
            </form>
        </div>
    )
}

export default DeletePortfolio