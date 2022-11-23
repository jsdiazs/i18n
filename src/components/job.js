import React from "react";
import {FormattedDate, FormattedDateParts, FormattedNumber, FormattedPlural, FormattedMessage} from 'react-intl';

const Job = (props) => {
  return (
    <tr>
      <th scope="row">{props.offer.id}</th>
      <td>{props.offer.name}</td>
      <td>{props.offer.company}</td>
      <td><FormattedNumber
        value={props.offer.salary}
        style="currency"
        currency="EUR"
        maximumSignificantDigits="2"
        currencyDisplay = "symbol"
       /> 
       <FormattedPlural 
       value={props.offer.salary} 
       one={<FormattedMessage id="single-million"/>} 
       other={<FormattedMessage id="plural-million"/>}/>
       </td>
      <td>{props.offer.city}</td>
      <td>
        <FormattedDate
          value={new Date(props.offer.date)}
          year='numeric'
          month='long'
          day='numeric'
          weekday='long'
        />
      </td>
      <td>
        <FormattedNumber
          value={new Number(props.offer.views)}  
        />
      </td>
    </tr>
  );
};

export default Job;
