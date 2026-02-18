import React from 'react'

type statusProps = {
    // status: string,
    // While working with specific string values, we cannot set the type string for status 
    // and it wouldn't be working when props pass some random gilbrish string like "ashshafashfs"
    //  So, we need to set the status type as union of specific values

    status: "loading" | "success" | "error"
}


const Status = ({ status } : statusProps) => {

    let message;

    if(status === "loading") {
        message = "Loading...";
    }
    else if(status === "success") {
        message = "Success!";
    }
    else if(status === "error") {
        message = "Error!";
    }
    
  return (
    <div>
        Status - {message}
    </div>
  )
}

export default Status