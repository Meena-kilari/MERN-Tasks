//index.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
app.use(cors());
app.use(express.json());
mongoose.connect('mongodb://localhost:27017/Biography',{

});
const itemSchema=new mongoose.Schema({
	cmid:{ type: Number, required: true },
	cmname:{ type: String, required: true },
	cmdob:{ type: Date, required: true },
	cmstatus:{type:Boolean,default:false,required:true},
	cmsalary:{ type: Number, required: true },
	cmaddress: [{ city: { type: String, required: true }, pincode: { type: Number, required: true } }],
	cmmail:{ type: String, required: true }
});



const Item = mongoose.model('Cminfo',itemSchema);






app.get('/cmdata', async (req, res) => {
    
        const items = await Item.find();
        res.send(items);
    
});

/*app.get('/cmdata/:id', async (req, res) => {
    
        const items = await Item.findOne(req.params.id,req.body,{new:true});
        res.send(items);
    
});*/

app.post('/cmdata', async (req, res) => {
    
        const item = new Item(req.body);
        await item.save();
        res.send(item);
    
});

app.put('/cmdata/:id',async (req,res) => {
	const items = await Item.findByIdAndUpdate(req.params.id,req.body,{new:true});
	res.send(items);
});


app.delete('/cmdata/:id',async (req, res) => {
	await Item.findByIdAndDelete(req.params.id);
	res.send({message:'Item deleted'});
});



app.listen(5000,() => {
	console.log('server is running on port 5000')
});