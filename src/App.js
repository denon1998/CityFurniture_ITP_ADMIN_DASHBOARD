import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, withRouter, Switch, HashRouter } from "react-router-dom";
import Footer from './components/shavinda_chanduni/Footer/Footer';
import { Container, Nav } from 'react-bootstrap';

import Navbar from "./components/navbar.component"
import AdminDashboard from "./components/admin-dashboard.component"

import EditExercise from "./components/edit-exercise.component";
import CreateExercise from "./components/create-exercise.component";
import CreateUser from "./components/create-user.component";
import userList from "./components/user-list.component";
import EditUser from "./components/edit-user.components";
import ExercisesList from "./components/exercises-list.component";
import main from "./components/main.component";
import cuslog from "./components/cuslog.component";





// chanduni
import CreateCatPost from './components/shavinda_chanduni/category-management/CreateCatPost';
import EditCatPost from './components/shavinda_chanduni/category-management/EditCatPost';
import CatHome from './components/shavinda_chanduni/category-management/CatHome';
import PostDetailsCat from './components/shavinda_chanduni/category-management/PostDetailsCat';
import HomeMainCategory from './components/shavinda_chanduni/category-management/HomeMainCategory';


import OrderHome from './components/shavinda_chanduni/order-management/OrderHome';
import EditOrderPost from './components/shavinda_chanduni/order-management/EditOrderPost';
import PostDetailsOrder from './components/shavinda_chanduni/order-management/PostDetailsOrder';
import HomeMainOrder from './components/shavinda_chanduni/order-management/HomeMainOrder';


// Shavinda
import CreatePostStockPro from './components/shavinda_chanduni/manage-products/CreatePostStockPro';
import EditPostStockPro from './components/shavinda_chanduni/manage-products/EditPostStockPro';
import HomeStockPro from './components/shavinda_chanduni/manage-products/HomeStockPro';
import PostDetailsStockPro from './components/shavinda_chanduni/manage-products/PostDetailsStockPro';

import CreatePostStockCat from './components/shavinda_chanduni/manage-categories/CreatePostStockCat';
import EditPostStockCat from './components/shavinda_chanduni/manage-categories/EditPostStockCat';
import HomeStockCat from './components/shavinda_chanduni/manage-categories/HomeStockCat';
import PostDetailsStockCat from './components/shavinda_chanduni/manage-categories/PostDetailsStockCat';

import CreatePostStockSup from './components/shavinda_chanduni/manage-suppliers/CreatePostStockSup';
import EditPostStockSup from './components/shavinda_chanduni/manage-suppliers/EditPostStockSup';
import HomeStockSup from './components/shavinda_chanduni/manage-suppliers/HomeStockSup';
import PostDetailsStockSup from './components/shavinda_chanduni/manage-suppliers/PostDetailsStockSup';

import StockHome from './components/shavinda_chanduni/manage-products/StockHome';

import categoryStockHome from './components/shavinda_chanduni/manage-categories/categoryStockHome';
import productStockHome from './components/shavinda_chanduni/manage-products/productStockHome';
import supplierStockHome from './components/shavinda_chanduni/manage-suppliers/supplierStockHome';

import stockCategoryReport from './components/shavinda_chanduni/manage-categories/stockCategoryReport';
import stockProductsReport from './components/shavinda_chanduni/manage-products/stockProductsReport';
import stockSuppliersReport from './components/shavinda_chanduni/manage-suppliers/stockSuppliersReport';

import RequestProducts from './components/shavinda_chanduni/manage-suppliers/RequestProducts';

import adminDashboard from './components/shavinda_chanduni/AdminDashboard/adminDashboard';

//Nuwanthika

import OrderEdit from './components/nuwanthika/order/OrderEdit';
import DeliveryEdit from './components/nuwanthika/delivery/DeliveryEdit';
import VehicleEdit from './components/nuwanthika/vehicle/VehicleEdit';
import EntityHome from './components/nuwanthika/entityHome/entity-home';


import Driver from "./components/nuwanthika/driver/Driver";
import DriverEdit from "./components/nuwanthika/driver/DriverEdit";
import Order from "./components/nuwanthika/order/Order";
import Delivery from "./components/nuwanthika/delivery/Delivery";
import Vehicle from "./components/nuwanthika/vehicle/Vehicle";


// SIDEBAR
// import { SidebarStock } from "./components/shavinda_chanduni/SidebarStock/SidebarStock";
import SidebarStock from './components/shavinda_chanduni/SidebarStock/SidebarStock';



import EditPosts from './components/samali/components/AdminClientUpdateCard';
import PayHome from './components/samali/components/CardPayHomeAdmin';
import payHome from './components/samali/components/payHomeClient';
import CardPay from './components/samali/components/CardPayClient';
import NavBar from './components/samali/components/AdminNavbar';
import PostDetails from './components/samali/components/CardDetailsAdmin';
import CardPaySuccess from './components/samali/components/CardPaySuccessClient';
import payPal from './components/samali/components/payPalClient';
import PaypalDisplay from './components/samali/components/PaypalDisplayAdmin';
import PayDetails from './components/samali/components/PayDetailsAdmin';
import PalUpdate from './components/samali/components/PalUpdateAdminClient';
import paypalSuccess from './components/samali/components/paypalSuccessClient';
import mailer from './components/samali/components/AdminMailer';




// Supi
import CreatePostProducts from './components/supi/components/CreatePostProducts';
import EditPostProducts from './components/supi/components/EditPostProducts';
import HomeProducts from './components//supi/components/HomeProducts';
import PostDetailsProducts from './components/supi/components/PostDetailsProducts';
import CreatePostCategory from './components/supi/components/CreatePostCategory';
import EditPostCategory from './components/supi/components/EditPostCategory';
import HomeCategories from './components/supi/components/HomeCategories';
import PostDetailsCategories from './components/supi/components/PostDetailsCategories';
import CreatePostOffers from './components/supi/components/CreatePostOffers';
import EditPostOffers from './components/supi/components/EditPostOffers';
import HomeOffer from './components//supi/components/HomeOffer';
import PostDetailsOffer from './components/supi/components/PostDetailsOffer';


//kithmini
import feedbackList from "./components/kithmini/feedback/feedback-list";
import Editcontact from "./components/kithmini/contact/edit-contact";
import contactList from "./components/kithmini/contact/contact-list";
import FAQsList from "./components/kithmini/FAQs/FAQs-list";
import suggestionList from "./components/kithmini/suggestion/suggestion-list";
import CustomercareHome from './components/kithmini/customercare/customercare-home';

// Anjali
import AddEmployee from './components/anjali/views/employee/AddEmployee';
import Dashboard from './components/anjali/views/dashboard/Dashboard';
import Attendence from './components/anjali/views/employee/Attendence';
import EmpDetails from './components/anjali/views/employee/EmpDetails';
import ViewAEmployee from './components/anjali/views/employee/ViewAEmployee';
import AttendenceHistory from './components/anjali/views/employee/AttendenceHistory';
import MonthlySalaryPaymentReport from './components/anjali/views/report/MonthlySalaryPaymentReport';
import SalaryDetails from './components/anjali/views//salary/SalaryDetails';
import AddSalary from './components/anjali/views/salary/AddSalary';
import LeavedEmp from './components/anjali/views/employee/LeavedEmp';
import EditEmp from './components/anjali/views/employee/EditEmp';
import EditSalary from './components/anjali/views/salary/EditSalary';
class App extends React.Component {

    constructor() {
        super();
        this.state = {
            error: null,
            isLoaded: false,
            items: [],

        };


    }
    render() {
        const { error, isLoaded, items } = this.state;
        // Containers

        const loading = (
            <div className="pt-3 text-center">
                <div className="sk-spinner sk-spinner-pulse"></div>
            </div>
        )


        return (
            <div className="App">
                <Router  >
                    <SidebarStock></SidebarStock>

                    {/* <HashRouter>
                        <React.Suspense fallback={loading}>


                        </React.Suspense>
                    </HashRouter> */}

                    {/* <Sidebar pageName={this.state.pageName} ></Sidebar> */}

                    <Container fluid>
                        <Switch>
                            <React.Fragment>

                                <Route exact path="/delivery-mgt" render={({ history }) => (
                                    <EntityHome history={history} />
                                )} />




                                <
                                    Route path="/"
                                    exact component={main}
                                // exact component = { ExercisesList }
                                />

                                <
                                    Route path="/admindashboard"
                                    exact component={AdminDashboard}
                                /> <
                                    Route path="/edit/:id"
                                    component={EditExercise}
                                /> <
                                    Route path="/main"
                                    component={ExercisesList}
                                /> <
                                    Route path="/create"
                                    component={CreateExercise}
                                /> <
                                    Route path="/user/add/"
                                    component={CreateUser}
                                /> <
                                    Route path="/users/"
                                    component={userList}
                                />  <
                                    Route path="/user/Edit/:id"
                                    component={EditUser}
                                />





                                <Route path="/category/add" exact component={CreateCatPost}></Route>
                                <Route path="/category/edit/:id" exact component={EditCatPost}></Route>
                                <Route path="/category/post/:id" exact component={PostDetailsCat}></Route>
                                <Route path="/category/home" exact component={CatHome}></Route>
                                <Route path="/category" exact component={HomeMainCategory}></Route>


                                <Route path="/order" exact component={HomeMainOrder}></Route>
                                <Route path="/order/home" exact component={OrderHome}></Route>
                                <Route path="/order/edit/:id" exact component={EditOrderPost}></Route>
                                <Route path="/order/post/:id" exact component={PostDetailsOrder}></Route>


                                {/* Shavinda    */}

                                <Route path="/stockHome" exact component={StockHome} />

                                <Route path="/homeP" component={HomeStockPro} />
                                <Route path="/homeC" component={HomeStockCat} />
                                <Route path="/homeS" component={HomeStockSup} />

                                <Route path="/addP" component={CreatePostStockPro}></Route>
                                <Route path="/editP/:id" component={EditPostStockPro}></Route>
                                <Route path="/postP/:id" component={PostDetailsStockPro}></Route>

                                <Route path="/addC" component={CreatePostStockCat}></Route>
                                <Route path="/editC/:id" component={EditPostStockCat}></Route>
                                <Route path="/postC/:id" component={PostDetailsStockCat}></Route>


                                <Route path="/addS" component={CreatePostStockSup}></Route>
                                <Route path="/editS/:id" component={EditPostStockSup}></Route>
                                <Route path="/postS/:id" component={PostDetailsStockSup}></Route>


                                <Route path="/homeStockP" component={productStockHome} />
                                <Route path="/homeStockC" component={categoryStockHome} />
                                <Route path="/homeStockS" component={supplierStockHome} />

                                <Route path="/stockProdRep" component={stockProductsReport}></Route>
                                <Route path="/stockCatRep" component={stockCategoryReport}></Route>
                                <Route path="/stockSupRep" component={stockSuppliersReport}></Route>


                                <Route path="/req" component={RequestProducts}></Route>






                                {/* Kithmini */}
                                <Route path="/feedback/" exact component={feedbackList} />
                                <Route path="/contact/" exact component={contactList} />
                                <Route path="/cedit/:id" component={Editcontact} />
                                <Route path="/FAQs" exact component={FAQsList} />
                                <Route path="/suggestion/" exact component={suggestionList} />
                                <Route path="/CustomercareHome" exact component={CustomercareHome} />






                                {/* driver routing start */}
                                <Route exact path="/driver" render={({ history }) => (
                                    <Driver history={history} />
                                )} />
                                <Route exact path="/driver/new" render={({ history }) => (
                                    <DriverEdit history={history} />
                                )} />
                                <Route exact path="/driver/view" render={({ history }) => (
                                    <DriverEdit history={history} />
                                )} />
                                <Route exact path="/driver/edit" render={({ history }) => (
                                    <DriverEdit history={history} />
                                )} />
                                {/* driver routing end */}




                                {/* order routing start */}
                                <Route exact path="/order-for-delivery" render={({ history }) => (
                                    <Order history={history} />
                                )} />
                                <Route exact path="/order-for-delivery/new" render={({ history }) => (
                                    <OrderEdit history={history} />
                                )} />
                                <Route exact path="/order-for-delivery/view" render={({ history }) => (
                                    <OrderEdit history={history} />
                                )} />
                                <Route exact path="/order-for-delivery/edit" render={({ history }) => (
                                    <OrderEdit history={history} />
                                )} />
                                {/* order routing end */}

                                {/* delivery routing start */}
                                <Route exact path="/delivery" render={({ history }) => (
                                    <Delivery history={history} />
                                )} />
                                <Route exact path="/delivery/new" render={({ history }) => (
                                    <DeliveryEdit history={history} />
                                )} />
                                <Route exact path="/delivery/view" render={({ history }) => (
                                    <DeliveryEdit history={history} />
                                )} />
                                <Route exact path="/delivery/edit" render={({ history }) => (
                                    <DeliveryEdit history={history} />
                                )} />
                                <Route exact path="/delivery/status" render={({ history }) => (
                                    <DeliveryEdit history={history} />
                                )} />
                                {/* delivery routing end */}

                                {/* vehicle routing start */}
                                <Route exact path="/vehicle" render={({ history }) => (
                                    <Vehicle history={history} />
                                )} />
                                <Route exact path="/vehicle/new" render={({ history }) => (
                                    <VehicleEdit history={history} />
                                )} />
                                <Route exact path="/vehicle/view" render={({ history }) => (
                                    <VehicleEdit history={history} />
                                )} />
                                <Route exact path="/vehicle/edit" render={({ history }) => (
                                    <VehicleEdit history={history} />
                                )} />
                                {/* vehicle routing end */}

                                {/* Anjali */}

                                <Route exact path="/addemp" render={({ history }) => (
                                    <AddEmployee history={history} />
                                )} />


                                <Route exact path="/staff-dashboard" render={({ history }) => (
                                    <Dashboard history={history} />

                                )} />

                                <Route exact path="/attendence" render={({ history }) => (
                                    <Attendence history={history} />

                                )} />

                                <Route exact path="/view/empdetails" render={({ history }) => (
                                    <EmpDetails history={history} />

                                )} />

                                <Route exact path="/view/ViewAEmp" render={({ history }) => (
                                    <ViewAEmployee history={history} />

                                )} />

                                <Route exact path="/attendence-history" render={({ history }) => (
                                    <AttendenceHistory history={history} />

                                )} />

                                <Route exact path="/monthlysalarypaymentreport" render={({ history }) => (
                                    <MonthlySalaryPaymentReport history={history} />

                                )} />

                                <Route exact path="/view/salary-detail" render={({ history }) => (
                                    <SalaryDetails history={history} />

                                )} />
                                <Route exact path="/add-salary" render={({ history }) => (
                                    <AddSalary history={history} />

                                )} />


                                <Route exact path="/LeavedEmp" render={({ history }) => (
                                    <LeavedEmp history={history} />
                                )} />

                                <Route exact path="/editemp/:id" render={({ history }) => (
                                    <EditEmp history={history} />
                                )} />

                                <Route exact path="/edit-salary/:id" render={({ history }) => (
                                    <EditSalary history={history} />
                                )} />




                                <Route path="/pay-home" exact component={PayHome}></Route>

                                <Route path="/payHome" component={payHome}></Route>
                                <Route path="/edit/:id" component={EditPosts}></Route>
                                <Route path="/post/:id" component={PostDetails}></Route>
                                <Route path="/payDisplay" component={PaypalDisplay}></Route>
                                <Route path="/palEdit/:id" component={PayDetails}></Route>
                                <Route path="/palUpdate/:id" component={PalUpdate}></Route>
                                <Route path="/mail" component={mailer}></Route>







                                <Route path="/home-products" exact component={HomeProducts}></Route>
                                <Route path="/addProducts" component={CreatePostProducts}></Route>
                                <Route path="/editProducts/:id" component={EditPostProducts}></Route>
                                <Route path="/postProducts/:id" component={PostDetailsProducts}></Route>
                                <Route path="/HomeCategory" exact component={HomeCategories}></Route>
                                <Route path="/addCategory" component={CreatePostCategory}></Route>
                                <Route path="/editCategory/:id" component={EditPostCategory}></Route>
                                <Route path="/postCategory/:id" component={PostDetailsCategories}></Route>
                                <Route path="/HomeOffer" exact component={HomeOffer}></Route>
                                <Route path="/addOffers" component={CreatePostOffers}></Route>
                                <Route path="/editOffers/:id" component={EditPostOffers}></Route>
                                <Route path="/postOffer/:id" component={PostDetailsOffer}></Route>


                            </React.Fragment>

                        </Switch>
                    </Container>

                </Router>
                <Footer></Footer>

              

            </div>
        );
    }

}


export default withRouter(App);






