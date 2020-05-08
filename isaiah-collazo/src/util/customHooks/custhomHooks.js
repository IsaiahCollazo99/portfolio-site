import { useState } from "react"

export const useInput = (defaultValue) => {
    let [value, setValue] = useState(defaultValue);

    const onChange = (e) => {
        setValue(e.target.value);
    }

    return {value, onChange}
}