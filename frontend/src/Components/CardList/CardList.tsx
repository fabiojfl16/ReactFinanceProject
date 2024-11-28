import React, { SyntheticEvent } from 'react'
import Card from '../Card/Card'
import { CompanySearch } from '../../company'
import { v4 as generateId } from 'uuid';

interface Props {
    searchResults: CompanySearch[];
    onPortfolioCreate: (e: SyntheticEvent) => void;
}

const CardList: React.FC<Props> = (props: Props): JSX.Element => {
    return <>
        {
            props.searchResults.length > 0 ?
                (
                    props.searchResults.map((result) => {
                        return (
                            <Card
                                id={result.symbol}
                                key={generateId()}
                                searchResult={result}
                                onPortfolioCreate={props.onPortfolioCreate}
                            />
                        )
                    })
                ) :
                (
                    <p className="mb-3 mt-3 text-xl font-semibold text-center md:text-xl">
                        No results!
                    </p>
                )
        }
    </>;

}

export default CardList