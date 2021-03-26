import React from 'react'
import {Link, useRouteMatch} from 'react-router-dom'


const PizzaForm = (props) =>{
    const {values, submit, change, disabled, errors,} = props

    const onSubmit = (evt) => {
        evt.preventDefault();
        submit();
    };
    
    const onChange = (evt) => {
        const {name, value, type, checked} = evt.target;
        const valueToUse = type === 'checkbox' ? checked : value;
        change(name, valueToUse)
    }

    const { url } = useRouteMatch()

    return(
        <form onSubmit = {onSubmit}>
            <div className='form'>
            <div className='form-commit'>
                <h1>MAKE A PIZZA</h1>

                    <div className="errors">
                        <div>{errors.name}</div>
                        <div>{errors.size}</div>
                    </div>
                </div>

                <div className="form-group inputs">
                    <label>
                        Your name
                        Required
                        <input 
                            name='name'
                            type='text'
                            value={values.name}
                            onChange={onChange}
                        />
                    </label>
        
                    <label>
                        Choice of Size
                        Required
                        <select
                        name='size'
                        value={values.size}
                        onChange={onChange}>
                            <option value="">Select</option>
                            <option value='small'>Small</option>
                            <option value='medium'>Medium</option>
                            <option value='large'>Large</option>
                            <option value="ex-large">EX-Large</option>
                        </select> 
                    </label>
        
                    <div className='Sauce'>
                        Choice of Sauce
                        Required
                        <label>
                            Original Red
                            <input
                            name='sauce'
                            type='radio'
                            value='originalRed'
                            checked={values.sauce === 'originalRed'}
                            onChange={onChange}
                            />
                        </label>
                        <label>
                            Garlic Ranch
                            <input 
                                name='sauce'
                                type='radio'
                                value='garlicRanch'
                                checked={values.sauce === 'garlicRanch'}
                                onChange={onChange}
                            />
                        </label>
                        <label>
                            BBQ Sauce
                            <input 
                                name='sauce'
                                type="radio"
                                value='bbqSauce'
                                checked={values.sauce === 'bbqSauce'}
                                onChange={onChange}
                            />
                        </label>
                        <label>
                            Spinach Alfredo
                            <input 
                                name='sauce'
                                type='radio'
                                value='spinachAlfredo'
                                checked={values.sauce === 'spinachAlfredo'}
                                onChange={onChange}
                            />
                        </label>
                    </div>
        
                    <label>
                        <h2>Add Toppings</h2>
                        <p>Choose up to 10</p>
                        <label>
                            Pepperoni
                            <input 
                                name='pepperoni'
                                type='checkbox'
                                checked={values.pepperoni}
                                onChange={onChange}
                            />
                        </label>
                        <label>
                            Sausage
                            <input 
                                name='sausage'
                                type='checkbox'
                                checked={values.sausage}
                                onChange={onChange}
                            />
                        </label>
                        <label>
                            Canadian Bacon
                            <input 
                                name='canadian'
                                type='checkbox'
                                checked={values.canadian}
                                onChange={onChange}
                            />
                        </label>
                        <label>
                            Spicy Italian Sausage
                            <input 
                                name='italian'
                                type='checkbox'
                                checked={values.italian}
                                onChange={onChange}
                            />
                        </label>
                        <label>
                            Grilled Chicken
                            <input 
                                name='chicken'
                                type='checkbox'
                                checked={values.chicken}
                                onChange={onChange}
                            />
                        </label>
                        <label>
                            Onions
                            <input 
                                name='onions'
                                type='checkbox'
                                checked={values.onions}
                                onChange={onChange}
                            />
                        </label>
                        <label>
                            Green Pepper
                            <input 
                                name='green'
                                type='checkbox'
                                checked={values.green}
                                onChange={onChange}
                            />
                        </label>
                        <label>
                            Diced Tomatoes
                            <input 
                                name='tomatoes'
                                type='checkbox'
                                checked={values.tomatoes}
                                onChange={onChange}
                            />
                        </label>
                        <label>
                            Black Olives
                            <input 
                                name='olives'
                                type='checkbox'
                                checked={values.olives}
                                onChange={onChange}
                            />
                        </label>
                        <label>
                            Roasted Garlic
                            <input 
                                name='garlic'
                                type='checkbox'
                                checked={values.garlic}
                                onChange={onChange}
                            />
                        </label>
                        <label>
                            Artichoke Hearts
                            <input 
                                name='artichoke'
                                type='checkbox'
                                checked={values.artichoke}
                                onChange={onChange}
                            />
                        </label>
                        <label>
                            Three Cheese
                            <input 
                                name='cheese'
                                type='checkbox'
                                checked={values.cheese}
                                onChange={onChange}
                            />
                        </label>
                        <label>
                            Pineapple
                            <input 
                                name='pineapple'
                                type='checkbox'
                                checked={values.pineapple}
                                onChange={onChange}
                            />
                        </label>
                        <label>
                            Extra cheese
                            <input 
                                name='extra'
                                type='checkbox'
                                checked={values.extra}
                                onChange={onChange}
                            />
                        </label>
                    </label>
        
                    <div className='substitute'>
                        Choice of substitutes
                        Choose up to 1
                        <label>
                            Gluten Free Crust (+ $1.00)
                            <input 
                                name='gluten'
                                type='checkbox'
                                checked={values.gluten}
                                onChange={onChange}
                            />
                        </label>
                    </div>
        
                    <label>
                        Special Instructions
                        <input 
                            name='special'
                            type="text"
                            value={values.special}
                            onChange={onChange}
                            placeholder="Anything else you'd like to add?"
                        />
                    </label>
                </div>

            <div className='addTo'>
                    <button id="submit" disabled={disabled}>Make Pizza</button>
                </div>
            </div>

        </form>
        
    )
}

export default PizzaForm
