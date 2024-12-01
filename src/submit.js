// submit.js
import axios from "axios";
import { useStore } from "./store";
import { API_URL } from "./common/common";
import toast from "react-hot-toast";

export const SubmitButton = () => {

    const nodes = useStore((state) => state.nodes);
    const edges = useStore((state) => state.edges);

    const handleSubmit = async () => {
        const payload = {
            nodes: nodes.map(node => node.id),
            edges: edges.map(edge => ({
                from_node: edge.source,
                to_node: edge.target,
            })),
        };

        try {
            const response = await axios.post(`${API_URL}`, payload, {
                headers: { 'Content-Type': 'application/json' }

            });
            // toast.success(JSON.stringify(response.data))

            let message = "Details:\n";
            for (let [key, value] of Object.entries(response.data)) {

                message += `${key} : ${value}\n`
            }
            toast.success(message)
        } catch (error) {
            console.error(error)

        }

    }

    return (
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <button className="bg-blue-800 hover:bg-blue-950 duration-300 px-3 py-2 rounded-lg text-white font-semibold " onClick={handleSubmit} type="button">Submit</button>
        </div>
    );
}
