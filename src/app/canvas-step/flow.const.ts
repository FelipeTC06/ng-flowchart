export const flowConst = {
    "root": {
        "id": "s1608918280530",
        "type": "sample-step",
        "data": {
            "name": "Do Action",
            "inputs": [
                {
                    "name": "ACTION",
                    "value": "TRANSLATE"
                }
            ]
        },
        "children": [
            {
                "id": "s1608918283650",
                "type": "do-action",
                "data": {
                    "name": "Do Action",
                    "inputs": [
                        {
                            "name": "ACTION",
                            "value": null
                        }
                    ]
                },
                "children": []
            },
            {
                "id": "s1608918285174",
                "data": {
                    "name": "Notification",
                    "type": "notification",
                    "inputs": [
                        {
                            "name": "Address",
                            "value": "sample.email@email.com"
                        }
                    ]
                },
                "children": []
            }
        ]
    }
}