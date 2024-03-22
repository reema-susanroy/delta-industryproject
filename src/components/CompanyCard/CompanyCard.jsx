import './CompanyCard.scss'
function CompanyCard( {}) {

    return (
        <>
            <div className='companyCard__header'>
                <h3 className='companyCard__header--name'> Company Name </h3>
                <h3 className='companyCard__header--details'> Details </h3>
            </div>


            <div className="companyCard__content">
                <div>
                    <p className='companyCard__content--name' >Blog NAme</p>
                </div>
                <div>

                    <p className='companyCard__content--url'> url</p>
                    <p className='companyCard__content--author'> authir name</p>
                    <p className='companyCard__content--contact'>conatt info</p>
                </div>
                <div>
                    <button className='companyCard__button--button'> Connect </button>
                </div>
            </div>

        </>
    )
}

export default CompanyCard;