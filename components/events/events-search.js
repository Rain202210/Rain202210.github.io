import Button from "../ui/button"
import classes from './events-search.module.css'
import { useRef } from "react"

function EventSearch(props){
    const yearInput = useRef()
    const monthInput = useRef()

    function submitHandler(event){
        event.preventDefault()
        const selectedYear = yearInput.current.value
        const selectedMonth = monthInput.current.value

        props.onSearch(selectedYear,selectedMonth)
    }
    return(
        <form className={classes.form}>
            <div className={classes.controls}>
                <div className={classes.control}>
                    <label htmlFor="year">Year</label>
                    <select id='year' ref={yearInput}>
                        <option value='2021'>2021</option>
                        <option value='2022'>2022</option>
                    </select>
                </div>
                <div className={classes.control}>
                    <label htmlFor="month">Month</label>
                    <select id='month' ref={monthInput}>
                        <option value='1'>January</option>
                        <option value='2'>February</option>
                    </select>
                </div>
            </div>
        <Button onClick={submitHandler}>Find Events</Button>
        </form>
    )
}
export default EventSearch