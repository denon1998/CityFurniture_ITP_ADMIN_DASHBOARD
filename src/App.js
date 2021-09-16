import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, withRouter, Switch, HashRouter } from "react-router-dom";

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
import RequestProducts from './components/shavinda_chanduni/manage-suppliers/RequestProducts';

import adminDashboard from './components/shavinda_chanduni/AdminDashboard/adminDashboard';


import OrderEdit from './components/nuwanthika/order/OrderEdit';
import DeliveryEdit from './components/nuwanthika/delivery/DeliveryEdit';
import VehicleEdit from './components/nuwanthika/vehicle/VehicleEdit';
import EntityHome from './components/nuwanthika/entityHome/entity-home';


import Driver from "./components/nuwanthika/driver/Driver";
import DriverEdit from "./components/nuwanthika/driver/DriverEdit";
import Order from "./components/nuwanthika/order/Order";
import Delivery from "./components/nuwanthika/delivery/Delivery";
import Vehicle from "./components/nuwanthika/vehicle/Vehicle";


import { Sidebar } from "./components/nuwanthika/sidebar/Sidebar";
import routes from "./components/anjali/routes";

const AddEmployee = import('./components/anjali/views/employee/AddEmployee');


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
        const TheLayout = React.lazy(() => import('./components/anjali/containers/TheLayout'));
        const anjaliRoutes = routes;
        const loading = (
            <div className="pt-3 text-center">
                <div className="sk-spinner sk-spinner-pulse"></div>
            </div>
        )


        return (
            <div className="App">
                <Router  >
                    <Sidebar></Sidebar>

                    <HashRouter>
                        <React.Suspense fallback={loading}>


                        </React.Suspense>
                    </HashRouter>

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

                                <Route path="/req" component={RequestProducts}></Route>



















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

                                {anjaliRoutes.map((e, i) => {
                                    const Component = e.component;
                                    <Route exact path={e.path} theme={e.theme} components={e.component} key={i} />;

                                })}


                            </React.Fragment>

                        </Switch>
                    </Container>





                </Router>



            </div>
        );
    }

}


export default withRouter(App);






