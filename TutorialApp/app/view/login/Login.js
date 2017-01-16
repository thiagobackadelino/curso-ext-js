/**
 * Demonstrates usage of a fit layout.
 */
Ext.define('TutorialApp.view.login.Login', {
    extend: 'Ext.panel.Panel',
    requires: [
        'Ext.plugin.Viewport',
        'Ext.layout.container.Fit',
        'TutorialApp.view.login.LoginController'

    ],

    xtype: 'layout-fit',
    controller: 'login',

    title: 'Login',
    frame: true,
    width: 320,
    bodyPadding: 10,

    defaultType: 'textfield',

    items: [{
        allowBlank: false,
        fieldLabel: 'Usuario',
        name: 'usuario',
        emptyText: ''
    }, {
        allowBlank: false,
        fieldLabel: 'Senha',
        name: 'senha',
        emptyText: '',
        inputType: 'password'
    }, {
        xtype: 'checkbox',
        fieldLabel: 'Lembre me',
        name: 'lembreme'
    }],

    buttons: [
        { text: 'Cadastro' },
        {
            text: 'Login',
            formBind: true,
            listeners: {
                click: 'onLoginClick'
            }
        }
    ],

    defaults: {
        anchor: '100%',
        labelWidth: 120
    }
});