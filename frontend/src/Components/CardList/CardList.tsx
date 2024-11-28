import React from 'react'
import Card from '../Card/Card'
import { CompanySearch } from '../../company'
import { v4 as generateId } from 'uuid';

interface Props {
    searchResults: CompanySearch[];
}

const CardList: React.FC<Props> = (props: Props): JSX.Element => {
    return <>
        {
            props.searchResults.length > 0 ?
                (
                    props.searchResults.map((result) => {
                        return <Card id={result.symbol} key={generateId()} searchResult={result} />
                    })
                ) :
                (
                    <h1>No results</h1>
                )
        }
    </>;

}

export default CardList