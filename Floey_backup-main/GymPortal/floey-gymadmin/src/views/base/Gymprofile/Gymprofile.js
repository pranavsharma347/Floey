import React, { useState,useEffect } from 'react'
import {
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CContainer,
  CJumbotron,
  CRow,
  CEmbed,
  CDropdown,
  CDropdownToggle,
  CDropdownDivider,
  CDropdownHeader,
  CModal,
  CModalBody,
  CModalFooter,
  CModalHeader,
  CModalTitle,
  CDropdownItem,
  CDropdownMenu,
  CEmbedItem
} from '@coreui/react'
import { DocsLink } from 'src/reusable'
import BASE_URL from 'src/views/base'
import Cookies from 'universal-cookie';

const cookies = new Cookies();
console.log(cookies.get('gym_uuid'))


const Expenses = () => {

  const axios = require('axios');
  const [getgym, setgym] = useState([])
  
  useEffect(() => {
      axios
      .get(BASE_URL + 'gymprofile/gym/'+cookies.get('gym_uuid'))
      .then(res => {
          console.log(res)
          setgym(res.data)
      })
      .catch(err => {
          console.log(err)
      })
  }, [])
  var perm = cookies.get('perms')

  if (perm.includes('Gymprofile')){

  return (
    <>
   
        <CRow>
      <div className="col-md-12">
              <div className="manage_top_btn">
              <div className="manage-btn-left">

                {/* <a href='#/base/Color'><button className="mn_btn_1 mr-2" >Color </button></a> */}
                <a href='#/base/Ammenities'><button className="mn_btn_1 mr-2" >Ammenities </button></a>
                <a href='#/base/Policy'><button className="mn_btn_1 mr-2" >Policy </button></a>
                <a href='#/base/location'><button className="mn_btn_1 mr-2" >Location </button></a>
                <a href='#/base/gymdetails'><button className="mn_btn_1 mr-2" >Edit Gym Details </button></a>
                
                </div> 
                

              </div>

              <CRow>
                <CCol xs="12" lg="6">
                   <div className="grm-prof-abt">
                      <h2 className=''>About</h2>
                      <p> {getgym.about} </p>
                   </div>   
                </CCol>

                <CCol xs="12" lg="6">
                   <div className="grm-prof-abt">
                      <h2 className=''>Customer Validations</h2>
                      <p> Gender validation - {getgym.gender_criteria} </p>
                      <p> Age Group validation -{getgym.age_criteria} </p>
                   </div>   
                </CCol>

              </CRow>  
              {/* <div className='head'>
              <h2 className='title'>About</h2>
                <h5 className='validation'>{getgym.about}</h5>
             
                  <h2 className='title'>Customer Validations</h2>
                  <h5 className='validation'>Gender validation - {getgym.gender_criteria} </h5>
                  <h5 className='validation'>Age Group validation -{getgym.age_criteria} </h5>

              </div> */}
              
          </div>
       </CRow>

 </>
  )}
  else{
    return window.location.href='#/dashboard'
  }
}

export default Expenses
