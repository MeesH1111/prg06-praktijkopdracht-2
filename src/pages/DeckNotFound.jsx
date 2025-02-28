function NotFound() {
    return(
        <>
            <div>
                <h1 className={"font-bold text-5xl flex justify-center text-amber-50 m-4 p-4"}>404 - Page not found</h1>
                <p className={" flex justify-center text-amber-50"}>Het Deck dat je zocht bestaat niet. :(</p>
            </div>
            <div>
                <img className={"block ml-auto mr-auto"} src={"skateboard.png"} alt="Skateboard Icon" width="400" height="400"/>
            </div>
        </>


    )
}

export default NotFound