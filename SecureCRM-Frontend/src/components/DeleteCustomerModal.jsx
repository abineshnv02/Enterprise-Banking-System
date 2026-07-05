import { deleteCustomer } from "../services/customerService";
import { toast } from "react-toastify";

function DeleteCustomerModal({

    selectedCustomer,

    refreshCustomers,

}) {

    async function handleDelete() {

        try {

            await deleteCustomer(selectedCustomer.id);

            await refreshCustomers();

            toast.success("Customer Deleted Successfully!");

            document.getElementById("deleteCloseBtn").click();

        }

        catch (error) {

            console.log(error);

            toast.error("Unable to delete customer");

        }

    }

    return (

        <div
            className="modal fade"
            id="deleteCustomerModal"
            tabIndex="-1"
        >

            <div className="modal-dialog">

                <div className="modal-content">

                    <div className="modal-header">

                        <h4>

                            Delete Customer

                        </h4>

                        <button
                            className="btn-close"
                            data-bs-dismiss="modal"
                        ></button>

                    </div>

                    <div className="modal-body">

                        <p>

                            Are you sure you want to delete

                            <strong>

                                {" "}

                                {selectedCustomer?.name}

                            </strong>

                            ?

                        </p>

                    </div>

                    <div className="modal-footer">

                        <button

                            id="deleteCloseBtn"

                            className="btn btn-secondary"

                            data-bs-dismiss="modal"

                        >

                            Cancel

                        </button>

                        <button

                            className="btn btn-danger"

                            onClick={handleDelete}

                        >

                            Delete

                        </button>

                    </div>

                </div>

            </div>

        </div>

    );

}

export default DeleteCustomerModal;