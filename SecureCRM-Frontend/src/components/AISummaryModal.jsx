import { useState } from "react";
import { generateSummary } from "../services/aiService";

function AISummaryModal({ selectedCustomer }) {

    const [summary, setSummary] = useState("");

    const [loading, setLoading] = useState(false);

    async function handleGenerate() {

        if (!selectedCustomer) return;

        setLoading(true);

        try {

            const data = await generateSummary(selectedCustomer.id);

            setSummary(data.summary);

        }

        catch (error) {

            console.log(error);

            setSummary("Unable to generate AI summary.");

        }

        setLoading(false);

    }

    return (

        <div
            className="modal fade"
            id="aiSummaryModal"
            tabIndex="-1"
        >

            <div className="modal-dialog modal-lg">

                <div className="modal-content">

                    <div className="modal-header">

                        <h4 className="modal-title">

                            🤖 AI Customer Summary

                        </h4>

                        <button
                            className="btn-close"
                            data-bs-dismiss="modal"
                        ></button>

                    </div>

                    <div className="modal-body">

                        <button
                            className="btn btn-primary mb-3"
                            onClick={handleGenerate}
                        >

                            Generate Summary

                        </button>

                        {loading && (

                            <p>Generating AI Summary...</p>

                        )}

                        {!loading && (

                            <div className="alert alert-info">

                                {summary}

                            </div>

                        )}

                    </div>

                </div>

            </div>

        </div>

    );

}

export default AISummaryModal;