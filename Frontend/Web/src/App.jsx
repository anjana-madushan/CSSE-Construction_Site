import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Weblogin from './pages/Authenication/web-login';
import Mainsignup from './pages/Authenication/main-signup';
import ManagingStaff from './pages/Home/managingStaff';

import MaterialTable from './pages/Supplier/MeterialTable';
import AddMaterial from './pages/Supplier/MateriealAddForm'
import SupplierSignUpForm from './components/supplierSignUpForm';
import CreateAccounts from './pages/createAccounts/createAccounts';
import ViewRequisitions from './components/Requisitions/viewRequisitions';
import ViewInventory from './pages/Inventory/viewInventory';

import MiniDrawer from './components/drawer/Drawer.jsx';
import ViewAllSites from './pages/ManagingSites/ViewAllSites';
import "react-toastify/dist/ReactToastify.css";
import AddSiteForm from './components/forms/AddSiteForm';
import AddSite from './pages/ManagingSites/AddSite';
import ViewOneSite from './pages/ManagingSites/ViewOneSite';
import EditSite from './pages/ManagingSites/EditSite';
import GenerateReport from './pages/ManagingSites/GenerateReport';

const App = () => {

  const isLogged = useSelector((state) => state.isLogged)
  console.log(isLogged);

  return (
    <BrowserRouter>
      {/* {isLogged && <MiniDrawer />} */}
      <MiniDrawer />
      <Routes>
      <Route path='/' element={<Weblogin />} />
        <Route path='/managingHome' element={<ManagingStaff />} />
        <Route path='/viewSites' element={<ViewAllSites />} />
        <Route path='/signUp' element={<Mainsignup />} />

        <Route path='/login' element={<Weblogin />} />

        <Route path='/material' element={<MaterialTable />} />
        <Route path='/addmaterial' element={<AddMaterial />} />

        <Route path='/supplier-signup' element={<SupplierSignUpForm />} />
        <Route path='/create-Account' element={<CreateAccounts />} />
        <Route path='/requisitions' element={<ViewRequisitions />} />

        <Route path='/inventory' element={<ViewInventory />} />
        <Route path='/addSite' element={<AddSite />} />
        <Route path='/generateReport' element={<GenerateReport />} />
        <Route path="/editSite/:rowData" element={<EditSite />} />
        <Route path='/viewOneSite/:id' element={<ViewOneSite />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;