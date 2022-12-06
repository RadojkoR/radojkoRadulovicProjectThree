import React, {useState} from "react";
import ReactDatePicker from "react-datepicker";
import 'react-datepicker/dist/react-datepicker.css';

const DatePicker = () => {
    const [Cdate, setDate] = useState(new Date().toLocaleDateString('ca-CA'))
    return(
        <div>
            <ReactDatePicker 
                dateFormat="dd/MM/yyyy"
                value={Cdate}
                onChange={(date) => {
                  const d = new Date(date).toLocaleDateString('ca-Ca');
                  console.log(d);
                  setDate(d);
                }}
                minDate={new Date()}
              />
              <p>{Cdate}</p>
        </div>
    )
}

export default DatePicker;