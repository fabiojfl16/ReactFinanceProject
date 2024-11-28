import React from 'react'
import CardPortfolio from '../CardPortfolio/CardPortfolio';

interface Props {
    portfolioValues: string[];
}

const ListPortfolio = (props: Props) => {
    return (
        <>
            <h3>My Portfolio</h3>
            <ul>
                {
                    props.portfolioValues &&
                    props.portfolioValues.map((value) => {
                        return <CardPortfolio portfolioValue={value} />
                    })
                }
            </ul>
        </>
    )
}

export default ListPortfolio