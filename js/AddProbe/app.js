
displayProbeDetails();

function displayProbeDetails() {

    let result = getProbeData();
    // print(result);
    console.log(result)

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
        list_tr += tr;
        console.log(details);

    }

    probes_element.innerHTML = list_tr;
    console.log(list_tr);

}





async function executeAddProbeRestApi(url, data) {
    console.log("Executing Add Probe API");
    console.log(url);
    // console.log(data);
    new_data = JSON.stringify(data);
    console.log(data)
    let param = {
        "mode": "no-cors",
        "method": 'post',
        "headers": {
             
            'Content-Type': 'application/json'
        },
        "body":data
    }


    console.log(param);

    let response = await fetch(url, param)
    let json_response = response.json()
    return json_response
}


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

    // Generate url

    let probeData = getProbeData()
    console.log(probeData);
    details = probeData["probes"][id]["details"]
    url = probeData["tafServer"] + probeData["probes"][id]["probeAddApi"]

    details["probeIP"] = "192.168.33.242"
    details["probeUserName"] = "admin"
    details["probePassword"] = "Cumulus@1"
    console.log("Generated probe data ")
    console.log(details);
    console.log(url);


    executeAddProbeRestApi(url,details).then(result=>{
        console.log("Api completed execution")
        document.getElementById(add_button_id).disabled = false;
        process_element.innerHTML = result;

    }).catch(error=>{
        console.log("Api fail execution")
        document.getElementById(add_button_id).disabled = false;
        process_element.innerHTML = error;
    })

}





function getProbeData() {
    // const fs = require('fs')
    // fs.readFile('probe_details.json', 'utf8', (err, jsonString) => {
    // if (err) {
    //     console.log("File read failed:", err)
    //     return
    // }
    // console.log('File data:', jsonString) 
    // })


    let data = {
        "tafServer": "http://192.168.34.83:8080",
        "probes": {
            "1": {
                "probe": "HDCA",
                "probeAddApi": "/api/hdca/probe/DCNM/addProbe",

                "details": {
                    "ip": "192.168.33.245",
                    "protocol": "https",
                    "username": "admin",
                    "password": "dcnm@123"
                }
            },
            "2": {
                "probe": "HDCA",
                "probeAddApi": "/api/hdca/probe/DCNM/addProbe",

                "details": {
                    "ip": "192.168.33.245",
                    "protocol": "https",
                    "username": "admin",
                    "password": "dcnm@123"
                }

            }
        }
    }


    return data;
}