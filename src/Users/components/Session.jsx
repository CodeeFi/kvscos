import React, { useMemo } from 'react'


export function CalculateDate(cur_year) {

    let c_year = cur_year;
    c_year -= 5;
    let end_year = cur_year;
    end_year += 20;
    const sessionYear = [];
    while (c_year !== end_year) {
        sessionYear.push(c_year)
        c_year += 1;
    }
    return sessionYear;
}

export function MomoizeYear() {
    let cur_year = new Date().getFullYear();
    let year = useMemo(() => {
        return CalculateDate(cur_year)
    }, [cur_year])

    return (
        year
    );
}


function Session({ props }) {


    return (
        <>
            <option value={props}>{props}</option>
        </>
    )
}

export default Session