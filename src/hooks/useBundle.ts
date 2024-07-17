
import axios from "axios";

const handleBundle = (newMessage) => {

return axios
    .post('/langserve/dhti_elixir_template/invoke', {
    "input": {
        "input": newMessage
    },
    "config": {},
    "kwargs": {}
    })

};

export default handleBundle;