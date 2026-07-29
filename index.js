import express from "express";
import path from 'path'
import { MongoClient, ObjectId } from "mongodb";

const app=express();
const publicPath = path.resolve('public');
app.use(express.static(publicPath))
app.set("view engine",'ejs');

const dbName="TaskFlow";
const collectionName = "todo"
const url = "mongodb://localhost:27017"
const client = new MongoClient(url);

const connection =async ()=>{
    const connect = await client.connect()
    return await connect.db(dbName)
}

//middleware
app.use(express.urlencoded({ extended: false }));

app.get("/",async (req,res)=>{
    const db = await connection();
    const collection = db.collection(collectionName)
    const result = await collection.find().toArray();
    // console.log(result);
    res.render('list',{result});
})

app.get("/add",(req,res)=>{
    res.render('add');
})

app.get("/update",(req,res)=>{
    res.render('update');
})

app.post("/add",async (req,res)=>{
    const db=await connection();
    const collection = db.collection(collectionName);
    const result = collection.insertOne(req.body);
    if(result){
        res.redirect("/");
    }else{
        res.redirect("/add");
    }
})

app.post("/update",(req,res)=>{
    res.redirect("/");
})

app.get("/delete/:id",async (req,res)=>{
    const db=await connection();
    const collection = db.collection(collectionName);
    const result = collection.deleteOne({_id:new ObjectId(req.params.id)});
    if(result){
        res.redirect("/");
    }else{
        res.send("some error occured");
    }
})

app.get("/update/:id",async (req,res)=>{
    const db=await connection();
    const collection = db.collection(collectionName);
    const result = await collection.findOne({_id:new ObjectId(req.params.id)});
    console.log(result);
    if(result){
        res.render("update",{result});
    }else{
        res.send("some error occured");
    }
    // res.send('ok');
})

app.post("/update/:id",async (req,res)=>{
    const db=await connection();
    const collection = db.collection(collectionName);
    const filter={_id:new ObjectId(req.params.id)}
    const updateData={$set:{title:req.body.title,description:req.body.description}}
    const result = await collection.updateOne(filter,updateData);
    console.log(result);
    if(result){
        res.redirect("/");
    }else{
        res.send("some error occured");
    }
    // res.send('ok');
})

app.post("/multi-delete",async (req,res)=>{
    const db=await connection();
    const collection = db.collection(collectionName);
    console.log(req.body.selectedTask)
    
    let selectedTask = undefined;
    if(Array.isArray(req.body.selectedTask)){
    selectedTask = req.body.selectedTask.map((id)=>new ObjectId(id))
    }else{
    selectedTask = [new ObjectId(req.body.selectedTask)];
    }
    console.log(selectedTask);
    const result = await collection.deleteMany({_id:{$in:selectedTask}})
    if(result){
        res.redirect("/");
    }else{
        res.send("some error occured");
    }
    // res.send('ok');
})

app.listen(3200);