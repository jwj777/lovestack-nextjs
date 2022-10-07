import React from "react";
import Link from "next/link";

const Card = ({ company }) => {

  console.log(company.attributes.product_categories.data.attributes.slug)
  return (
    <Link href={`/company/${company.attributes.slug}`}>
      <a className="uk-link-reset">
        <div className="uk-card uk-card-muted">
          <div className="uk-card-body">

            <p id="title" className="uk-text-large">
              {company.attributes.title}
            </p>
          </div>
        </div>
      </a>
    </Link>
  );
};

export default Card;