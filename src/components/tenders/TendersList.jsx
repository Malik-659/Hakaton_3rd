import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTenders } from "../../store/tenders/tendersActions";

const TendersList = () => {
  const { tenders, loading } = useSelector((state) => state.tenders);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTenders());
  });

  return <div>
    {loading ? ( <h3>Loading...</h3>):(
        <div>
            {tenders.map((tender)=>(
                
            ))}
        </div>
    )}
   
  </div>;
};

export default TendersList;
