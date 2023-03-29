import React, {useState, useEffect} from 'react'

import {DisplayCampaigns} from '../components'
import { useStateContext } from '../context'


const Profile = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [campaigns, setCampaigns] = useState([]);

  const {address, contract, getUserCampaigns} = useStateContext();

  const fetchCampigns = async ()=>
  {
    setIsLoading(true);
    const data = await getUserCampaigns();
    setCampaigns(data);
    setIsLoading(false);
  }

  useEffect(()=>{
      if(contract) fetchCampigns();
  }, [address, contract]);
  
  return (
    <DisplayCampaigns
      title= "All campaigns"
      isLoading = {isLoading}
      campaigns = {campaigns}
    />
  )
}

export default Profile