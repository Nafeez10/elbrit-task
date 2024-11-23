type propsType = {
    error: any;
    resetErrorBoundary: any
}

const ErrorFallback = ({error:_, resetErrorBoundary}:propsType) =>{

    return(
        <>
            <div className=" text-center">
                <p className=" green-text text-4xl">
                    Something went wrong!, while Lazy Loading the Component
                </p>

                <button className="active:scale-90 transition mt-5 green-bg text-white px-10 py-2 rounded-full" onClick={resetErrorBoundary}>
                    Click to Reload
                </button>
            </div>
        </>
    )
}

export default ErrorFallback;