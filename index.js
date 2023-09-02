import Table from "./Table.js";

const table = new Table({
    header:["Nama","Email","Profesi"],
    data:[
        ["Udin","udin@gmail.com","Desainer"],
        ["Agus","agus@gmail.com","Programmer"],
        ["Kaka","kaka@gmail.com","Welder"]
    ]
})

const app = document.getElementById("app");
table.render(app);