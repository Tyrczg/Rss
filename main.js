const express = require('express')
const config = require('./src/app')


const port = process.env.PORT || config.get('port')

app.listen(port, () => console.log(`server listen at ${port}`))