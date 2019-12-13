async function getProbeData() {
    response = await fetch("probe_details.json")
    // console.log(response)
    result = await response.json()
    return result
}

let probe_details = getProbeData();
console.log(probe_details.then((result) => {
    // console.log(result)
    let probes_element = document.getElementById("probes")
    list_tr = "";

    let probes = document.getElementById("probes");    
    for (const probe_id in result["probes"]) {
        console.log(probe_id)
        details = "";
        for (const key in result["probes"][probe_id]["details"]) {
            details += `${key}:${result["probes"][probe_id]["details"][key]}<br>`
        }
        tr = `<tr>
                    <th scope="row">${probe_id}</th>
                    <td>
                        ${details}
                    </td>
                    <td align="center" >
                        <div id="proces_id_${probe_id}"></div>
                    </td>
                    <td align="center">
                        <div class="container">
                            <button type="button" class="btn btn-info" id="add_button_${probe_id}" onclick="addProbe(${probe_id})">Add Probe</button>
                        </div>
                    </td>
            </tr>`
        list_tr +=tr;
        console.log(details);

    }

    probes_element.innerHTML = list_tr;
    console.log(list_tr);
}).catch((err) => {
    console.log(result);

}))



function addProbe(id) {
    console.log('Add Probe event trigger for this probe');
    console.log(id);

    let process_id = `proces_id_${id}`
    let add_button_id = `add_button_${id}`
    let process_element = document.getElementById(process_id)

    my_spinner = `<div class="spinner-border text-success" role="status">
                    <span class="sr-only">Loading...</span>
                  </div>`    
    process_element.innerHTML = my_spinner;


    


    // Disable button 
    document.getElementById(add_button_id).disabled = true;
}