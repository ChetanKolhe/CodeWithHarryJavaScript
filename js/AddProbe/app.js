
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
                        <button type="button" class="btn btn-info" id="add_button_${probe_id}" onclick="addProbe('${probe_id}')">Add Probe</button>
                    </div>
                </td>
        </tr>`
        list_tr += tr;
        // console.log(details);

    }
    console.log(list_tr);
    probes_element.innerHTML = list_tr;
    console.log(list_tr);

}

async function executeAddProbeRestApi(url, data) {
    console.log("Executing Add Probe API");
    console.log(url);
    console.log(data);
    new_data = JSON.stringify(data);
    let post_request = await $.ajax({
        // mode:"no-core",
        contentType: "application/json",
        url: url,
        type: 'POST',
        data: new_data

    });

    typeof (post_request);
    console.log(post_request);
    return await post_request;
    // post_request.then(data => console.log(data),error =>console.log(error));
}

function getBrText(keyValueObject) {

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
    tafIp = document.getElementById("tafServer").value;
    url = `http://${tafIp}`
    console.log(tafIp)

    details = probeData["probes"][id]["details"]
    url = url  + probeData["probes"][id]["probeAddApi"]

    console.log(`URL Generated : ${url} `);

    details["probeIP"] = document.getElementById("probeIp").value;
    details["probeUserName"] = document.getElementById("userName").value;
    details["probePassword"] = document.getElementById("passWord").value;
    console.log("Generated probe data ")
    console.log(details);
    console.log(url);


    executeAddProbeRestApi(url, details).then(result => {
        console.log("Api completed execution")
        document.getElementById(add_button_id).disabled = false;
        process_element.innerHTML = JSON.stringify(result);

    }).catch(error => {
        console.log("Api fail execution")
        document.getElementById(add_button_id).disabled = false;
        process_element.innerHTML = JSON.stringify(error.responseJSON);
    })

}


function getProbeData() {

    let data = {
        "tafServer": "http://192.168.34.83:8080",
        "probes": {
            "NETAPP": {
                "probeAddApi": "/api/hdca/probe/Netapp/addProbe",
                "details": {
                    "PROBENAME": "NETAPP",
                    "netappIP": "192.168.100.12",
                    "netappUserName": "admin",
                    "netappPassword": "ontap123@",
                    "realTime": "yes"
                }
            },
            "SimulatorDCNM": {
                "probe": "HDCA",
                "probeAddApi": "/api/hdca/probe/DCNM/addProbe",
                "details": {
                    "PROBE_NAME": "DCNM",
                    "ip": "192.168.33.245",
                    "protocol": "https",
                    "username": "admin",
                    "password": "dcnm@123"
                }

            },
            "VMWare": {
                "probeAddApi": "/api/hdca/probe/VMWare/addProbe",
                "details": {
                    "VMWareIP": "192.168.20.244",
                    "VMWareUserName": "esxuser",
                    "VMWarePassword": "esx@12345"
                }

            },
            "SimulatorBNA": {
                "probe": "HDCA",
                "probeAddApi": "/api/hdca/probe/BNA/addProbe",
                "details": {
                    "PROBE_NAME": "BNA",
                    "ip": "192.168.33.245",
                    "username": "Administrator",
                    "password": "password"
                }

            },
            "HNAS": {
                "probeAddApi": "/api/hdca/probe/Hnas/addProbe",
                "details": {
                    "PROBE_NAME": "HNAS",
                    "hnasIP": "192.168.33.129",
                    "hnasUsername": "root",
                    "hnasPassword": "root123"
                }

            },
            "SimulatorBrocade": {
                "probeAddApi": "/api/hdca/probe/BrocadeCLI/addProbe",
                "details": {
                    "PROBE_NAME": "BrocadeCLI",
                    "selectRadioGroup": "Add Device",
                    "dataCenter": "Pune",
                    "startIP": "192.168.33.190",
                    "endIP": "",
                    "CLIuserName": "root",
                    "CLIpassword": "root123",
                    "port": "22"
                }

            },
            "CiscoCLI": {
                "probeAddApi": "/api/hdca/probe/CiscoCLI/addProbe",
                "details": {
                    "PROBE_NAME": "CiscoCLI",
                    "selectRadioGroup": "Add Device",
                    "dataCenter": "Pune",
                    "startIP": "192.168.144.11",
                    "endIP": "",
                    "CLIuserName": "cliprobe",
                    "CLIpassword": "Cliprobe@123",
                    "port": "22"
                },
            },
            "SimulatorPureStorage": {
                "probeAddApi": "/api/hdca/probe/PureStorage/addProbe",
                "details": {
                    "PROBE_NAME": "SimulatorPureStorage",
                    "ipAddress": "192.168.33.245",
                    "connectionType": "HTTPS",
                    "apiToken": "565655",
                    "realTime": "yes",
                },

            },
            "SimulatorXtremIO": {
                "probe": "HDCA",
                "probeAddApi": "/api/hdca/probe/XtremIO/addProbe",
                "details": {
                    "PROBE_NAME": "SimulatorXtremIO",
                    "IP": "192.168.33.245",
                    "userName": "root",
                    "password": "root123"
                },

            },
            "NetworkProbe": {
                "probeAddApi": "/api/iris/probe/Network/addProbe",
                "details": {
                    "PROBE_NAME": "NetWorkProbe",
                    "NetworkProbeIP": "192.168.20.4",
                    "port": "161",
                    "collectionInterval": "5",
                    "snmpSecurityVersion": "v2c",
                    "readComunityString": "public",
                    "applySettingtoAllDevice": "enabled",
                    "selectInterfaceList": ["Select All"],
                    "configureFor64bit": "enabled"
                },

            },
            "VNXBlockPrequisite": {
                "probeAddApi": "/api/hdca/probe/VNXBlock/prerequisite",
                "details": {
                    "PROBE_NAME": "VNXBlockPrequisite",
                    "rootUserName": "root",
                    "rootPassword": "root123",
                    "meghaUserName": "megha",
                    "meghaPassword": "megha!234"
                },

            },
            "VNXBlock": {
                "probeAddApi": "/api/hdca/probe/VNXBlock/addProbe",
                "details": {
                    "PROBE_NAME": "VNXBlock",
                    "probeName": "VNXBlock",
                    "processorAIP": "192.168.144.182",
                    "processorBIP": "192.168.144.182",
                    "username": "sysadmin",
                    "password": "sysadmin",
                    "scope": "global"
                }

            },
            "VMAX": {
                "probe": "HDCA",
                "probeAddApi": "/api/hdca/probe/VMAX/addProbe",
                "details": {
                    "PROBE_NAME": "VMAX",
                    "vmaxIP": "192.168.20.208",
                    "vmaxUserName": "admin",
                    "vmaxPassword": "emc@12345",
                    "rootUserName": "root",
                    "rootPassword": "root123"
                }

            },
            "VMAXPrerequisite": {
                "probeAddApi": "/api/hdca/probe/VMAX/prerequisite",
                "details": {
                    "PROBE_NAME": "VMAXPrerequisite",
                    "rootUserName": "root",
                    "rootPassword": "app.jeos",
                    "meghaUserName": "megha",
                    "meghaPassword": "megha!234"
                }

            },
            "VNXFile": {
                "probeAddApi": "/api/hdca/probe/VNXFile/addProbe",
                "details": {
                    "PROBE_NAME": "VNXFile",
                    "vnxIP": "192.168.144.180",
                    "vnxUserName": "nasadmin",
                    "vnxPassword": "nasadmin"
                }

            },
            "HESP": {
                "probeAddApi": "/api/hdca/probe/HESP/addProbe",
                "details": {
                    "PROBE_NAME": "HESP",
                    "probeName": "VSPG200",
                    "connectionType": "http",
                    "raIP": "192.168.20.27",
                    "raHost": "cumpunhid",
                    "raPort": "24221",
                    "raInstance": "VSP_G200",
                    "storageSerial": "421358",
                    "realTime": "",
                    "HDVM": {
                        "hdvmIP": "192.168.20.27",
                        "hdvmPort": "2443",
                        "hdvmUsername": "system",
                        "hdvmPassword": "manager",
                        "connectionType": "https"
                    }
                }

            },
            "HESP_1": {
                "probeAddApi": "/api/hdca/probe/HESP/addProbe",
                "details": {
                    "PROBE_NAME": "HESP",
                    "probeName": "HESP",
                    "connectionType": "http",
                    "raIP": "192.168.32.255",
                    "raHost": "localhost.localdomain",
                    "raPort": "24221",
                    "raInstance": "test1",
                    "storageSerial": "15282",
                    "realTime": "",
                    "probeIP": "192.168.33.246"
                }

            },
            "UPLOADRAIDCOM": {
                "probe": "HDCA",
                "probeAddApi": "/api/hdca/probe/uploadRaidcom",
                "details": {
                    "OPERATION": "UPLOADRAIDCOM"
                }

            },
            "AMS": {
                "probeAddApi": "/api/hdca/probe/AMS/addProbe",
                "details": {
                    "PROBENAME": "AMS",
                    "probeName": "ams",
                    "processor0Ip": "192.168.20.12",
                    "processor1Ip": "192.168.20.11",
                    "amsUserName": "test",
                    "amsPassword": "storage"
                }

            },
            "HDVM": {
                "probeAddApi": "/api/hdca/probe/HDVM/addProbe",
                "details": {
                    "PROBENAME": "HDVM",
                    "hdvmIP": "192.168.20.27",
                    "hdvmPort": "2443",
                    "hdvmUsername": "system",
                    "hdvmPassword": "manager",
                    "hdvmConnectionType": "https",
                    "probeIP": "192.168.33.246",
                    "probeUserName": "admin",
                    "probePassword": "Cumulus@1",
                }

            }









        }
    }


    return data;
}