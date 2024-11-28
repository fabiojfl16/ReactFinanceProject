import { SyntheticEvent } from 'react'
import CardPortfolio from '../CardPortfolio/CardPortfolio';

interface Props {
    portfolioValues: string[];
    onPortfolioDelete: (e: SyntheticEvent) => void;
}

const ListPortfolio = (props: Props) => {
    return (
        <>
            <h3>My Portfolio</h3>
            <ul>
                {
                    props.portfolioValues &&
                    props.portfolioValues.map((value) => {
                        return <CardPortfolio 
                                    portfolioValue={value} 
                                    onPortfolioDelete={props.onPortfolioDelete} 
                                />
                    })
                }
            </ul>
        </>
    )
}

export default ListPortfolio