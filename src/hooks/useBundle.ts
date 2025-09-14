
import axios from "axios";
import { CDSHookRequest } from "../models/request";

/**
 * Sends a CDS Hook Request where the request.context contains the user's input message.
 */
const handleBundle = (newMessage: string) => {
    const request = new CDSHookRequest({
        context: { input: newMessage },
    });

    return axios.post("/langserve/dhti_elixir_template/invoke", {
        input: request,
        config: {},
        kwargs: {},
    });
};

export default handleBundle;