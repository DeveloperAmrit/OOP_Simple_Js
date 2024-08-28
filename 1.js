let p = {
    run: (text)=>{
        console.log(text)
    },
    class_name:'p'
}

a = {
    class_name:'a'
}

// a inherits p

a.__proto__ = p

// first searches in self
console.log(a['class_name'])

// if not found then searches in parent
a.run('Hello this method has been inherited')