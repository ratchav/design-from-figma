'use client'

function ExampleForm() {


    return (
        <>
            <label className='label'>Label <span className='label-mandatory'>*</span></label>
            <input className='form-control kk-input' placeholder='Placeholder' value={'Value'} />
            <label className="exclamation"><i className="bi bi-exclamation-circle"></i> <span>Error message</span></label>
            <label className='helper-text'>Helper text</label>


            {/* <div className="input-group">
                <input type="text" className="form-control" aria-label="Amount (to the nearest dollar)" />
                <div className="input-group-append">
                    <span className="input-group-text">$</span>
                </div>
            </div> */}

            <div className="search-container">
                <input type="text" placeholder="Placeholder" className="search-input" />
                <span className="icon">
                    <i className="bi bi-exclamation-circle"></i>
                </span>
            </div>

        </>
    );
}

export default ExampleForm;