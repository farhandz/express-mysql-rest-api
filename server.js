const db = require('./config/db')
const User = require('./model/User')
const express = require('express')
const app = express()

app.use(express.urlencoded({extended: false}))
app.listen(3000, ()=>console.log('srver berjalan'))
app.get("/", async (req,res)=>{
    const data = await User.findAll()
    res.json(data)
})
app.post('/', async (req,res) =>{
    try {
        const { nama, email, umur } = req.body
        const Newuser = new User({
            nama,
            email,
            umur
        })
        await Newuser.save()
        res.json(Newuser)
    } catch (error) {
        res.status(500).send("server error")
    }
})
app.delete('/:id', async (req,res) => {
  try {
      const { id } = req.params
      const del = User.destroy({
          where: { id: id }
      })
      await del
      res.json("success delete user")
  } catch (error) {
      res.status(500).send("gagal delete user")
  }
})

app.put("/:id", async (req,res)=> {
    try {
        const { id } = req.params
        const { nama, email, umur } = req.body
        const updateUSer = User.update({nama: nama, email: email, umur: umur}, {
            where: {
                id: id
            }
        })
        await updateUSer
        res.json('data berhasil di update')
    } catch (error) {
        console.error(err.message)
        res.status(500).send('server error')
    }
})

connetction = async () => {
    try {
        await db.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error( error.message);
    }
}
connetction()



