import { useState } from 'react';

const Header = () => {
   return (
      <>
         {/* Navbar */}
         <nav className="main-header navbar navbar-expand navbar-white navbar-light">
            {/* Left navbar links */}
            <ul className="navbar-nav">
               <li className="nav-item">
                  <a className="nav-link" data-widget="pushmenu" href="#" role="button">
                     <i className="fas fa-bars" />
                  </a>
               </li>
               <li className="nav-item d-none d-sm-inline-block">
                  <a href="index3.html" className="nav-link">
                     Home
                  </a>
               </li>
               <li className="nav-item d-none d-sm-inline-block">
                  <a href="#" className="nav-link">
                     Contact
                  </a>
               </li>
            </ul>
            {/* Right navbar links */}
            <ul className="navbar-nav ml-auto">
               {/* Messages Dropdown Menu */}
               <li className="nav-item dropdown">
                  <a className="nav-link" data-toggle="dropdown" href="#">
                     <i className="far fa-comments" />
                     <span className="badge badge-danger navbar-badge">3</span>
                  </a>
                  <div className="dropdown-menu dropdown-menu-lg dropdown-menu-right">
                     <a href="#" className="dropdown-item">
                        {/* Message Start */}
                        <div className="media">
                           <img src="dist/img/user1-128x128.jpg" alt="User Avatar" className="img-size-50 mr-3 img-circle" />
                           <div className="media-body">
                              <h3 className="dropdown-item-title">
                                 Brad Diesel
                                 <span className="float-right text-sm text-danger">
                                    <i className="fas fa-star" />
                                 </span>
                              </h3>
                              <p className="text-sm">Call me whenever you can...</p>
                              <p className="text-sm text-muted">
                                 <i className="far fa-clock mr-1" /> 4 Hours Ago
                              </p>
                           </div>
                        </div>
                        {/* Message End */}
                     </a>
                     <div className="dropdown-divider" />
                     <a href="#" className="dropdown-item">
                        {/* Message Start */}
                        <div className="media">
                           <img src="dist/img/user8-128x128.jpg" alt="User Avatar" className="img-size-50 img-circle mr-3" />
                           <div className="media-body">
                              <h3 className="dropdown-item-title">
                                 John Pierce
                                 <span className="float-right text-sm text-muted">
                                    <i className="fas fa-star" />
                                 </span>
                              </h3>
                              <p className="text-sm">I got your message bro</p>
                              <p className="text-sm text-muted">
                                 <i className="far fa-clock mr-1" /> 4 Hours Ago
                              </p>
                           </div>
                        </div>
                        {/* Message End */}
                     </a>
                     <div className="dropdown-divider" />
                     <a href="#" className="dropdown-item">
                        {/* Message Start */}
                        <div className="media">
                           <img src="dist/img/user3-128x128.jpg" alt="User Avatar" className="img-size-50 img-circle mr-3" />
                           <div className="media-body">
                              <h3 className="dropdown-item-title">
                                 Nora Silvester
                                 <span className="float-right text-sm text-warning">
                                    <i className="fas fa-star" />
                                 </span>
                              </h3>
                              <p className="text-sm">The subject goes here</p>
                              <p className="text-sm text-muted">
                                 <i className="far fa-clock mr-1" /> 4 Hours Ago
                              </p>
                           </div>
                        </div>
                        {/* Message End */}
                     </a>
                     <div className="dropdown-divider" />
                     <a href="#" className="dropdown-item dropdown-footer">
                        See All Messages
                     </a>
                  </div>
               </li>
               {/* Notifications Dropdown Menu */}
               <li className="nav-item dropdown">
                  <a className="nav-link" data-toggle="dropdown" href="#">
                     <i className="far fa-bell" />
                     <span className="badge badge-warning navbar-badge">15</span>
                  </a>
                  <div className="dropdown-menu dropdown-menu-lg dropdown-menu-right">
                     <span className="dropdown-item dropdown-header">15 Notifications</span>
                     <div className="dropdown-divider" />
                     <a href="#" className="dropdown-item">
                        <i className="fas fa-envelope mr-2" /> 4 new messages
                        <span className="float-right text-muted text-sm">3 mins</span>
                     </a>
                     <div className="dropdown-divider" />
                     <a href="#" className="dropdown-item">
                        <i className="fas fa-users mr-2" /> 8 friend requests
                        <span className="float-right text-muted text-sm">12 hours</span>
                     </a>
                     <div className="dropdown-divider" />
                     <a href="#" className="dropdown-item">
                        <i className="fas fa-file mr-2" /> 3 new reports
                        <span className="float-right text-muted text-sm">2 days</span>
                     </a>
                     <div className="dropdown-divider" />
                     <a href="#" className="dropdown-item dropdown-footer">
                        See All Notifications
                     </a>
                  </div>
               </li>
               <li className="nav-item">
                  <a className="nav-link" data-widget="fullscreen" href="#" role="button">
                     <i className="fas fa-expand-arrows-alt" />
                  </a>
               </li>
            </ul>
         </nav>
         {/* /.navbar */}
         {/* Main Sidebar Container */}
         <aside style={{ minHeight: '100vh' }} className="main-sidebar sidebar-dark-primary elevation-4">
            {/* Brand Logo */}
            <a href="index3.html" className="brand-link">
               <img src="dist/img/AdminLTELogo.png" alt="logo" className="brand-image img-circle elevation-3" style={{ opacity: '.8' }} />
               <span className="brand-text font-weight-light">AdminLTE 3</span>
            </a>
            {/* Sidebar */}
            <div className="sidebar">
               {/* Sidebar user panel (optional) */}
               <div className="user-panel mt-3 pb-3 mb-3 d-flex">
                  <div className="image">
                     <img src="dist/img/user2-160x160.jpg" className="img-circle elevation-2" alt="User Image" />
                  </div>
                  <div className="info">
                     <a href="#" className="d-block">
                        Alexander Pierce
                     </a>
                  </div>
               </div>
               {/* SidebarSearch Form */}
               <div className="form-inline">
                  <div className="input-group" data-widget="sidebar-search">
                     <input className="form-control form-control-sidebar" type="search" placeholder="Search" aria-label="Search" />
                     <div className="input-group-append">
                        <button className="btn btn-sidebar">
                           <i className="fas fa-search fa-fw" />
                        </button>
                     </div>
                  </div>
               </div>
               {/* Sidebar Menu */}
               <nav className="mt-2">
                  <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
                     {/* Add icons to the links using the .nav-icon class
         with font-awesome or any other icon font library */}
                     <li className="nav-item menu-open">
                        <a href="#" className="nav-link active">
                           <i className="nav-icon fas fa-tachometer-alt" />
                           <p>
                              Dashboard
                              <i className="right fas fa-angle-left" />
                           </p>
                        </a>
                        <ul className="nav nav-treeview">
                           <li className="nav-item">
                              <a href="./index.html" className="nav-link active">
                                 <i className="far fa-circle nav-icon" />
                                 <p>Dashboard v1</p>
                              </a>
                           </li>
                           <li className="nav-item">
                              <a href="./index2.html" className="nav-link">
                                 <i className="far fa-circle nav-icon" />
                                 <p>Dashboard v2</p>
                              </a>
                           </li>
                           <li className="nav-item">
                              <a href="./index3.html" className="nav-link">
                                 <i className="far fa-circle nav-icon" />
                                 <p>Dashboard v3</p>
                              </a>
                           </li>
                        </ul>
                     </li>
                     <li className="nav-item">
                        <a href="pages/widgets.html" className="nav-link">
                           <i className="nav-icon fas fa-th" />
                           <p>
                              Widgets
                              <span className="right badge badge-danger">New</span>
                           </p>
                        </a>
                     </li>
                     <li className="nav-item">
                        <a href="#" className="nav-link">
                           <i className="nav-icon fas fa-copy" />
                           <p>
                              Layout Options
                              <i className="fas fa-angle-left right" />
                              <span className="badge badge-info right">6</span>
                           </p>
                        </a>
                        <ul className="nav nav-treeview">
                           <li className="nav-item">
                              <a href="pages/layout/top-nav.html" className="nav-link">
                                 <i className="far fa-circle nav-icon" />
                                 <p>Top Navigation</p>
                              </a>
                           </li>
                           <li className="nav-item">
                              <a href="pages/layout/top-nav-sidebar.html" className="nav-link">
                                 <i className="far fa-circle nav-icon" />
                                 <p>Top Navigation + Sidebar</p>
                              </a>
                           </li>
                           <li className="nav-item">
                              <a href="pages/layout/boxed.html" className="nav-link">
                                 <i className="far fa-circle nav-icon" />
                                 <p>Boxed</p>
                              </a>
                           </li>
                           <li className="nav-item">
                              <a href="pages/layout/fixed-sidebar.html" className="nav-link">
                                 <i className="far fa-circle nav-icon" />
                                 <p>Fixed Sidebar</p>
                              </a>
                           </li>
                           <li className="nav-item">
                              <a href="pages/layout/fixed-sidebar-custom.html" className="nav-link">
                                 <i className="far fa-circle nav-icon" />
                                 <p>
                                    Fixed Sidebar <small>+ Custom Area</small>
                                 </p>
                              </a>
                           </li>
                           <li className="nav-item">
                              <a href="pages/layout/fixed-topnav.html" className="nav-link">
                                 <i className="far fa-circle nav-icon" />
                                 <p>Fixed Navbar</p>
                              </a>
                           </li>
                           <li className="nav-item">
                              <a href="pages/layout/fixed-footer.html" className="nav-link">
                                 <i className="far fa-circle nav-icon" />
                                 <p>Fixed Footer</p>
                              </a>
                           </li>
                           <li className="nav-item">
                              <a href="pages/layout/collapsed-sidebar.html" className="nav-link">
                                 <i className="far fa-circle nav-icon" />
                                 <p>Collapsed Sidebar</p>
                              </a>
                           </li>
                        </ul>
                     </li>
                     <li className="nav-item">
                        <a href="#" className="nav-link">
                           <i className="nav-icon fas fa-chart-pie" />
                           <p>
                              Charts
                              <i className="right fas fa-angle-left" />
                           </p>
                        </a>
                        <ul className="nav nav-treeview">
                           <li className="nav-item">
                              <a href="pages/charts/chartjs.html" className="nav-link">
                                 <i className="far fa-circle nav-icon" />
                                 <p>ChartJS</p>
                              </a>
                           </li>
                           <li className="nav-item">
                              <a href="pages/charts/flot.html" className="nav-link">
                                 <i className="far fa-circle nav-icon" />
                                 <p>Flot</p>
                              </a>
                           </li>
                           <li className="nav-item">
                              <a href="pages/charts/inline.html" className="nav-link">
                                 <i className="far fa-circle nav-icon" />
                                 <p>Inline</p>
                              </a>
                           </li>
                           <li className="nav-item">
                              <a href="pages/charts/uplot.html" className="nav-link">
                                 <i className="far fa-circle nav-icon" />
                                 <p>uPlot</p>
                              </a>
                           </li>
                        </ul>
                     </li>
                     <li className="nav-item">
                        <a href="#" className="nav-link">
                           <i className="nav-icon fas fa-tree" />
                           <p>
                              UI Elements
                              <i className="fas fa-angle-left right" />
                           </p>
                        </a>
                        <ul className="nav nav-treeview">
                           <li className="nav-item">
                              <a href="pages/UI/general.html" className="nav-link">
                                 <i className="far fa-circle nav-icon" />
                                 <p>General</p>
                              </a>
                           </li>
                           <li className="nav-item">
                              <a href="pages/UI/icons.html" className="nav-link">
                                 <i className="far fa-circle nav-icon" />
                                 <p>Icons</p>
                              </a>
                           </li>
                           <li className="nav-item">
                              <a href="pages/UI/buttons.html" className="nav-link">
                                 <i className="far fa-circle nav-icon" />
                                 <p>Buttons</p>
                              </a>
                           </li>
                           <li className="nav-item">
                              <a href="pages/UI/sliders.html" className="nav-link">
                                 <i className="far fa-circle nav-icon" />
                                 <p>Sliders</p>
                              </a>
                           </li>
                           <li className="nav-item">
                              <a href="pages/UI/modals.html" className="nav-link">
                                 <i className="far fa-circle nav-icon" />
                                 <p>Modals &amp; Alerts</p>
                              </a>
                           </li>
                           <li className="nav-item">
                              <a href="pages/UI/navbar.html" className="nav-link">
                                 <i className="far fa-circle nav-icon" />
                                 <p>Navbar &amp; Tabs</p>
                              </a>
                           </li>
                           <li className="nav-item">
                              <a href="pages/UI/timeline.html" className="nav-link">
                                 <i className="far fa-circle nav-icon" />
                                 <p>Timeline</p>
                              </a>
                           </li>
                           <li className="nav-item">
                              <a href="pages/UI/ribbons.html" className="nav-link">
                                 <i className="far fa-circle nav-icon" />
                                 <p>Ribbons</p>
                              </a>
                           </li>
                        </ul>
                     </li>
                     <li className="nav-item">
                        <a href="#" className="nav-link">
                           <i className="nav-icon fas fa-edit" />
                           <p>
                              Forms
                              <i className="fas fa-angle-left right" />
                           </p>
                        </a>
                        <ul className="nav nav-treeview">
                           <li className="nav-item">
                              <a href="pages/forms/general.html" className="nav-link">
                                 <i className="far fa-circle nav-icon" />
                                 <p>General Elements</p>
                              </a>
                           </li>
                           <li className="nav-item">
                              <a href="pages/forms/advanced.html" className="nav-link">
                                 <i className="far fa-circle nav-icon" />
                                 <p>Advanced Elements</p>
                              </a>
                           </li>
                           <li className="nav-item">
                              <a href="pages/forms/editors.html" className="nav-link">
                                 <i className="far fa-circle nav-icon" />
                                 <p>Editors</p>
                              </a>
                           </li>
                           <li className="nav-item">
                              <a href="pages/forms/validation.html" className="nav-link">
                                 <i className="far fa-circle nav-icon" />
                                 <p>Validation</p>
                              </a>
                           </li>
                        </ul>
                     </li>
                  </ul>
               </nav>
               {/* /.sidebar-menu */}
            </div>
            {/* /.sidebar */}
         </aside>
         {/* Content Wrapper. Contains page content */}

         {/* /.content-wrapper */}
         <footer className="main-footer">
            <strong>
               Copyright © 2022<a href="https://adminlte.io"> TBSL</a>.
            </strong>
            All rights reserved.
            <div className="float-right d-none d-sm-inline-block">
               <b>Version</b> 1.0.1
            </div>
         </footer>
         {/* Control Sidebar */}
         <aside className="control-sidebar control-sidebar-dark">{/* Control sidebar content goes here */}</aside>
         {/* /.control-sidebar */}
      </>
   );
};

export default Header;
