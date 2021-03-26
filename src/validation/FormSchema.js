
import * as yup from 'yup'

const formSchema = yup.object().shape({
    name: yup
        .string()
        .required('Name is required')
        .min(2, 'Name must be at least 2 characters or longer'),
    size: yup
        .required('Size is required'),

    size: yup
        .string()
        .oneOf(['small', 'medium', 'large', 'ex-large']),
    
    sauce: yup
        .string()
        .oneOf(['original red', "garlic ranch", "bbq sauce", "spinach alfredo"]),

    pepperoni: yup.boolean(),
    sausage: yup.boolean(),
    canadian: yup.boolean(),
    italian: yup.boolean(),
    chicken: yup.boolean(),
    onions: yup.boolean(),
    green: yup.boolean(),
    tomatoes: yup.boolean(),
    olives: yup.boolean(),
    garlic: yup.boolean(),
    artichokes: yup.boolean(),
    cheese: yup.boolean(),
    pineapple: yup.boolean(),
    extra: yup.boolean(),

    special: yup.string(),
})

export default formSchema;