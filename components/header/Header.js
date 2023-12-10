export default function Header(props) {
    return (
        <div className="image-card">
            <div className="layer ">
                <div className="flex justify-center pt-[10%] ">
                    <h3 className='text-5xl font-bold  items-center text-white mx-30'>{props.heading}</h3>
                </div>
                <div className="flex justify-center ">
                    <h6 className='text-white'>{props.description}
                    </h6>
                </div>
            </div>
        </div>
    )
}