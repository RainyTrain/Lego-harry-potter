import { useFormik } from "formik"
import React, { createContext } from "react"

type TFormik = {
    children: any
    [x: string]: string;
}

const FormikContext = createContext({})

export const Formik:React.FC<any> = ({children, ...props}) => {
    const formikStateAndHelpers = useFormik(props)
    return (
        <FormikContext.Provider value={formikStateAndHelpers}>
            {typeof children == 'function' ? children(formikStateAndHelpers) : children}
        </FormikContext.Provider>
    )
}