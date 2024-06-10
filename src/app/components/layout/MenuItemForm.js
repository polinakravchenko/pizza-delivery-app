import {useEffect, useState} from "react";
import MenuItemPriceProps from "../layout/MenuItemPriceProps";

export default function MenuItemForm({onSubmit, menuItem}) {

    const [name, setName] = useState(menuItem?.name || '');
    const [description, setDescription] = useState(menuItem?.description || '');
    const [basePrice, setbasePrice] = useState(menuItem?.basePrice || '');
    const [sizes, setSizes] = useState(menuItem?.sizes || []);
    const [category, setCategory] = useState(menuItem?.category || '');
    const [extraIngredientPrices, setExtraIngredientPrices] = useState(menuItem?.extraIngredientPrices || []);
    const [categories, setCategories] = useState([]);

    useEffect(() => {
      fetch('/api/categories').then(res => {
        res.json().then(categories => {
          setCategories(categories);
        });
      });
    }, []);
    
    return (
        <form 
        onSubmit={ev => onSubmit(ev, {name, description, basePrice, sizes, extraIngredientPrices, category,})} 
        className="mt-8 max-w-md mx-auto">
        <div className="flex items-end gap-4">
          <div className="grow">
            <label>Menu item</label>
            <input type="text" value={name} onChange={ev => setName(ev.target.value)}/>
            <label>Description</label>
            <input type="text" value={description} onChange={ev => setDescription(ev.target.value)}/>
            <label>Category</label>
            <select value={category} onChange={ev => setCategory(ev.target.value)}>
            {categories?.length > 0 && categories.map(c => (
              <option key={c._id} value={c._id}>{c.name}</option>
            ))}
            </select>
            <label>Base Price</label>
            <input type="text" value={basePrice} onChange={ev => setbasePrice(ev.target.value)}/>
            <MenuItemPriceProps name={'Sizes'} 
                                addLabel={'Add item size'} 
                                props={sizes} setProps={setSizes}/>
            <MenuItemPriceProps name={'Extra ingredients'}
                                addLabel={'Add ingredients prices'}
                                props={extraIngredientPrices} setProps={setExtraIngredientPrices}/>
            <button className="submit">Save</button>
          </div>
        </div>
      </form>
    );
}