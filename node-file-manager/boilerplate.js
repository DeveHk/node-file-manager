fs=require('fs')
folder=process.argv[2]
files=process.argv.slice(3)
fs.mkdirSync(folder)
console.log(`${folder} created`)
for(i in files){
    fs.writeFile(`${folder}/${files[i]}`,'',(err)=>{
        if (err) console.error(err)
    })
    console.log(`${files[i]} file created`)
}