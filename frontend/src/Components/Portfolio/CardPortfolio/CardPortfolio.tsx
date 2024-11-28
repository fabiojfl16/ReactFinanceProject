import { SyntheticEvent } from 'react'
import DeletePortfolio from '../DeletePortfolio/DeletePortfolio';

interface Props {
    portfolioValue: string;
    onPortfolioDelete: (e: SyntheticEvent) => void;
}

const CardPortfolio = (props: Props) => {
    return (
        <>
            <h4>{props.portfolioValue}</h4>
            <DeletePortfolio onPortfolioDelete={props.onPortfolioDelete} portfolioValue={props.portfolioValue} />
        </>
    )
}

export default CardPortfolio