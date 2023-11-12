const { log } = require('console')
const express = require('express')
const app = express()

const question = [
    {
        question:"how to install python",
        slug:"how-to-install-python",
        votes:3,
        views:10,
        tags:"phython, pip, quary"
    },
    {
        question:"how to install node",
        slug:"how-to-install-node",
        votes:3,
        views:10,
        tags:"node, pip, quary"
    },
    {
        question:"how to install mongodb",
        slug:"how-to-install-mongodb",
        votes:3,
        views:10,
        tags:"mongodb, pip, quary"
    }
]

const Users = [
    {
        name:"Babu",
        followers:505 ,
        location:"chennai"

    },
    {
        name:"cheran",
        followers: 2098,
        location:"vinjamuru"

    },
    
    {
        name:"Bunny",
        followers:10632 ,
        location:"hyd"

    },
    
    
]

const Tags =[
    {
        name:"python",
        discription:"most popular languege",
        noofquestionsask: 3,

    },
    {
        name:"pip",
        discription:"sub dibvesion",
        noofquestionsask:2 ,
        
    },
    {
        name:"java script",
        discription:"most powerful languege",
        noofquestionsask: 15 ,
        
    }
]

const Companies = [
    {
        name:"microsoft",
        discription:"the company it was bulid microsoft softwares",
        location:"USA",
        tags:"MS office"
    },
    {
        name:"capgemeni",
        discription:"software company",
        location:"chennai",
        tags:"web pages"
    },
    {
        name:"congnigent",
        discription:"software company",
        location:"HYD",
        tags:"softwares"
    }
]

app.get('/',(req, res) =>{
    res.send("Home")

})

app.get('/questions',(req, res) =>{
    res.send(question)
    
})

app.get('/questions/:slug',(req, res) =>{
   console.log(req.params.slug)
    const slug = req.params.slug
question.map(obj =>{
        if(obj.slug === slug){
            res.send(obj)
        }
        
    })
    res.send("Question not found")
    
})      

app.get('/users',(req, res) =>{
    res.send(Users)

})

app.get('/tags',(req, res) =>{
    res.send(Tags)

})

app.get('/jobs/companies',(req, res) =>{
    res.send(Companies)

})

app.listen(3000,() =>{
    console.log("Listining.....");
})