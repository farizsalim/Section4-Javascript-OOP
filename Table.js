class Table {
    constructor(dataTable){
        this.dataTable = dataTable;
    }

    createHeader(data){
        let openTag = `<thead><tr><th scope="col">No.</th>`
        data.forEach((header) => {
            openTag += `<th scope="col">${header}</th>`
        });
        let closeTag = '<th scope="col">Action</th></tr></thead>'

        return openTag + closeTag;
    }

    createBody(data){
        let openTag = `<tbody>`
        data.forEach((body,index) =>{
            openTag += `
            <tr>
                <td>${index + 1}</td>
                <td>${body[0]}</td>
                <td>${body[1]}</td>
                <td>${body[2]}</td>
                <td>
                    <button type="button" class="btn btn-primary">Edit</button>
                    <button type="button" class="btn btn-danger">Delete</button>
                </td>
            </tr>`
        } )
        let closeTag = '</tr></tbody>' 

        return openTag + closeTag;
    }

    render(element){
        let table = `
        <table class="table">
        ${this.createHeader(this.dataTable.header)}
        ${this.createBody(this.dataTable.data)}
        </table>`
        element.innerHTML = table;
    }
}

export default Table;