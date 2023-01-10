import React from "react";
import { Link } from '@chakra-ui/react'
import CardBasic from "./card-basic";

function CardCompanyLink({ children, company }) {
  return(
    <Link href={'/companies/' + company.slug}>
      <CardBasic>
        { children }
      </CardBasic>
    </Link>
    )
};

export default CardCompanyLink;
