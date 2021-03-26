import React, {useState, useEffect} from "react";
import './App.css'
import PizzaForm from './components/PizzaForm'
import axios from 'axios'
import * as yup from 'yup'
import {Route, Switch, Link} from 'react-router-dom'

import HomePage from "./components/PizzaHome"
import formSchema from './validation/FormSchema'

const initialFormValues = {
  name:'',
  size:'',

  pepperoni:false, sausage:false, canadian:false, italian:false, chicken:false,
  onions:false, green:false, tomatoes:false, olives:false, garlic:false,
  artichoke:false, cheese:false, pineapple:false, extra:false, gluten:false,
  
  special: ''
}
const initialFormErrors = {
  name: 'Name is required',
  size: 'Size is required',
}

const initialForm = [];


const App = () => {

  const [formValues, setFormValues] = useState(initialFormValues)
  const [formErrors, setFormErrors] = useState(initialFormErrors)
  const [disabled, setDisabled] = useState(true)

  const postPizza = pizza => {
    axios
    .post('https://reqres.in/api/pizza', pizza)
    .then((res) => {
      console.log(res.data)
    })
    .catch((err) => {
      console.log(err)
    })
    setFormValues(initialFormValues)
  }

  const change = (name, value) => {
    yup
    .reach(formSchema, name)
    .validate(value)
    .then(() => {
      setFormErrors({... formErrors, [name]: ''})
    })
    .catch((err) => {
      setFormErrors({...formErrors, [name]: err.errors[0]})
    })
  setFormValues({
    ...formValues, [name]: value
    })
  }

  const submit = () => {
    const pizza = {
      size: formValues.size.trim(),
      toppings:['pepperoni', 'sausage', 'canadian', 'italian',
               'chicken', 'onions', 'green', 'tomatoes', 'olives',
               'garlic', 'artichoke', 'cheese', 'pineapple', 'extra']
    }
    postPizza(pizza)
  }
  return (
    <>
    <Switch>
      <Route path="./components/PizzaForm/">
        <PizzaForm values={formValues} onChange={change} onSubmit={submit} disabled={disabled} errors={formErrors}/>
      </Route>
      <Route path='./components/'>
        <HomePage />
      </Route>
    </Switch>
    </>
  );
};
export default App;
