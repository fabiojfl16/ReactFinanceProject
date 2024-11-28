import React, { SyntheticEvent } from 'react'

interface Props {
    onSearchSubmit: (e: SyntheticEvent) => void;
    search: string | undefined;
    handleSearchChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Search: React.FC<Props> = (props: Props): JSX.Element => {
    return (
        <>
            <form onSubmit={props.onSearchSubmit}>
                <input value={props.search} onChange={props.handleSearchChange} />
            </form>
        </>
    );
}

export default Search