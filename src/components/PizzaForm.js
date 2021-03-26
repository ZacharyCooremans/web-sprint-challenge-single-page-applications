import React from 'react'

export default function PizzaForm(props){
    const {values, submit, change, disabled} = props

    const onSubmit = (evt) => {
        evt.preventDefault();
        submit();
    };
    
    const onChange = (evt) => {
        const {name, value, type, checked} = evt.target;
        const valueToUse = type === 'checkbox' ? checked : value;
        change(name, valueToUse)
    }
    return(
        <form className='form-container' onSubmit={onSubmit}>
            <div className='form-commit'>
    
                <header>
                    Build Your own Pizza
                </header>
    
                <div>
                    <h1>THIS WILL BE PIZZA PICTURE</h1>
                </div>
                <label>
                    <h2>Your name</h2>
                    <p>Required</p>
                    <input 
                        name='name'
                        type='text'
                        value={values.name}
                        onChange={onChange}
                    />
                </label>
    
                <label className='size'>
                    <h2>Choice of Size</h2>
                    <p>Required</p>
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
                    <h2>Choice of Sauce</h2>
                    <p>Required</p>
                    <label>
                        Original Red
                        <input
                        name='sauce'
                        type='radio'
                        value='original red'
                        checked={values.sauce}
                        onChange={onChange}
                        />
                    </label>
                    <label>
                        Garlic Ranch
                        <input 
                            name='sauce'
                            type='radio'
                            value='garlic ranch'
                            checked={values.sauce}
                            onChange={onChange}
                        />
                    </label>
                    <label>
                        BBQ Sauce
                        <input 
                            name='sauce'
                            type="radio"
                            value='bbq sauce'
                            checked={values.sauce}
                            onChange={onChange}
                        />
                    </label>
                    <label>
                        Spinach Alfredo
                        <input 
                            name='sauce'
                            type='radio'
                            value='spinach alfredo'
                            checked={values.sauce}
                            onChange={onChange}
                        />
                    </label>
                </div>
    
                <div className='toppings'>
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
                        Diced Tomatos
                        <input 
                            name='tomatos'
                            type='checkbox'
                            checked={values.tomatos}
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
                </div>
    
                <div className='substitute'>
                    <h2>Choice of substitutes</h2>
                    <p>Choose up to 1</p>
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
    
                <div className='special'>
                    <h2>Special Instructions</h2>
                    <input 
                        name='special'
                        type="text"
                        value={values.special}
                        onChange={onChange}
                        placeholder="Anything else you'd like to add?"
                    />
                </div>

                <button disabled={disabled}>Submit</button>
    
            </div>
        </form>
    )
}
