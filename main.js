(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<div class=\"main-wrapper\">\n  <!-- <app-product></app-product> -->\n  <router-outlet></router-outlet>\n\n  <app-navigation></app-navigation>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/navigation/navigation.component.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/navigation/navigation.component.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"navigation\">\n  <a routerLink=\"\" class=\"navigation__item\">\n    <svg\n      version=\"1.1\"\n      id=\"Capa_1\"\n      xmlns=\"http://www.w3.org/2000/svg\"\n      xmlns:xlink=\"http://www.w3.org/1999/xlink\"\n      x=\"0px\"\n      y=\"0px\"\n      viewBox=\"0 0 58.365 58.365\"\n      style=\"enable-background:new 0 0 58.365 58.365;\"\n      xml:space=\"preserve\"\n    >\n      <path\n        d=\"M57.863,26.632l-8.681-8.061V5.365h-10v3.921L29.182,0L0.502,26.632c-0.404,0.376-0.428,1.009-0.052,1.414\n\tc0.375,0.404,1.008,0.427,1.414,0.052l3.319-3.082v33.349h16h16h16V25.015l3.319,3.082c0.192,0.179,0.437,0.267,0.681,0.267\n\tc0.269,0,0.536-0.107,0.732-0.319C58.291,27.641,58.267,27.008,57.863,26.632z M41.182,7.365h6v9.349l-6-5.571V7.365z\n\t M23.182,56.365V35.302c0-0.517,0.42-0.937,0.937-0.937h10.126c0.517,0,0.937,0.42,0.937,0.937v21.063H23.182z M51.182,56.365h-14\n\tV35.302c0-1.62-1.317-2.937-2.937-2.937H24.119c-1.62,0-2.937,1.317-2.937,2.937v21.063h-14V23.158l22-20.429l14.28,13.26\n\tl5.72,5.311v0l2,1.857V56.365z\"\n      />\n    </svg>\n  </a>\n  <a routerLink=\"product\" class=\"navigation__item\">\n    <svg\n      version=\"1.1\"\n      id=\"Capa_1\"\n      xmlns=\"http://www.w3.org/2000/svg\"\n      xmlns:xlink=\"http://www.w3.org/1999/xlink\"\n      x=\"0px\"\n      y=\"0px\"\n      viewBox=\"0 0 60 60\"\n      style=\"enable-background:new 0 0 60 60;\"\n      xml:space=\"preserve\"\n    >\n      <g>\n        <path\n          d=\"M38.914,0H6.5v60h47V14.586L38.914,0z M39.5,3.414L50.086,14H39.5V3.414z M8.5,58V2h29v14h14v42H8.5z\"\n        />\n        <path\n          d=\"M42.5,21h-16c-0.552,0-1,0.447-1,1s0.448,1,1,1h16c0.552,0,1-0.447,1-1S43.052,21,42.5,21z\"\n        />\n        <path\n          d=\"M22.875,18.219l-4.301,3.441l-1.367-1.367c-0.391-0.391-1.023-0.391-1.414,0s-0.391,1.023,0,1.414l2,2\n\t\tC17.987,23.901,18.243,24,18.5,24c0.22,0,0.441-0.072,0.624-0.219l5-4c0.432-0.346,0.501-0.975,0.156-1.406\n\t\tC23.936,17.943,23.306,17.874,22.875,18.219z\"\n        />\n        <path\n          d=\"M42.5,32h-16c-0.552,0-1,0.447-1,1s0.448,1,1,1h16c0.552,0,1-0.447,1-1S43.052,32,42.5,32z\"\n        />\n        <path\n          d=\"M22.875,29.219l-4.301,3.441l-1.367-1.367c-0.391-0.391-1.023-0.391-1.414,0s-0.391,1.023,0,1.414l2,2\n\t\tC17.987,34.901,18.243,35,18.5,35c0.22,0,0.441-0.072,0.624-0.219l5-4c0.432-0.346,0.501-0.975,0.156-1.406\n\t\tC23.936,28.943,23.306,28.874,22.875,29.219z\"\n        />\n        <path\n          d=\"M42.5,43h-16c-0.552,0-1,0.447-1,1s0.448,1,1,1h16c0.552,0,1-0.447,1-1S43.052,43,42.5,43z\"\n        />\n        <path\n          d=\"M22.875,40.219l-4.301,3.441l-1.367-1.367c-0.391-0.391-1.023-0.391-1.414,0s-0.391,1.023,0,1.414l2,2\n\t\tC17.987,45.901,18.243,46,18.5,46c0.22,0,0.441-0.072,0.624-0.219l5-4c0.432-0.346,0.501-0.975,0.156-1.406\n\t\tC23.936,39.943,23.306,39.874,22.875,40.219z\"\n        />\n      </g>\n    </svg>\n  </a>\n  <a (click)=\"openModal()\" class=\"navigation__item\">\n    <span class=\"navigation__item__add\">\n      <svg\n        version=\"1.1\"\n        id=\"Capa_1\"\n        xmlns=\"http://www.w3.org/2000/svg\"\n        xmlns:xlink=\"http://www.w3.org/1999/xlink\"\n        x=\"0px\"\n        y=\"0px\"\n        viewBox=\"0 0 42 42\"\n        style=\"enable-background:new 0 0 42 42;\"\n        xml:space=\"preserve\"\n      >\n        <polygon\n          points=\"42,20 22,20 22,0 20,0 20,20 0,20 0,22 20,22 20,42 22,42 22,22 42,22 \"\n        />\n      </svg>\n    </span>\n  </a>\n  <a routerLink=\"stock\" class=\"navigation__item\">\n    <svg\n      id=\"icons\"\n      enable-background=\"new 0 0 64 64\"\n      viewBox=\"0 0 64 64\"\n      xmlns=\"http://www.w3.org/2000/svg\"\n    >\n      <path\n        d=\"m5.518 64h2.986c.553 0 1-.447 1-1v-2.021h44.992v2.021c0 .553.447 1 1 1h3c.553 0 1-.447 1-1v-60.5c0-1.378-1.121-2.5-2.5-2.5s-2.5 1.122-2.5 2.5v15.504h-2.998v-13.996c0-.552-.447-1-1-1h-15.996c-.553 0-1 .448-1 1v13.995h-3.002v-13.995c0-.552-.447-1-1-1h-15.996c-.553 0-1 .448-1 1v13.995h-3v-15.503c0-1.378-1.121-2.5-2.5-2.5s-2.5 1.122-2.5 2.5l.014 60.5c0 .553.447 1 1 1zm50.978-61.5c0-.276.225-.5.5-.5s.5.224.5.5v59.5h-1zm-14.998 2.508h2.002v1.008h-2.002zm-5.996 0h3.996v2.008c0 .552.447 1 1 1h4.002c.553 0 1-.448 1-1v-2.008h3.998v12.995h-13.996zm-15.002 0h2v1.008h-2zm-5.996 0h3.996v2.008c0 .552.447 1 1 1h4c.553 0 1-.448 1-1v-2.008h4v12.995h-13.996zm-5 14.995h4 15.996 5.002 15.996 3.998v1h-44.992zm0 3h44.992v13.971h-2.996v-10.99c0-.552-.447-1-1-1h-37c-.553 0-1 .448-1 1v10.991h-2.996zm19.996 6.981h5c.553 0 1-.448 1-1v-2h14v9.991h-35v-9.991h14v2c0 .552.447 1 1 1zm1-2v-1h3v1zm-20.996 10.991h3.996 37 3.996v1.002h-44.992zm0 3.002h44.992v14h-2.994v-11.99c0-.553-.447-1-1-1h-14.002c-.553 0-1 .447-1 1v11.99h-2.994v-8.988c0-.553-.447-1-1-1h-6.994c-.004 0-.006-.002-.01-.002s-.006.002-.01.002h-3.982c-.004 0-.006-.002-.01-.002s-.006.002-.01.002h-6.986c-.553 0-1 .447-1 1v8.988h-3zm31.996 6.017h4.002c.553 0 1-.447 1-1v-2.008h3v10.99h-12.002v-10.99h3v2.008c0 .553.447 1 1 1zm1-2v-1.008h2.002v1.008zm-22 5h4.002c.553 0 1-.447 1-1v-2.006h5.004v7.988h-16.002v-7.988h4.996v2.006c0 .553.447 1 1 1zm1-2v-1.006h2.002v1.006zm-11.996 8.983h4 18.002 4.994 14.002 3.994v1.002h-44.992zm-2.5-55.977c.275 0 .5.224.5.5v59.5h-.986l-.014-59.5c0-.276.225-.5.5-.5z\"\n      />\n    </svg>\n  </a>\n\n  <a routerLink=\"settings\" class=\"navigation__item\">\n    <svg\n      version=\"1.1\"\n      id=\"Layer_1\"\n      xmlns=\"http://www.w3.org/2000/svg\"\n      xmlns:xlink=\"http://www.w3.org/1999/xlink\"\n      x=\"0px\"\n      y=\"0px\"\n      viewBox=\"0 0 512 512\"\n      style=\"enable-background:new 0 0 512 512;\"\n      xml:space=\"preserve\"\n    >\n      <g>\n        <g>\n          <g>\n            <path\n              d=\"M262.785,317.207c-1.913-4.032-6.736-5.752-10.769-3.837c-6.562,3.114-13.442,5.688-20.448,7.648\n\t\t\t\tc-2.931,0.82-5.152,3.215-5.748,6.2l-8.552,42.758c-0.844,4.222-4.582,7.287-8.888,7.287h-23.329\n\t\t\t\tc-4.306,0-8.043-3.064-8.888-7.287l-8.552-42.758c-0.597-2.985-2.819-5.38-5.748-6.2c-9.898-2.77-19.45-6.728-28.391-11.764\n\t\t\t\tc-2.653-1.494-5.92-1.371-8.452,0.317l-36.286,24.19c-3.582,2.388-8.392,1.911-11.438-1.133L60.8,316.131\n\t\t\t\tc-3.045-3.045-3.52-7.855-1.133-11.438l24.19-36.286c1.689-2.533,1.812-5.799,0.317-8.452\n\t\t\t\tc-5.037-8.942-8.995-18.495-11.764-28.391c-0.82-2.931-3.215-5.152-6.2-5.748l-42.758-8.552\n\t\t\t\tc-4.222-0.844-7.287-4.582-7.287-8.888v-23.329c0-4.306,3.064-8.043,7.287-8.888l42.758-8.552c2.985-0.597,5.38-2.819,6.2-5.748\n\t\t\t\tc2.77-9.898,6.728-19.45,11.764-28.391c1.494-2.652,1.371-5.919-0.317-8.452L59.669,88.734\n\t\t\t\tc-2.388-3.583-1.912-8.392,1.133-11.438l16.496-16.496c3.045-3.045,7.856-3.52,11.438-1.133l36.286,24.19\n\t\t\t\tc2.532,1.689,5.8,1.811,8.452,0.317c8.941-5.036,18.493-8.994,28.391-11.764c2.931-0.82,5.152-3.215,5.748-6.2l8.552-42.758\n\t\t\t\tc0.844-4.222,4.582-7.287,8.888-7.287h23.329c4.306,0,8.043,3.064,8.888,7.287l8.552,42.758c0.597,2.985,2.819,5.38,5.748,6.2\n\t\t\t\tc9.898,2.77,19.45,6.728,28.391,11.764c2.653,1.494,5.92,1.371,8.452-0.317l36.286-24.19c3.582-2.388,8.391-1.911,11.438,1.133\n\t\t\t\tl16.496,16.496c3.045,3.045,3.52,7.855,1.133,11.438l-24.19,36.286c-1.689,2.533-1.812,5.799-0.317,8.452\n\t\t\t\tc5.036,8.941,8.994,18.493,11.764,28.391c0.82,2.931,3.215,5.152,6.2,5.748l42.758,8.552c4.222,0.844,7.287,4.582,7.287,8.888\n\t\t\t\tv23.329c0,4.306-3.064,8.043-7.287,8.888l-42.758,8.552c-2.985,0.597-5.38,2.819-6.2,5.75c-2.009,7.18-4.66,14.223-7.88,20.934\n\t\t\t\tc-1.932,4.025-0.234,8.854,3.791,10.785c4.025,1.933,8.855,0.234,10.785-3.791c2.906-6.057,5.401-12.354,7.442-18.777\n\t\t\t\tl37.991-7.598c11.749-2.352,20.279-12.758,20.279-24.744v-23.329c0-11.986-8.53-22.391-20.284-24.743l-37.99-7.598\n\t\t\t\tc-2.492-7.844-5.65-15.47-9.434-22.769l21.492-32.239c6.648-9.973,5.323-23.363-3.153-31.839l-16.496-16.496\n\t\t\t\tc-8.477-8.476-21.867-9.8-31.839-3.153l-32.239,21.492c-7.299-3.783-14.925-6.942-22.769-9.434l-7.598-37.99\n\t\t\t\tC230.772,8.53,220.366,0,208.38,0h-23.329c-11.986,0-22.391,8.53-24.743,20.284l-7.598,37.99\n\t\t\t\tc-7.844,2.492-15.47,5.65-22.769,9.434L97.704,46.216c-9.972-6.648-23.363-5.324-31.839,3.153L49.369,65.865\n\t\t\t\tc-8.475,8.476-9.801,21.865-3.153,31.839l21.492,32.239c-3.783,7.299-6.942,14.924-9.434,22.769l-37.991,7.598\n\t\t\t\tC8.53,162.66,0,173.066,0,185.052v23.329c0,11.986,8.53,22.391,20.284,24.743l37.99,7.598c2.491,7.843,5.65,15.469,9.434,22.769\n\t\t\t\tL46.216,295.73c-6.648,9.973-5.323,23.363,3.153,31.839l16.496,16.496c8.476,8.476,21.866,9.8,31.839,3.153l32.239-21.492\n\t\t\t\tc7.299,3.783,14.924,6.942,22.769,9.434l7.598,37.992c2.35,11.75,12.756,20.281,24.742,20.281h23.329\n\t\t\t\tc11.986,0,22.391-8.53,24.743-20.284l7.598-37.99c6.229-1.979,12.343-4.386,18.228-7.18\n\t\t\t\tC262.983,326.063,264.701,321.241,262.785,317.207z\"\n            />\n            <path\n              d=\"M266.739,241.636c1.18,0.606,2.44,0.893,3.682,0.893c2.936,0,5.769-1.605,7.2-4.397\n\t\t\t\tc6.52-12.715,9.967-27.036,9.967-41.415c0-50.107-40.765-90.873-90.873-90.873c-23.838,0-46.364,9.162-63.43,25.801\n\t\t\t\tc-3.197,3.116-3.262,8.235-0.146,11.431c3.116,3.196,8.234,3.263,11.431,0.146c14.029-13.676,32.547-21.209,52.143-21.209\n\t\t\t\tc41.192,0,74.705,33.512,74.705,74.705c0,11.994-2.754,23.446-8.185,34.038C261.197,234.726,262.766,239.598,266.739,241.636z\"\n            />\n            <path\n              d=\"M121.043,162.125c-4.223-1.453-8.821,0.792-10.274,5.014c-3.267,9.498-4.924,19.45-4.924,29.577\n\t\t\t\tc0,50.108,40.766,90.873,90.873,90.873c19.271,0,37.683-5.956,53.247-17.227c3.616-2.619,4.425-7.674,1.807-11.29\n\t\t\t\tc-2.618-3.616-7.674-4.425-11.29-1.807c-12.788,9.259-27.921,14.154-43.765,14.154c-41.193,0-74.705-33.513-74.705-74.705\n\t\t\t\tc0-8.334,1.36-16.517,4.044-24.318C127.508,168.175,125.264,163.576,121.043,162.125z\"\n            />\n            <path\n              d=\"M496.442,353.316l-23.377-4.675c-1.424-4.237-3.139-8.374-5.127-12.373l13.226-19.838\n\t\t\t\tc5.099-7.65,4.083-17.92-2.418-24.42l-10.84-10.84c-6.501-6.5-16.771-7.517-24.42-2.418l-19.838,13.226\n\t\t\t\tc-3.999-1.988-8.136-3.703-12.373-5.126l-4.675-23.377c-1.803-9.015-9.784-15.558-18.977-15.558h-15.331\n\t\t\t\tc-9.192,0-17.174,6.543-18.977,15.558l-4.675,23.377c-4.237,1.424-8.374,3.139-12.373,5.126l-19.838-13.226\n\t\t\t\tc-7.65-5.098-17.92-4.083-24.42,2.418l-10.84,10.84c-6.501,6.501-7.517,16.771-2.418,24.42l13.226,19.838\n\t\t\t\tc-2.734,5.498-4.949,11.256-6.605,17.177c-1.203,4.3,1.308,8.76,5.607,9.964c4.3,1.203,8.76-1.307,9.964-5.607\n\t\t\t\tc1.76-6.292,4.276-12.362,7.476-18.043c1.494-2.653,1.371-5.92-0.317-8.452l-15.897-23.845c-0.839-1.259-0.672-2.949,0.398-4.019\n\t\t\t\tl10.84-10.84c1.07-1.069,2.76-1.235,4.019-0.398l23.845,15.897c2.532,1.689,5.799,1.811,8.452,0.317\n\t\t\t\tc5.682-3.2,11.751-5.716,18.043-7.476c2.931-0.82,5.152-3.215,5.748-6.2l5.619-28.097c0.296-1.483,1.61-2.56,3.123-2.56h15.331\n\t\t\t\tc1.512,0,2.826,1.077,3.123,2.56l5.619,28.099c0.597,2.985,2.819,5.38,5.748,6.2c6.292,1.76,12.362,4.276,18.043,7.476\n\t\t\t\tc2.652,1.494,5.92,1.371,8.452-0.317l23.845-15.897c1.259-0.839,2.949-0.673,4.019,0.398l10.84,10.84\n\t\t\t\tc1.069,1.07,1.236,2.76,0.398,4.019l-15.897,23.845c-1.689,2.533-1.812,5.799-0.317,8.452c3.2,5.682,5.716,11.751,7.476,18.043\n\t\t\t\tc0.82,2.931,3.215,5.152,6.2,5.748l28.097,5.619c1.483,0.296,2.56,1.61,2.56,3.123v15.331c0,1.512-1.077,2.826-2.56,3.123\n\t\t\t\tl-28.099,5.619c-2.985,0.597-5.38,2.819-6.2,5.748c-1.76,6.292-4.276,12.362-7.476,18.043c-1.494,2.653-1.371,5.92,0.317,8.452\n\t\t\t\tl15.897,23.845c0.839,1.259,0.672,2.949-0.398,4.019l-10.84,10.84c-1.069,1.07-2.759,1.236-4.019,0.398l-23.845-15.897\n\t\t\t\tc-2.532-1.688-5.8-1.811-8.452-0.317c-5.682,3.2-11.751,5.716-18.043,7.476c-2.931,0.82-5.152,3.215-5.748,6.2l-5.619,28.097\n\t\t\t\tc-0.296,1.483-1.61,2.56-3.123,2.56h-15.331c-1.512,0-2.826-1.077-3.123-2.56l-5.619-28.099c-0.597-2.985-2.819-5.38-5.748-6.2\n\t\t\t\tc-6.292-1.76-12.362-4.276-18.043-7.476c-2.653-1.494-5.921-1.371-8.452,0.317l-23.845,15.897\n\t\t\t\tc-1.259,0.839-2.949,0.673-4.019-0.398l-10.84-10.84c-1.069-1.07-1.236-2.76-0.398-4.019l15.897-23.845\n\t\t\t\tc1.689-2.533,1.812-5.799,0.317-8.452c-3.2-5.682-5.716-11.751-7.476-18.043c-0.82-2.931-3.215-5.152-6.2-5.748l-28.097-5.619\n\t\t\t\tc-1.483-0.296-2.56-1.61-2.56-3.123v-15.331c0-1.512,1.077-2.826,2.56-3.123l1.72-0.344c4.378-0.876,7.218-5.135,6.341-9.513\n\t\t\t\tc-0.876-4.378-5.13-7.213-9.514-6.341l-1.72,0.344c-9.013,1.804-15.556,9.785-15.556,18.978v15.331\n\t\t\t\tc0,9.192,6.543,17.174,15.558,18.977l23.377,4.675c1.424,4.237,3.139,8.374,5.126,12.373l-13.226,19.838\n\t\t\t\tc-5.1,7.65-4.083,17.92,2.418,24.42l10.84,10.84c6.501,6.501,16.771,7.517,24.42,2.418l19.838-13.226\n\t\t\t\tc3.999,1.988,8.136,3.703,12.373,5.126l4.675,23.377C355.119,505.457,363.1,512,372.293,512h15.331\n\t\t\t\tc9.192,0,17.174-6.543,18.977-15.558l4.675-23.377c4.237-1.424,8.374-3.139,12.373-5.127l19.838,13.226\n\t\t\t\tc7.65,5.099,17.92,4.083,24.42-2.418l10.84-10.84c6.501-6.501,7.517-16.771,2.418-24.42l-13.226-19.838\n\t\t\t\tc1.988-3.999,3.703-8.136,5.126-12.373l23.377-4.675c9.014-1.803,15.557-9.784,15.557-18.977v-15.331\n\t\t\t\tC512,363.1,505.457,355.119,496.442,353.316z\"\n            />\n            <path\n              d=\"M379.958,350.855c16.048,0,29.103,13.055,29.103,29.103c0,4.465,3.62,8.084,8.084,8.084s8.084-3.62,8.084-8.084\n\t\t\t\tc0-24.963-20.309-45.272-45.272-45.272s-45.272,20.309-45.272,45.272s20.309,45.272,45.272,45.272\n\t\t\t\tc10.111,0,19.675-3.261,27.659-9.429c3.533-2.73,4.184-7.807,1.455-11.341c-2.73-3.533-7.808-4.185-11.341-1.455\n\t\t\t\tc-5.128,3.961-11.274,6.056-17.773,6.056c-16.048,0-29.103-13.055-29.103-29.103C350.855,363.909,363.91,350.855,379.958,350.855\n\t\t\t\tz\"\n            />\n            <path\n              d=\"M245.969,196.716c0-27.158-22.096-49.253-49.253-49.253c-27.158,0-49.253,22.096-49.253,49.253\n\t\t\t\tc0,27.158,22.095,49.253,49.253,49.253S245.969,223.873,245.969,196.716z M163.631,196.716c0-18.242,14.843-33.085,33.085-33.085\n\t\t\t\tc18.242,0,33.085,14.843,33.085,33.085c0,18.242-14.842,33.085-33.085,33.085C178.472,229.801,163.631,214.958,163.631,196.716z\"\n            />\n          </g>\n        </g>\n      </g>\n    </svg>\n  </a>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/modules/product/components/product-add/product-add.component.html":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/modules/product/components/product-add/product-add.component.html ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form [formGroup]=\"productForm\" (ngSubmit)=\"addProduct()\" class=\"product-form\">\n  <mat-form-field class=\"example-full-width\">\n    <input matInput placeholder=\"Name\" formControlName=\"name\" />\n  </mat-form-field>\n\n  <!-- <mat-form-field class=\"example-full-width\">\n    <input type=\"number\" matInput placeholder=\"Price\" formControlName=\"price\" />\n  </mat-form-field> -->\n  <button type=\"submit\" mat-raised-button color=\"primary\">Add product</button>\n</form>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/modules/product/components/product-list/product-list.component.html":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/modules/product/components/product-list/product-list.component.html ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-list>\n  <!-- <h3 mat-subheader>Items</h3> -->\n  <mat-list-item\n    *ngFor=\"let product of products\"\n    class=\"product-item\"\n    [routerLink]=\"product.id\"\n    button\n    component=\"a\"\n  >\n    <h4 class=\"product-item__title\" mat-line>{{ product.name }}</h4>\n    <p class=\"product-item__date\" mat-line>{{ product.date | date }}</p>\n    <mat-divider></mat-divider>\n  </mat-list-item>\n</mat-list>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/modules/product/views/product-single/product-single.component.html":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/modules/product/views/product-single/product-single.component.html ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-title\">\n  <h1 class=\"main-title__title\">{{ product.name }}</h1>\n  <p class=\"main-title__subtitle\">{{ product.date | date }}</p>\n</div>\n<div class=\"content-wrapper\"></div>\n\n<button (click)=\"deleteProduct()\">delete</button>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/modules/product/views/product/product.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/modules/product/views/product/product.component.html ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-title\">\n  <h1 class=\"main-title__title\">\n    Products list\n    <!-- <svg\n      version=\"1.1\"\n      id=\"Layer_1\"\n      xmlns=\"http://www.w3.org/2000/svg\"\n      xmlns:xlink=\"http://www.w3.org/1999/xlink\"\n      x=\"0px\"\n      y=\"0px\"\n      viewBox=\"0 0 384 384\"\n      style=\"enable-background:new 0 0 384 384;\"\n      xml:space=\"preserve\"\n    >\n      <g>\n        <g>\n          <circle cx=\"192\" cy=\"42.667\" r=\"42.667\" />\n        </g>\n      </g>\n      <g>\n        <g>\n          <circle cx=\"192\" cy=\"192\" r=\"42.667\" />\n        </g>\n      </g>\n      <g>\n        <g>\n          <circle cx=\"192\" cy=\"341.333\" r=\"42.667\" />\n        </g>\n      </g>\n    </svg> -->\n    <svg\n      (click)=\"openMore()\"\n      version=\"1.1\"\n      id=\"Capa_1\"\n      xmlns=\"http://www.w3.org/2000/svg\"\n      xmlns:xlink=\"http://www.w3.org/1999/xlink\"\n      x=\"0px\"\n      y=\"0px\"\n      viewBox=\"0 0 490 490\"\n      style=\"enable-background:new 0 0 490 490;\"\n      xml:space=\"preserve\"\n    >\n      <g>\n        <g>\n          <path\n            d=\"M245,185.5c-32.8,0-59.5,26.7-59.5,59.5s26.7,59.5,59.5,59.5s59.5-26.7,59.5-59.5S277.8,185.5,245,185.5z M280,245\n\t\t\tc0,19.3-15.7,35-35,35s-35-15.7-35-35s15.7-35,35-35S280,225.7,280,245z\"\n          />\n          <path\n            d=\"M185.5,430.5c0,32.8,26.7,59.5,59.5,59.5s59.5-26.7,59.5-59.5S277.8,371,245,371S185.5,397.7,185.5,430.5z M280,430.5\n\t\t\tc0,19.3-15.7,35-35,35s-35-15.7-35-35s15.7-35,35-35S280,411.2,280,430.5z\"\n          />\n          <path\n            d=\"M185.5,59.5c0,32.8,26.7,59.5,59.5,59.5s59.5-26.7,59.5-59.5S277.8,0,245,0S185.5,26.7,185.5,59.5z M280,59.5\n\t\t\tc0,19.3-15.7,35-35,35s-35-15.7-35-35s15.7-35,35-35S280,40.2,280,59.5z\"\n          />\n        </g>\n      </g>\n    </svg>\n  </h1>\n  <div class=\"main-title__more\" *ngIf=\"isMoreOpen\" (blur)=\"openMore()\">\n    <p class=\"main-title__more__item\">Select All</p>\n  </div>\n</div>\n<div class=\"content-wrapper\">\n  <app-product-list\n    [products]=\"(products | async)?.products\"\n  ></app-product-list>\n  <!-- <button class=\"product-add\" mat-fab color=\"primary\" (click)=\"openDialog()\">\n    Primary\n  </button> -->\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/views/home/home.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/views/home/home.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-title\">\n  <h1 class=\"main-title__title\">Home</h1>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/views/settings/settings.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/views/settings/settings.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-title\">\n  <h1 class=\"main-title__title\">Settings</h1>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/views/stock/stock.component.html":
/*!****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/views/stock/stock.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-title\">\n  <h1 class=\"main-title__title\">Stock</h1>\n</div>\n"

/***/ }),

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".main-wrapper {\r\n  box-sizing: border-box;\r\n  max-width: 960px;\r\n  width: 100%;\r\n  /* height: 100%; */\r\n  margin: 0 auto;\r\n  /* padding: 0 2.5%; */\r\n}\r\n\r\napp-product {\r\n  display: flex;\r\n  flex-direction: column;\r\n  /* height: 100%; */\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxzQkFBc0I7RUFDdEIsZ0JBQWdCO0VBQ2hCLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsY0FBYztFQUNkLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsa0JBQWtCO0FBQ3BCIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWFpbi13cmFwcGVyIHtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIG1heC13aWR0aDogOTYwcHg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgLyogaGVpZ2h0OiAxMDAlOyAqL1xyXG4gIG1hcmdpbjogMCBhdXRvO1xyXG4gIC8qIHBhZGRpbmc6IDAgMi41JTsgKi9cclxufVxyXG5cclxuYXBwLXByb2R1Y3Qge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAvKiBoZWlnaHQ6IDEwMCU7ICovXHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'home-manager';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _modules_product_product_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/product/product.module */ "./src/app/modules/product/product.module.ts");
/* harmony import */ var _modules_product_views_product_product_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/product/views/product/product.component */ "./src/app/modules/product/views/product/product.component.ts");
/* harmony import */ var _modules_product_views_product_single_product_single_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules/product/views/product-single/product-single.component */ "./src/app/modules/product/views/product-single/product-single.component.ts");
/* harmony import */ var _views_home_home_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./views/home/home.component */ "./src/app/views/home/home.component.ts");
/* harmony import */ var _components_navigation_navigation_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/navigation/navigation.component */ "./src/app/components/navigation/navigation.component.ts");
/* harmony import */ var _services_evenet_emmiter_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./services/evenet-emmiter.service */ "./src/app/services/evenet-emmiter.service.ts");
/* harmony import */ var _angular_service_worker__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/service-worker */ "./node_modules/@angular/service-worker/fesm5/service-worker.js");
/* harmony import */ var _views_settings_settings_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./views/settings/settings.component */ "./src/app/views/settings/settings.component.ts");
/* harmony import */ var _views_stock_stock_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./views/stock/stock.component */ "./src/app/views/stock/stock.component.ts");














var appRoutes = [
    { path: '', component: _views_home_home_component__WEBPACK_IMPORTED_MODULE_8__["HomeComponent"] },
    { path: 'product', component: _modules_product_views_product_product_component__WEBPACK_IMPORTED_MODULE_6__["ProductComponent"] },
    { path: 'product/:id', component: _modules_product_views_product_single_product_single_component__WEBPACK_IMPORTED_MODULE_7__["ProductSingleComponent"] },
    { path: 'settings', component: _views_settings_settings_component__WEBPACK_IMPORTED_MODULE_12__["SettingsComponent"] },
    { path: 'stock', component: _views_stock_stock_component__WEBPACK_IMPORTED_MODULE_13__["StockComponent"] }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _views_home_home_component__WEBPACK_IMPORTED_MODULE_8__["HomeComponent"],
                _components_navigation_navigation_component__WEBPACK_IMPORTED_MODULE_9__["NavigationComponent"],
                _views_settings_settings_component__WEBPACK_IMPORTED_MODULE_12__["SettingsComponent"],
                _views_stock_stock_component__WEBPACK_IMPORTED_MODULE_13__["StockComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot(appRoutes
                // { enableTracing: true } // <-- debugging purposes only
                ),
                _modules_product_product_module__WEBPACK_IMPORTED_MODULE_5__["ProductModule"],
                _angular_service_worker__WEBPACK_IMPORTED_MODULE_11__["ServiceWorkerModule"].register('ngsw-worker.js', {
                    enabled: true
                })
            ],
            providers: [_services_evenet_emmiter_service__WEBPACK_IMPORTED_MODULE_10__["EvenetEmmiterService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/navigation/navigation.component.css":
/*!****************************************************************!*\
  !*** ./src/app/components/navigation/navigation.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".navigation {\r\n  display: flex;\r\n  position: fixed;\r\n  bottom: 0;\r\n  width: 100%;\r\n  background: #fff;\r\n  border-top: 1px solid rgba(0, 0, 0, 0.1);\r\n}\r\n\r\n.navigation .navigation__item {\r\n  fill: gray;\r\n  flex: 1;\r\n  display: flex;\r\n  justify-content: center;\r\n  padding: 4% 2%;\r\n  position: relative;\r\n}\r\n\r\n.navigation__item__add {\r\n  position: absolute;\r\n  width: 50px;\r\n  height: 50px;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  background: #333333;\r\n  border-radius: 25px;\r\n  bottom: 10px;\r\n}\r\n\r\n.navigation__item__add svg {\r\n  fill: #fff;\r\n}\r\n\r\n.navigation a svg {\r\n  width: 20px;\r\n  height: 20px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9uYXZpZ2F0aW9uL25hdmlnYXRpb24uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQWE7RUFDYixlQUFlO0VBQ2YsU0FBUztFQUNULFdBQVc7RUFDWCxnQkFBZ0I7RUFDaEIsd0NBQXdDO0FBQzFDOztBQUVBO0VBQ0UsVUFBVTtFQUNWLE9BQU87RUFDUCxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLGNBQWM7RUFDZCxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLFlBQVk7RUFDWixhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixtQkFBbUI7RUFDbkIsbUJBQW1CO0VBQ25CLFlBQVk7QUFDZDs7QUFFQTtFQUNFLFVBQVU7QUFDWjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0FBQ2QiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL25hdmlnYXRpb24vbmF2aWdhdGlvbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm5hdmlnYXRpb24ge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIGJvdHRvbTogMDtcclxuICB3aWR0aDogMTAwJTtcclxuICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMSk7XHJcbn1cclxuXHJcbi5uYXZpZ2F0aW9uIC5uYXZpZ2F0aW9uX19pdGVtIHtcclxuICBmaWxsOiBncmF5O1xyXG4gIGZsZXg6IDE7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBwYWRkaW5nOiA0JSAyJTtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuXHJcbi5uYXZpZ2F0aW9uX19pdGVtX19hZGQge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB3aWR0aDogNTBweDtcclxuICBoZWlnaHQ6IDUwcHg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGJhY2tncm91bmQ6ICMzMzMzMzM7XHJcbiAgYm9yZGVyLXJhZGl1czogMjVweDtcclxuICBib3R0b206IDEwcHg7XHJcbn1cclxuXHJcbi5uYXZpZ2F0aW9uX19pdGVtX19hZGQgc3ZnIHtcclxuICBmaWxsOiAjZmZmO1xyXG59XHJcblxyXG4ubmF2aWdhdGlvbiBhIHN2ZyB7XHJcbiAgd2lkdGg6IDIwcHg7XHJcbiAgaGVpZ2h0OiAyMHB4O1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/components/navigation/navigation.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/navigation/navigation.component.ts ***!
  \***************************************************************/
/*! exports provided: NavigationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavigationComponent", function() { return NavigationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var app_services_evenet_emmiter_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/services/evenet-emmiter.service */ "./src/app/services/evenet-emmiter.service.ts");




var NavigationComponent = /** @class */ (function () {
    function NavigationComponent(router, eventEmiterService) {
        this.router = router;
        this.eventEmiterService = eventEmiterService;
    }
    NavigationComponent.prototype.ngOnInit = function () {
        // this.router.events.subscribe((event: Event) => {
        //   console.log(event);
        // });
    };
    NavigationComponent.prototype.openModal = function () {
        this.eventEmiterService.addProduct();
    };
    NavigationComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: app_services_evenet_emmiter_service__WEBPACK_IMPORTED_MODULE_3__["EvenetEmmiterService"] }
    ]; };
    NavigationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-navigation',
            template: __webpack_require__(/*! raw-loader!./navigation.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/navigation/navigation.component.html"),
            styles: [__webpack_require__(/*! ./navigation.component.css */ "./src/app/components/navigation/navigation.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            app_services_evenet_emmiter_service__WEBPACK_IMPORTED_MODULE_3__["EvenetEmmiterService"]])
    ], NavigationComponent);
    return NavigationComponent;
}());



/***/ }),

/***/ "./src/app/modules/product/components/product-add/product-add.component.css":
/*!**********************************************************************************!*\
  !*** ./src/app/modules/product/components/product-add/product-add.component.css ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".product-form {\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n\r\n.product-form > * {\r\n  width: 100%;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9wcm9kdWN0L2NvbXBvbmVudHMvcHJvZHVjdC1hZGQvcHJvZHVjdC1hZGQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxXQUFXO0FBQ2IiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL3Byb2R1Y3QvY29tcG9uZW50cy9wcm9kdWN0LWFkZC9wcm9kdWN0LWFkZC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnByb2R1Y3QtZm9ybSB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG59XHJcblxyXG4ucHJvZHVjdC1mb3JtID4gKiB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/modules/product/components/product-add/product-add.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/modules/product/components/product-add/product-add.component.ts ***!
  \*********************************************************************************/
/*! exports provided: ProductAddComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductAddComponent", function() { return ProductAddComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var uuid_v1__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! uuid/v1 */ "./node_modules/uuid/v1.js");
/* harmony import */ var uuid_v1__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(uuid_v1__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm5/dialog.es5.js");
/* harmony import */ var _store_product_actions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../store/product.actions */ "./src/app/modules/product/store/product.actions.ts");
/* harmony import */ var _models_product__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../models/product */ "./src/app/modules/product/models/product.ts");








var ProductAddComponent = /** @class */ (function () {
    function ProductAddComponent(fb, store, dialogRef, data) {
        this.fb = fb;
        this.store = store;
        this.dialogRef = dialogRef;
        this.data = data;
        this.productForm = this.fb.group({
            name: ['']
        });
    }
    ProductAddComponent.prototype.ngOnInit = function () { };
    ProductAddComponent.prototype.addProduct = function () {
        var formValue = this.productForm.value;
        var product = new _models_product__WEBPACK_IMPORTED_MODULE_7__["Product"](uuid_v1__WEBPACK_IMPORTED_MODULE_4__(), formValue.name, 
        // formValue.price,
        new Date());
        this.store.dispatch(Object(_store_product_actions__WEBPACK_IMPORTED_MODULE_6__["addProduct"])(product));
        this.productForm.reset();
        this.dialogRef.close();
    };
    ProductAddComponent.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
        { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"] },
        { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialogRef"] },
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MAT_DIALOG_DATA"],] }] }
    ]; };
    ProductAddComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-product-add',
            template: __webpack_require__(/*! raw-loader!./product-add.component.html */ "./node_modules/raw-loader/index.js!./src/app/modules/product/components/product-add/product-add.component.html"),
            styles: [__webpack_require__(/*! ./product-add.component.css */ "./src/app/modules/product/components/product-add/product-add.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](3, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MAT_DIALOG_DATA"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialogRef"], Object])
    ], ProductAddComponent);
    return ProductAddComponent;
}());



/***/ }),

/***/ "./src/app/modules/product/components/product-list/product-list.component.css":
/*!************************************************************************************!*\
  !*** ./src/app/modules/product/components/product-list/product-list.component.css ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".product-item:last-child mat-divider {\r\n  display: none;\r\n}\r\n\r\n.mat-list {\r\n  padding-top: 0;\r\n}\r\n\r\n.product-item {\r\n}\r\n\r\n.product-item .product-item__title {\r\n  font-size: 14px;\r\n  line-height: 18px;\r\n}\r\n\r\n.product-item .product-item__date {\r\n  font-size: 12px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9wcm9kdWN0L2NvbXBvbmVudHMvcHJvZHVjdC1saXN0L3Byb2R1Y3QtbGlzdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTtBQUNBOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGVBQWU7QUFDakIiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL3Byb2R1Y3QvY29tcG9uZW50cy9wcm9kdWN0LWxpc3QvcHJvZHVjdC1saXN0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucHJvZHVjdC1pdGVtOmxhc3QtY2hpbGQgbWF0LWRpdmlkZXIge1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuXHJcbi5tYXQtbGlzdCB7XHJcbiAgcGFkZGluZy10b3A6IDA7XHJcbn1cclxuXHJcbi5wcm9kdWN0LWl0ZW0ge1xyXG59XHJcblxyXG4ucHJvZHVjdC1pdGVtIC5wcm9kdWN0LWl0ZW1fX3RpdGxlIHtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgbGluZS1oZWlnaHQ6IDE4cHg7XHJcbn1cclxuXHJcbi5wcm9kdWN0LWl0ZW0gLnByb2R1Y3QtaXRlbV9fZGF0ZSB7XHJcbiAgZm9udC1zaXplOiAxMnB4O1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/modules/product/components/product-list/product-list.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/modules/product/components/product-list/product-list.component.ts ***!
  \***********************************************************************************/
/*! exports provided: ProductListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductListComponent", function() { return ProductListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ProductListComponent = /** @class */ (function () {
    function ProductListComponent() {
    }
    ProductListComponent.prototype.ngOnInit = function () {
        console.log(this.products);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ProductListComponent.prototype, "products", void 0);
    ProductListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-product-list',
            template: __webpack_require__(/*! raw-loader!./product-list.component.html */ "./node_modules/raw-loader/index.js!./src/app/modules/product/components/product-list/product-list.component.html"),
            styles: [__webpack_require__(/*! ./product-list.component.css */ "./src/app/modules/product/components/product-list/product-list.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ProductListComponent);
    return ProductListComponent;
}());



/***/ }),

/***/ "./src/app/modules/product/models/product.ts":
/*!***************************************************!*\
  !*** ./src/app/modules/product/models/product.ts ***!
  \***************************************************/
/*! exports provided: Product */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Product", function() { return Product; });
var Product = /** @class */ (function () {
    function Product(id, name, 
    // public price: number,
    date) {
        this.id = id;
        this.name = name;
        this.date = date;
    }
    Product.ctorParameters = function () { return [
        { type: String },
        { type: String },
        { type: Date }
    ]; };
    return Product;
}());



/***/ }),

/***/ "./src/app/modules/product/product.module.ts":
/*!***************************************************!*\
  !*** ./src/app/modules/product/product.module.ts ***!
  \***************************************************/
/*! exports provided: reducerA, ProductModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reducerA", function() { return reducerA; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductModule", function() { return ProductModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _store_product_reducer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./store/product.reducer */ "./src/app/modules/product/store/product.reducer.ts");
/* harmony import */ var _views_product_product_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./views/product/product.component */ "./src/app/modules/product/views/product/product.component.ts");
/* harmony import */ var _components_product_list_product_list_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/product-list/product-list.component */ "./src/app/modules/product/components/product-list/product-list.component.ts");
/* harmony import */ var _components_product_add_product_add_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/product-add/product-add.component */ "./src/app/modules/product/components/product-add/product-add.component.ts");
/* harmony import */ var _views_product_single_product_single_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./views/product-single/product-single.component */ "./src/app/modules/product/views/product-single/product-single.component.ts");
/* harmony import */ var _store_localStorage__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./store/localStorage */ "./src/app/modules/product/store/localStorage.ts");



/** Module for dynamic forms */











var reducers = { products: _store_product_reducer__WEBPACK_IMPORTED_MODULE_8__["productsReducer"] };
var metaReducers = [_store_localStorage__WEBPACK_IMPORTED_MODULE_13__["localStorageSyncReducer"]];
var combined = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_7__["combineReducers"])(reducers, { metaReducers: metaReducers });
function reducerA(state, action) {
    return combined(state, action);
}
var ProductModule = /** @class */ (function () {
    function ProductModule() {
    }
    ProductModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _views_product_product_component__WEBPACK_IMPORTED_MODULE_9__["ProductComponent"],
                _components_product_list_product_list_component__WEBPACK_IMPORTED_MODULE_10__["ProductListComponent"],
                _components_product_add_product_add_component__WEBPACK_IMPORTED_MODULE_11__["ProductAddComponent"],
                _views_product_single_product_single_component__WEBPACK_IMPORTED_MODULE_12__["ProductSingleComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatDialogModule"],
                _ngrx_store__WEBPACK_IMPORTED_MODULE_7__["StoreModule"].forRoot(reducerA)
            ],
            exports: [_views_product_product_component__WEBPACK_IMPORTED_MODULE_9__["ProductComponent"], _views_product_single_product_single_component__WEBPACK_IMPORTED_MODULE_12__["ProductSingleComponent"]],
            entryComponents: [_components_product_add_product_add_component__WEBPACK_IMPORTED_MODULE_11__["ProductAddComponent"]]
        })
    ], ProductModule);
    return ProductModule;
}());



/***/ }),

/***/ "./src/app/modules/product/store/localStorage.ts":
/*!*******************************************************!*\
  !*** ./src/app/modules/product/store/localStorage.ts ***!
  \*******************************************************/
/*! exports provided: localStorageSyncReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "localStorageSyncReducer", function() { return localStorageSyncReducer; });
/* harmony import */ var ngrx_store_localstorage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ngrx-store-localstorage */ "./node_modules/ngrx-store-localstorage/dist/index.js");
/* harmony import */ var ngrx_store_localstorage__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(ngrx_store_localstorage__WEBPACK_IMPORTED_MODULE_0__);

function localStorageSyncReducer(reducer) {
    return Object(ngrx_store_localstorage__WEBPACK_IMPORTED_MODULE_0__["localStorageSync"])({ keys: ['products'], rehydrate: true })(reducer);
}


/***/ }),

/***/ "./src/app/modules/product/store/product.actions.ts":
/*!**********************************************************!*\
  !*** ./src/app/modules/product/store/product.actions.ts ***!
  \**********************************************************/
/*! exports provided: addProduct, deleteProduct */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addProduct", function() { return addProduct; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteProduct", function() { return deleteProduct; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");

var ProductActions;
(function (ProductActions) {
    ProductActions["AddProduct"] = "product/add";
    ProductActions["DeleteProduct"] = "product/delete";
})(ProductActions || (ProductActions = {}));
var addProduct = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])(ProductActions.AddProduct, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
var deleteProduct = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])(ProductActions.DeleteProduct, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());


/***/ }),

/***/ "./src/app/modules/product/store/product.reducer.ts":
/*!**********************************************************!*\
  !*** ./src/app/modules/product/store/product.reducer.ts ***!
  \**********************************************************/
/*! exports provided: initialState, productsReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "productsReducer", function() { return productsReducer; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _product_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./product.actions */ "./src/app/modules/product/store/product.actions.ts");


var initialState = {
    products: []
};
var productsReducer = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createReducer"])(initialState, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_product_actions__WEBPACK_IMPORTED_MODULE_1__["addProduct"], function (state, actions) {
    state.products = state.products.concat([actions]);
    return state;
}), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_product_actions__WEBPACK_IMPORTED_MODULE_1__["deleteProduct"], function (state, actions) {
    state.products = state.products.filter(function (product) { return product.id !== actions.id; });
    return state;
}));


/***/ }),

/***/ "./src/app/modules/product/store/product.selectors.ts":
/*!************************************************************!*\
  !*** ./src/app/modules/product/store/product.selectors.ts ***!
  \************************************************************/
/*! exports provided: selectProduct, selectProductById */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectProduct", function() { return selectProduct; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectProductById", function() { return selectProductById; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");

var selectProduct = function (state) { return state.products; };
var selectProductById = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectProduct, function (state, prop) { return state.products.find(function (p) { return p.id === prop; }); });


/***/ }),

/***/ "./src/app/modules/product/views/product-single/product-single.component.css":
/*!***********************************************************************************!*\
  !*** ./src/app/modules/product/views/product-single/product-single.component.css ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvcHJvZHVjdC92aWV3cy9wcm9kdWN0LXNpbmdsZS9wcm9kdWN0LXNpbmdsZS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/modules/product/views/product-single/product-single.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/modules/product/views/product-single/product-single.component.ts ***!
  \**********************************************************************************/
/*! exports provided: ProductSingleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductSingleComponent", function() { return ProductSingleComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _store_product_selectors__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../store/product.selectors */ "./src/app/modules/product/store/product.selectors.ts");
/* harmony import */ var _store_product_actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../store/product.actions */ "./src/app/modules/product/store/product.actions.ts");


// import { Observable } from 'rxjs';




var ProductSingleComponent = /** @class */ (function () {
    function ProductSingleComponent(route, store, router) {
        this.route = route;
        this.store = store;
        this.router = router;
    }
    ProductSingleComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.paramMap.subscribe(function (params) {
            _this.id = params.get('id');
            _this.store
                .pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_3__["select"])(_store_product_selectors__WEBPACK_IMPORTED_MODULE_4__["selectProductById"], _this.id))
                .subscribe(function (product) { return (_this.product = product); });
            // this.productO.subscribe(t => console.log(t));
        });
    };
    ProductSingleComponent.prototype.deleteProduct = function () {
        this.store.dispatch(Object(_store_product_actions__WEBPACK_IMPORTED_MODULE_5__["deleteProduct"])({ id: this.id }));
        this.router.navigate(['product']);
    };
    ProductSingleComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
    ]; };
    ProductSingleComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-product-single',
            template: __webpack_require__(/*! raw-loader!./product-single.component.html */ "./node_modules/raw-loader/index.js!./src/app/modules/product/views/product-single/product-single.component.html"),
            styles: [__webpack_require__(/*! ./product-single.component.css */ "./src/app/modules/product/views/product-single/product-single.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], ProductSingleComponent);
    return ProductSingleComponent;
}());



/***/ }),

/***/ "./src/app/modules/product/views/product/product.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/modules/product/views/product/product.component.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".product-add {\r\n  position: fixed;\r\n  right: 2%;\r\n  bottom: 4%;\r\n}\r\n\r\n/* app-product {\r\n  display: flex;\r\n  flex-direction: column;\r\n  height: 100%;\r\n} */\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9wcm9kdWN0L3ZpZXdzL3Byb2R1Y3QvcHJvZHVjdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZUFBZTtFQUNmLFNBQVM7RUFDVCxVQUFVO0FBQ1o7O0FBRUE7Ozs7R0FJRyIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvcHJvZHVjdC92aWV3cy9wcm9kdWN0L3Byb2R1Y3QuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wcm9kdWN0LWFkZCB7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIHJpZ2h0OiAyJTtcclxuICBib3R0b206IDQlO1xyXG59XHJcblxyXG4vKiBhcHAtcHJvZHVjdCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGhlaWdodDogMTAwJTtcclxufSAqL1xyXG4iXX0= */"

/***/ }),

/***/ "./src/app/modules/product/views/product/product.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/modules/product/views/product/product.component.ts ***!
  \********************************************************************/
/*! exports provided: ProductComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductComponent", function() { return ProductComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm5/dialog.es5.js");
/* harmony import */ var _components_product_add_product_add_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/product-add/product-add.component */ "./src/app/modules/product/components/product-add/product-add.component.ts");
/* harmony import */ var app_services_evenet_emmiter_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/services/evenet-emmiter.service */ "./src/app/services/evenet-emmiter.service.ts");






var ProductComponent = /** @class */ (function () {
    function ProductComponent(store, evenetEmmiterService, dialog) {
        this.store = store;
        this.evenetEmmiterService = evenetEmmiterService;
        this.dialog = dialog;
        this.isMoreOpen = false;
        this.products = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["select"])('products'));
    }
    ProductComponent.prototype.openDialog = function () {
        var dialogConfig = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialogConfig"]();
        dialogConfig.panelClass = 'add-product-modal';
        var dialogRef = this.dialog.open(_components_product_add_product_add_component__WEBPACK_IMPORTED_MODULE_4__["ProductAddComponent"], {
            // width: '100%',
            // panelClass: 'add-product-modal',
            backdropClass: 'add-product-modal-wrapper'
            // data: {name: this.name, animal: this.animal}
        });
        dialogRef.afterClosed().subscribe(function (result) {
            console.log('The dialog was closed');
        });
    };
    ProductComponent.prototype.openMore = function () {
        this.isMoreOpen = !this.isMoreOpen;
    };
    ProductComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subscription = this.evenetEmmiterService.addProductEvent.subscribe(function (event) {
            _this.openDialog();
        });
    };
    ProductComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    ProductComponent.ctorParameters = function () { return [
        { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"] },
        { type: app_services_evenet_emmiter_service__WEBPACK_IMPORTED_MODULE_5__["EvenetEmmiterService"] },
        { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialog"] }
    ]; };
    ProductComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-product',
            template: __webpack_require__(/*! raw-loader!./product.component.html */ "./node_modules/raw-loader/index.js!./src/app/modules/product/views/product/product.component.html"),
            styles: [__webpack_require__(/*! ./product.component.css */ "./src/app/modules/product/views/product/product.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"],
            app_services_evenet_emmiter_service__WEBPACK_IMPORTED_MODULE_5__["EvenetEmmiterService"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialog"]])
    ], ProductComponent);
    return ProductComponent;
}());



/***/ }),

/***/ "./src/app/services/evenet-emmiter.service.ts":
/*!****************************************************!*\
  !*** ./src/app/services/evenet-emmiter.service.ts ***!
  \****************************************************/
/*! exports provided: EvenetEmmiterService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EvenetEmmiterService", function() { return EvenetEmmiterService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var EvenetEmmiterService = /** @class */ (function () {
    function EvenetEmmiterService() {
        this.addProductEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    EvenetEmmiterService.prototype.addProduct = function () {
        this.addProductEvent.emit();
    };
    EvenetEmmiterService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], EvenetEmmiterService);
    return EvenetEmmiterService;
}());



/***/ }),

/***/ "./src/app/views/home/home.component.css":
/*!***********************************************!*\
  !*** ./src/app/views/home/home.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/views/home/home.component.ts":
/*!**********************************************!*\
  !*** ./src/app/views/home/home.component.ts ***!
  \**********************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () { };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/index.js!./src/app/views/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/views/home/home.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/views/settings/settings.component.css":
/*!*******************************************************!*\
  !*** ./src/app/views/settings/settings.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3NldHRpbmdzL3NldHRpbmdzLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/views/settings/settings.component.ts":
/*!******************************************************!*\
  !*** ./src/app/views/settings/settings.component.ts ***!
  \******************************************************/
/*! exports provided: SettingsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsComponent", function() { return SettingsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SettingsComponent = /** @class */ (function () {
    function SettingsComponent() {
    }
    SettingsComponent.prototype.ngOnInit = function () {
    };
    SettingsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-settings',
            template: __webpack_require__(/*! raw-loader!./settings.component.html */ "./node_modules/raw-loader/index.js!./src/app/views/settings/settings.component.html"),
            styles: [__webpack_require__(/*! ./settings.component.css */ "./src/app/views/settings/settings.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], SettingsComponent);
    return SettingsComponent;
}());



/***/ }),

/***/ "./src/app/views/stock/stock.component.css":
/*!*************************************************!*\
  !*** ./src/app/views/stock/stock.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3N0b2NrL3N0b2NrLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/views/stock/stock.component.ts":
/*!************************************************!*\
  !*** ./src/app/views/stock/stock.component.ts ***!
  \************************************************/
/*! exports provided: StockComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StockComponent", function() { return StockComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var StockComponent = /** @class */ (function () {
    function StockComponent() {
    }
    StockComponent.prototype.ngOnInit = function () {
    };
    StockComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-stock',
            template: __webpack_require__(/*! raw-loader!./stock.component.html */ "./node_modules/raw-loader/index.js!./src/app/views/stock/stock.component.html"),
            styles: [__webpack_require__(/*! ./stock.component.css */ "./src/app/views/stock/stock.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], StockComponent);
    return StockComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Test\Documents\home-manager\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map