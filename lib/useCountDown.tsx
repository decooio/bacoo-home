import {useCallback, useEffect, useState} from "react";

const useCountDown = () => {
    const [count, setCount] = useState(0)
    const start = useCallback(() => {
            setCount(59)
        }, []
    )
    useEffect(() => {
        if (count > 0) {
            const interval = setInterval(() => {
                setCount(count - 1);
            }, 1000);
            return () => clearInterval(interval);
        }
        }, [count])
    return {
        startCountDown: start,
        countDown: count
    }
}
export default useCountDown
