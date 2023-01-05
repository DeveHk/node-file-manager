import {createRequire} from 'module'
const require=createRequire(import.meta.url)
import {franc} from 'franc'
const la=require('langs')
const color=require('colors')
const statement=process.argv[2]
try{
console.log(la.where("3",franc(statement))['name'].red)
}
catch(e){
    console.log('not enough data')
}