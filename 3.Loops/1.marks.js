let marks = {
    jit: 98,
    sunny: 96,
    tukai: 95

}

for(let i = 0; i<Object.keys(marks).length;i++){
    console.log("The marks of "+ Object.keys(marks)[i] + " are " + marks[Object.keys(marks)[i]])
}