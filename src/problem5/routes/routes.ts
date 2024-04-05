const bodyParser = require('body-parser');   
app.use(bodyParser.json() );
app.get('/',(request,response)=>{
    response.send("test");
})

app.post('/api/news', (request,response)=>{
    const {name, title} = request.body;
    console.log(name);
    console.log(title);
    response.send("submit success");
})