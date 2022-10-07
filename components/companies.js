import React from "react";
import Card from "./card";

const Companies = ({ companies }) => {
  const leftCompaniesCount = Math.ceil(companies.length / 5);
  const leftCompanies = companies.slice(0, leftCompaniesCount);
  const rightCompanies = companies.slice(leftCompaniesCount, companies.length);

  return (
    <div>
      <div className="uk-child-width-1-2@s" data-uk-grid="true">
        <div>
          {companies.map((company, i) => {
            return (
              <div
                company={company}
                key={`company__${company.attributes.slug}`}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Companies;
