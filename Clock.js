function Clock() {
    const [time, setTime] = React.useState(new Date());

    React.useEffect(() => {
        setInterval(() => {
            setTime(new Date());            
        }, 100);
    }, []);

    const [hours, minutes, seconds] = [time.getHours(),
    time.getMinutes(), time.getSeconds()];

    function format(value) {
        return value < 10 ? "0" + value : value;
    }

    return (
        <div className="main">
            <div className="badge">
                CLOCKLY
            </div>
            <div className="clock">
                <span>{format(hours)}</span> :
                <span>{format(minutes)}</span> :
                <span>{format(seconds)}</span>
            </div>
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Clock />);
