import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes, BrowserRouter, } from "react-router-dom";
import Navigation from './component/Navigation/Navbar';
import Myprofile from './pages/Myprofile/Myprofile';
import Myfundraiser from './pages/Myfundraiser/Myfundraiser';
import MyDonation from './pages/MyDonation/MyDonation';
import MyComments from './pages/MyComments/MyComments';
import DonationTab from './pages/DonationTab/DonationTab';
import EditDonationTab from './pages/EditDonationTab/EditDonationTab';
import DashBoard from './pages/dashboard/DashBoard';
import DonationDb from './pages/donationdb/DonationDb';
import PromotePage from './pages/promotePage/PromotePage';
import Setting from './pages/settings/Setting';
import MyWithdraw from './pages/mywithdraw/MyWithdraw';
import ErrorPage from './pages/ErrorPage/ErrorPage';



function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path='/' element={<Myprofile />} />
        <Route path='myprofile' element={<Myprofile />} />
        <Route path='myfundraiser' element={<Myfundraiser />} />
        <Route path='mydonation' element={<MyDonation />} />
        <Route path='mycomments' element={<MyComments />} />
        <Route path='donationtab' element={<DonationTab />} />
        <Route path='editdonationtab' element={<EditDonationTab />} />
        <Route path='dashboard' element={<DashBoard />} />
        <Route path='donationdb' element={<DonationDb />} />
        <Route path='promotepage' element={<PromotePage />} />
        <Route path='mywithdraw' element={<MyWithdraw />} />
        <Route path='setting' element={<Setting />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>

    </BrowserRouter>


  );
}

export default App;
