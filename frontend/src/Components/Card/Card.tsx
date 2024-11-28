import "./Card.css";

type Props = {}

const Card = (props: Props) => {
    return (
        <div className='card'>
            <img
                alt=''
                src="https://images.unsplash.com/photo-1672617195387-1a890be98e28?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            />
            <div className='details'>
                <h2>AAPL</h2>
                <p>$110</p>
            </div>
            <p className='info'>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde, temporibus.
            </p>
        </div>
    )
}

export default Card