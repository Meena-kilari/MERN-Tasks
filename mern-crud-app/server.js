                //server.js
const express=require('express');
const mongoose=require('mongoose');
const cors=require('cors');
const app=express();
app.use(cors());
app.use(express.json());
//config database
mongoose.connect('mongodb://localhost:27017/merncrud');

//models
const itemSchema=new mongoose.Schema({
	/*name:String*/
	eid:{ type: Number, required: true },
	ename:{ type: String, required: true },
	eage:{ type: Number, required: true },
	edob:{ type: Date, required: true },
	email:{ type: String, required: true }
});
const Item = mongoose.model('Item',itemSchema);
//controllers and routes
app.get('/items',async(req,res)=> {
	const items=await Item.find();
	res.send(items);
});
app.get('/items/:id',async(req,res)=> {
	const items=await Item.findOne({_id:req.params.id});
	res.send(items);
});

app.post('/items', async (req, res) => {
    const item = new Item(req.body);
    await item.save();
    res.send(item);
});
app.put('/items/:id',async(req,rea)=>{
	const item=await Item.findByIdAndUpdate(req.params.id,req.body,{new:true});
	res.send(item);
});
app.delete('/items/:id',async(req,res)=>{
	const item=await Item.findByIdAndDelete(req.params.id);
	res.send({message:'Item deleted'});
});
 
 app.listen(9000,()=>{
 	console.log('Server is running on port 9000');
 });