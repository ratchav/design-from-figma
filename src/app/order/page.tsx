import ExampleForm from "./ExampleForm";
import ExampleModal from "./ExampleModal";

export default function OrderPage() {

    return (
        <>
            <div className="row pt-5">
                <div className="col-4">
                    <ExampleForm />
                </div>
                <div className="col-6">
                    <div className="xxxxxx">
                        <span className="dialog-title"> <i className="bi bi-check-circle"></i> Title</span>
                        <span>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore magna aliqua.
                        </span>
                        <div className="btn-grp">
                            <button className="btn btn-secondary"> Cancel</button>
                            <button className="btn btn-primary">Action</button>
                        </div>
                    </div>

                </div>
                <div className="col-12">
                    <ExampleModal />
                </div>
            </div>

        </>

    );
}