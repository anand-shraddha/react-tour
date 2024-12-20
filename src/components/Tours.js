import Card from './Card'

function Tours({tours, removeTour, hideNotInterested}){
    return(
        <div className='container'>
            
            <div className='cards'>
                {
                    tours.map((tour) => {
                        return <Card key={tour.id} {...tour} hideNotInterested={hideNotInterested} removeTour = {removeTour}></Card>
                    })
                }
            </div>


        </div>
    )


}

export default Tours;