var a = "__app", b = "__method", c = "base.Application";
qx.registry = {
    registerMainMethod: function (d) {
        qx.registry[b] = d;
        var e = qx.registry[a];
        if (e)d(e);
    }, registerApp: function (f) {
        qx.registry[a] = f;
        var g = qx.registry[b];
        if (g)g(f);
    }
};


/* ************************************************************************

 Copyright:

 License:

 Authors:

 ************************************************************************ */

/**
 * This is the main application class of your custom application "base"
 *
 * @asset(base/*)
 */
qx.Class.define("base.Application",
    {
        extend: qx.application.Standalone,


        /*
         *****************************************************************************
         MEMBERS
         *****************************************************************************
         */

        members: {
            /**
             * This method contains the initial application code and gets called
             * during startup of the application
             *
             * @lint ignoreDeprecated(alert)
             */
            main: function () {
                // Call super class
                this.base(arguments);
                qx.registry.registerApp(this);
            },

            libs: [
                qx.ui.basic.Label,
                qx.ui.form.Button,
                qx.ui.layout.Basic,
                qx.ui.layout.Dock,
                qx.ui.window.Window
            ]
        }
    });
