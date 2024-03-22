import "./CompanyCard.scss";
function CompanyCard({ companiesProp }) {
  return (
    <>          <div className="companyCard__header">
    <h3 className="companyCard__header--name"> COMPANY </h3>
    <h3 className="companyCard__header--details"> DETAILS </h3>
  </div>
      {companiesProp.map((company) => (
        <article>


          <div className="companyCard__content">
            <div className="border container">
              <p className="companyCard__content--name">{company.name}</p>
              <a href={company.url} className="companyCard__content--url">Website link</a>
            </div>
            <div className="border">
            {/* <h4 className="companyCard__content--header"> Author:</h4> */}
              <p className="companyCard__content--author"> Author: {company.author}</p>
              <p className="companyCard__content--contact">contact info</p>
            </div>
            <div className="border">
              <button className="companyCard__button--button"> Connect </button>
            </div>
          </div>
        </article>
      ))}
    </>
  );
}

export default CompanyCard;
