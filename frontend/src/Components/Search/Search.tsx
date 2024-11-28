import React, { SyntheticEvent } from 'react'

interface Props {
    onClick: (e: SyntheticEvent) => void;
    search: string | undefined;
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Search: React.FC<Props> = (props: Props): JSX.Element => {
    return (
        <div>
            <input type='text' value={props.search} onChange={(e) => props.handleChange(e)}></input>
            <button onClick={(e) => props.onClick(e)}>Search</button>
        </div>
    )
}

export default Search