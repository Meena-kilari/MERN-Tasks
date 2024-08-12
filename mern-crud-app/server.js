//index.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
app.use(cors());
app.use(express.json());
mongoose.connect('mongodb://localhost:27017/merncrud',{

});
const itemSchema=new mongoose.Schema({
	name:String
});



const Item = mongoose.model('Item',itemSchema);






app.get('/items', async (req, res) => {
    
        const items = await Item.find();
        res.send(items);
    
});

/*app.get('/items/:id', async (req, res) => {
    
        const items = await Item.findOne(req.params.id,req.body,{new:true});
        res.send(items);
    
});*/

app.post('/items', async (req, res) => {
    
        const item = new Item(req.body);
        await item.save();
        res.send(item);
    
});

app.put('/items/:id',async (req,res) => {
	const items = await Item.findByIdAndUpdate(req.params.id,req.body,{new:true});
	res.send(items);
});


app.delete('/items/:id',async (req, res) => {
	await Item.findByIdAndDelete(req.params.id);
	res.send({message:'Item deleted'});
});



app.listen(4000,() => {
	console.log('server is running on port 5000')
});