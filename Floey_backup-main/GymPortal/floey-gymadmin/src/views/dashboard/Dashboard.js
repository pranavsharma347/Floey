import React, { lazy } from 'react'
import {
  CCardGroup,
  CWidgetProgressIcon,
  CBadge,
  CButton,
  CButtonGroup,
  CCard,
  CCardBody,
  CCardFooter,
  CCardHeader,
  CCol,
  CProgress,
  CRow,
  CCallout
} from '@coreui/react'
import CIcon from '@coreui/icons-react'

import MainChartExample from '../charts/MainChartExample.js'

const WidgetsDropdown = lazy(() => import('../widgets/WidgetsDropdown.js'))
const WidgetsBrand = lazy(() => import('../widgets/WidgetsBrand.js'))

const Dashboard = () => {
  return (
    <>
      <WidgetsDropdown />

      <CRow>
        <CCol>
          <CCard>
            <CCardHeader>
             Current Month Report
            </CCardHeader>
            <CCardBody className="brd-right-main">

            <CCardGroup className="mb-4">
        <CWidgetProgressIcon
          header="1"
          text="Total Customers"
          color="gradient-info"
        >
          <CIcon name="cil-people" height="36"/>
        </CWidgetProgressIcon>
        <CWidgetProgressIcon
          header="500"
          text="Total Revenue"
          color="gradient-success"
        >
          <CIcon name="cil-userFollow" height="36"/>
        </CWidgetProgressIcon>
        <CWidgetProgressIcon
          header="1"
          text="Packages sold"
          color="gradient-warning"
        >
          <CIcon name="cil-basket" height="36"/>
        </CWidgetProgressIcon>
        <CWidgetProgressIcon
          header="250"
          text="Total Expenses"
        >
          <CIcon name="cil-chartPie" height="36"/>
        </CWidgetProgressIcon>
      
      </CCardGroup>

            </CCardBody>
          </CCard>
        </CCol>
        </CRow>
     
     
    </>
  )
}

export default Dashboard
