import React, {useState, useEffect} from "react";
import './App.css'
import PizzaForm from './components/PizzaForm'
import axios from 'axios'
import * as yup from 'yup'
import {Route, Switch} from 'react-router-dom'
import HomePage from "./components/PizzaHome"
import Nav from './components/nav'


import formSchema from './validation/FormSchema'

const initialFormValues = {
  name:'',
  size:'',
  sauce:'',

  pepperoni:false, sausage:false, canadian:false, italian:false, chicken:false,
  onions:false, green:false, tomatoes:false, olives:false, garlic:false,
  artichoke:false, cheese:false, pineapple:false, extra:false, gluten:false,
  
  special: ''
}
const initialFormErrors = {
  name: 'name is required',
  size: 'size is required',
  sauce: 'must pick a sauce',
}


const App = () => {
  const [pizza, setPizza] = useState([])
  const [formValues, setFormValues] = useState(initialFormValues)
  const [formErrors, setFormErrors] = useState(initialFormErrors)
  const [disabled, setDisabled] = useState(true)

  const getPizza = () => {
    axios
    .get('https://reqres.in/')
    .then((res) => {
      setPizza(res.data)
    })
    .catch((err) => {
      console.log(err)
    })
  }

  const postPizza = pizza => {
    axios
    .post('https://reqres.in/', pizza)
    .then((res) => {
      setFormValues(initialFormValues)
      setPizza([res.data, ...pizza])
      console.log(res.data)
    })
    .catch((err) => {
      console.log(err)
    })
    //setFormValues(initialFormValues)
  }

  const change = (name, value) => {
    yup
    .reach(formSchema, name)
    .validate(value)
    .then(() => {
      setFormErrors({...formErrors, [name]: '',
      });
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
      name: formValues.name.trim(),
      sauce: formValues.sauce.trim(),
      size: formValues.size.trim(),
      toppings:['pepperoni', 'sausage', 'canadian', 'italian',
               'chicken', 'onions', 'green', 'tomatoes', 'olives',
               'garlic', 'artichoke', 'cheese', 'pineapple', 'extra']
               .filter(topping => formValues[topping]),
    }
    postPizza(pizza)
  };

  useEffect(() => {
    getPizza()
  }, [])

  useEffect(() => {
    formSchema
    .isValid(formValues)
    .then((valid) => setDisabled(!valid))
  }, [formValues])

  return (

    <>
    <Switch>
      <Route path="/Pizza">
        <Nav />
        <PizzaForm 
        values={formValues} 
        change={change} 
        onSubmit={submit} 
        disabled={disabled} 
        errors={formErrors}
        pizza={pizza}
        postPizza={postPizza}

        />
      </Route>

      <Route path='/'>
        <Nav />
        <HomePage />
      </Route>
    </Switch>

    </>
    
  );
};
export default App;
