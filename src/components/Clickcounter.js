import withCounter from './HOC/withcounter';

const clickcounter = (props) => {
    const { count, incrementCount } = props;
    return (
        <div>
            <button onClick={incrementCount}>Clicked {count} times</button>
        </div>
    );
};

export default withCounter(clickcounter);