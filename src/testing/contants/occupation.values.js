const dataSet = {
    occupation: {
        success: {
            value: 1
        },
        fail: {
            value: "Anything"
        }

    },
    createOccupations: {
        success: {
            "col_id": "1",
            "act_id": "1",
            "percentage": 10,
            "start": "2021-03-16",
            "end": "2021-03-16"
        },
        fail: {
            "col_id": 1,
            "act_id": 1,
            "percentage": "any",
            "start": "2021-03-16",
            "end": "2021-03-16"
        },
    },
    deleteOccupations: {
        success: {
            value: 132
        },
        fail: {
            value: "anything"
        }

    },
    updateOccupations: {
        success: {
            "id": null,
            "col_id": 1,
            "act_id": 1,
            "percentage": 5,
            "start": "2020-03-16",
            "end": "2025-03-16"
        },
        fail: {
            "id": null,
            "col_id": 1,
            "act_id": 1,
            "percentage": 5,
            "start": "2020-03-16",
            "end": "2025-03-16"
        }
    }
}
module.exports = dataSet
