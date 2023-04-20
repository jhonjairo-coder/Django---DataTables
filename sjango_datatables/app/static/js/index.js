let datatable;
let dataTableIsInitialized=false;

const dataTableOptions={
    columnDefs:[
        {className:'centered',targets:[0,1,2,3,4,5,6]},
        {orderable: false, targets:[5,6]},
        {searchable:false,targets:[0,5,6]}
    ],
    pageLength: 4,
    destroy: true
}

const initDaTable = async() => {
    if (dataTableIsInitialized) {
        datatable.destroy();
    } 
    await listProgrammers();

    dataTable=$('#dataTables-programmers').dataTable(dataTableOptions);
    dataTableIsInitialized = true;

    console.log(dataTable);
};



const listProgrammers = async()=>{
    try {
        const response = await fetch('http://127.0.0.1:8000/app/list_programers/');
        const data = await response.json();
        console.log(data.programmers);
        let content = ``;
        data.programmers.forEach((programmer, index)=>{
            content +=`
                <tr>
                    <td>${index+1}</td>
                    <td>${programmer.name}</td>
                    <td>${programmer.country}</td>
                    <td>${programmer.birthday}</td>
                    <td>${programmer.score}</td>
                    <td>${programmer.score >= 8 
                        ? "<i class='fa-solid fa-check' style='color: #58fe10;'></i>"
                        : "<i class='fa-solid fa-xmark' style='color: #ff0505;'></i>" }</td>
                    <td>
                        <button class='btn btn-sm btn-primary'><i class='fa-solid fa-pencil'></i></button>
                        <button class='btn btn-sm btn-danger'><i class='fa-solid fa-trash-can'></i></button>
                    </td>
                </tr>
            `;     
        });
        tableBody_programmers.innerHTML =  content;

    } catch (error) {
        
    }
}


window.addEventListener('load', async()=>{
    await initDaTable();
});