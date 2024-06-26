const express = require('express');
const router = express.Router();
const {createClient} = require('@supabase/supabase-js');
const supabase = supabaseClient.createClient({
    apiKey: '<API_KEY>',
    project: '<PROJECT_ID>'
});
  
// all users are assigned a cart number when they create an account 
// when user adds item to cart, post request is made to add the item to the right cart_id (for now include a default cart_id associated with user = xxxdefault, default user = userxxx)
router.post('/carts/:cart_id/', async (req, res, next) => {
    const { cart_id } = req.params;
    if (cart_id === null) return res.status(403).json('Sign up for account.');

    try {
        const { item_id, quantity, unit_price, user_id } = req.body;
        const total_price = quantity * unit_price;
        const { error } = await supabase.from('carts').insert({
            cart_id: cart_id,
            item_id: item_id,
            quantity: quantity,
            unit_price: unit_price,
            total_price: total_price,
            user_id: user_id
        })

        if (error) return res.status(400).json({ message: `Error adding item ${item_id}`, errorMsg: error })
        return res.status(200).json('Item added!');
    } catch (error) {
        console.log('error in addToCart.js');
        return;
    }
});


router.get('/carts/:cart_id', async (req, res, next) => {
    const { cart_id } = req.params;
    try {
        const { data, error } = await supabase.from('carts').select().is('cart_id', cart_id);
        if (error) return res.status(404).json({ message: `Error retrieving cart for user.`, errorMsg: error })
        res.status(200).json(data);
    } catch (error) {
        console.log('error in addToCart.js');
        return;
    }
})