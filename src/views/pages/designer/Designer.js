import { React, useState } from 'react'
import { CButton, CCard, CCardBody, CCardHeader, CCol, CRow, CTabs, CTabList, CTab, CTabContent, CTabPanel, CHeaderToggler, CListGroup, CListGroupItem, CFormRange, CForm, CFormLabel, CFormInput, CFormSelect } from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilBell } from '@coreui/icons'
import { useSelector, useDispatch } from 'react-redux'
import { DocsExample } from 'src/components'

const Designer = () => {

    //** Page Size Start */
    const [pageHeightValue, setPageHeightValue] = useState(11);
    const [pageWidthValue, setPageWidthValue] = useState(8.5);
    //** Page Size End */

    const [zoomValue, setZoomValue] = useState(100);

    //*** Margin Start */
    const [topMarginValue, setTopMarginValue] = useState(1);
    const [bottomMarginValue, setBottomMarginValue] = useState(1);
    const [leftMarginValue, setLeftMarginValue] = useState(1);
    const [rightMarginValue, setRightMarginValue] = useState(1);
    //*** Margin End */

    const sidebarShow = useSelector((state) => state.sidebarShow)


    const handlePageSizeChange = value => {
        setPageWidthValue(value.split('_')[0]);
        setPageHeightValue(value.split('_')[1]);
    };

    const handleDocZoomChange = value => {
        setZoomValue(value);
    };

    const handleTopMarginChange = value => {
        setTopMarginValue(value);
        document.documentElement.style.setProperty('--dynamic-top-margin', value + 'in');
    };

    const handleBottomMarginChange = value => {
        setBottomMarginValue(value);
        document.documentElement.style.setProperty('--dynamic-bottom-margin', (pageHeightValue - value) + 'in');
    };

    const handleLeftMarginChange = value => {
        setLeftMarginValue(value);
    };

    const handleRightMarginChange = value => {
        setRightMarginValue(value);
    };

    return (
        <CRow>
            <CCol xs={3}>
                <CCard className="mb-4">
                    <CCardHeader>
                        <strong>Tools</strong>
                    </CCardHeader>
                    <CCardBody>

                        <CTabs activeItemKey="profile">
                            <CTabList variant="tabs">
                                <CTab itemKey="home">Toolbox</CTab>
                                <CTab itemKey="profile">Database</CTab>
                                <CTab itemKey="contact">Parameters</CTab>
                                <CTab itemKey="settings">Settings</CTab>
                            </CTabList>
                            <CTabContent>
                                <CTabPanel className="p-3" itemKey="home">

                                    <div className="btn-group" role="group" aria-label="Basic example">
                                        <CButton color="info" title='A' >
                                            <CIcon icon={cilBell} className="me-2" />
                                        </CButton>
                                        <CButton color="info" >
                                            <CIcon icon={cilBell} className="me-2" />
                                        </CButton>
                                        <CButton color="info" >
                                            <CIcon icon={cilBell} className="me-2" />
                                        </CButton>
                                        <CButton color="info" >
                                            <CIcon icon={cilBell} className="me-2" />
                                        </CButton>
                                    </div>

                                    <CListGroup>
                                        <CListGroupItem as="button">Report Header</CListGroupItem>
                                        <CListGroupItem as="button">Page Header</CListGroupItem>
                                        <CListGroupItem as="button">Page Footer</CListGroupItem>
                                        <CListGroupItem as="button">Report Footer</CListGroupItem>
                                    </CListGroup>

                                </CTabPanel>
                                <CTabPanel className="p-3" itemKey="profile">

                                    <div className="btn-group" role="group" aria-label="Basic example">
                                        <CButton color="info" title='A' >
                                            <CIcon icon={cilBell} className="me-2" />
                                        </CButton>
                                        <CButton color="info" >
                                            <CIcon icon={cilBell} className="me-2" />
                                        </CButton>
                                        <CButton color="info" >
                                            <CIcon icon={cilBell} className="me-2" />
                                        </CButton>
                                        <CButton color="info" >
                                            <CIcon icon={cilBell} className="me-2" />
                                        </CButton>
                                    </div>

                                </CTabPanel>
                                <CTabPanel className="p-3" itemKey="contact">

                                    <div className="btn-group" role="group" aria-label="Basic example">
                                        <CButton color="info" title='A' >
                                            <CIcon icon={cilBell} className="me-2" />
                                        </CButton>
                                        <CButton color="info" >
                                            <CIcon icon={cilBell} className="me-2" />
                                        </CButton>
                                        <CButton color="info" >
                                            <CIcon icon={cilBell} className="me-2" />
                                        </CButton>
                                        <CButton color="info" >
                                            <CIcon icon={cilBell} className="me-2" />
                                        </CButton>
                                    </div>

                                </CTabPanel>

                                <CTabPanel className="p-3" itemKey="settings">

                                    <div className="btn-group" role="group" aria-label="Basic example">
                                        <CButton color="info" title='A' >
                                            <CIcon icon={cilBell} className="me-2" />
                                        </CButton>
                                        <CButton color="info" >
                                            <CIcon icon={cilBell} className="me-2" />
                                        </CButton>
                                        <CButton color="info" >
                                            <CIcon icon={cilBell} className="me-2" />
                                        </CButton>
                                        <CButton color="info" >
                                            <CIcon icon={cilBell} className="me-2" />
                                        </CButton>
                                    </div>

                                    <CCard>
                                        <CCardHeader>
                                            Page Size
                                            <div style={{ float: 'right' }}>
                                                <CFormSelect size="sm" className="mb-3" aria-label="Small select example">
                                                    <option value="in">Inch</option>
                                                    <option value="cm">Centimeter</option>
                                                </CFormSelect>
                                            </div>
                                        </CCardHeader>
                                        <CCardBody>
                                            <CFormLabel htmlFor="ddlPageSize">
                                                Page Size
                                            </CFormLabel>
                                            <CFormSelect id="ddlPageSize" size="sm" className="mb-3" aria-label="Small select example" onChange={(e) => handlePageSizeChange(e.target.value)}>
                                                <option value="8.5_11">Letter (8.5 x 11 inch)</option>
                                                <option value="8.27_11.69">A4 (8.27 x 11.69 inch)</option>
                                                <option value="5.83_8.27">A5 (5.83 x 8.27 inch)</option>
                                            </CFormSelect>
                                        </CCardBody>
                                    </CCard>

                                    <CCard>
                                        <CCardHeader>
                                            Margin
                                            <div style={{ float: 'right' }}>
                                                <CFormSelect size="sm" className="mb-3" aria-label="Small select example">
                                                    <option value="in">Inch</option>
                                                    <option value="cm">Centimeter</option>
                                                </CFormSelect>
                                            </div>
                                        </CCardHeader>
                                        <CCardBody>
                                            <CForm className="row g-3">
                                                <CCol xs="auto">
                                                    <CFormLabel htmlFor="topMargin">
                                                        Top
                                                    </CFormLabel>
                                                    <CFormInput type="number" step=".1" className='txtMargin' id="topMargin" defaultValue="1" size="sm" onChange={(e) => handleTopMarginChange(e.target.value)} />
                                                </CCol>
                                                <CCol xs="auto">
                                                    <CFormLabel htmlFor="bottomMargin">
                                                        Bottom
                                                    </CFormLabel>
                                                    <CFormInput type="number" step=".1" className='txtMargin' id="bottomMargin" defaultValue="1" size="sm" onChange={(e) => handleBottomMarginChange(e.target.value)} />
                                                </CCol>
                                                <CCol xs="auto">
                                                    <CFormLabel htmlFor="leftMargin">
                                                        Left
                                                    </CFormLabel>
                                                    <CFormInput type="number" step=".1" className='txtMargin' id="leftMargin" defaultValue="1" size="sm" onChange={(e) => handleLeftMarginChange(e.target.value)} />
                                                </CCol>
                                                <CCol xs="auto">
                                                    <CFormLabel htmlFor="rightMargin">
                                                        Right
                                                    </CFormLabel>
                                                    <CFormInput type="number" step=".1" className='txtMargin' id="rightMargin" defaultValue="1" size="sm" onChange={(e) => handleRightMarginChange(e.target.value)} />
                                                </CCol>
                                            </CForm>
                                        </CCardBody>
                                    </CCard>

                                </CTabPanel>
                            </CTabContent>
                        </CTabs>

                    </CCardBody>
                </CCard>
            </CCol>
            <CCol xs={9}>
                <CCard className="mb-4">
                    <CCardHeader>
                        <strong>Editor</strong>
                        <div className='designerPageZoomCtrl'>
                            Zoom: {zoomValue}%
                            <CFormRange min={10} max={500} step={1} defaultValue="100" id="zoomDoc" onChange={(e) => handleDocZoomChange(e.target.value)} />
                        </div>
                    </CCardHeader>
                    <CCardBody className='designerPageBg' style={{ overflow: 'hidden' }}>


                        <div className='designerPage'
                            style={{
                                border: '1px solid black',
                                transform: `scale(${zoomValue / 100})`,
                                transition: 'transform 0.2s', // Smooth zoom transition
                                width: `${pageWidthValue}in`,
                                height: `${pageHeightValue}in`
                            }}
                        >

                            <div className='designerPageContent' contenteditable="true" style={{
                                marginTop: `${topMarginValue}in`,
                                marginBottom: `${bottomMarginValue}in`,
                                marginLeft: `${leftMarginValue}in`,
                                marginRight: `${rightMarginValue}in`
                            }}>
                                test
                            </div>
                        </div>


                    </CCardBody>
                </CCard>
            </CCol>

        </CRow>
    )
}

export default Designer
