/**
 * This example shows how to create basic panels. Panels typically have a header and a body,
 * although the header is optional. The panel header can contain a title, and icon, and
 * one or more tools for performing specific actions when clicked.
 */
Ext.define('TutorialApp.view.home.Home', {
    extend: 'Ext.Container',
    xtype: 'app-home',

    requires: [
        'Ext.layout.container.Table'
    ],

    width: 660,
    layout: {
        type: 'table',
        columns: 3,
        tdAttrs: { style: 'padding: 10px; vertical-align: top;' }
    },

    defaults: {
        xtype: 'panel',
        width: 200,
        height: 280,
        bodyPadding: 10
    },

    items: [{
        html: ''
    },
    {
        title: 'Built in Tools',
        collapsed: true,
        collapsible: false,
        width: 640,
        html: '',
        tools: [
            { type: 'pin' },
            { type: 'refresh' },
            { type: 'search' },
            { type: 'save' }
        ],
        colspan: 3
    }]
});