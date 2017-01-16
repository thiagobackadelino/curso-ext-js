/**
 * Panel headers can be docked to any side of the panel.  This example demonstrates how
 * to dynamically change the position of a panel header by binding the headerPosition
 * config to the value of a segmented button.
 */ 
Ext.define('TutorialApp.view.dashboard.DashBoard', {
    extend: 'Ext.container.Container',
    xtype: 'app-dashboard',
    cls: 'app-dashboard',

    width: 480,
    layout: {
        type: 'table',
        columns: 2,
        tdAttrs: { style: 'padding: 10px;' }
    },

    defaults: {
        xtype: 'panel',
        height: 220,
        width: 220,
        bodyPadding: 10
    },

    items: [{
        title: 'Top',
        xtype: 'panel',
        html: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',

        dockedItems: [{
            xtype: 'toolbar',
            dock: 'top',

            items: [{
                iconCls: null,
                glyph: 61,
                xtype: 'button'
            }, '-', {
                iconCls: null,
                glyph: 88,
                xtype: 'button'
            }, {
                iconCls: null,
                glyph: 70,
                xtype: 'button'
            }, '-', {
                iconCls: null,
                glyph: 47,
                xtype: 'button'
            }]
        }]
    }, {
        title: 'Right',
        xtype: 'panel',
        html: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',

        dockedItems: [{
            xtype: 'toolbar',
            dock: 'right',

            items: [{
                iconCls: null,
                glyph: 61,
                xtype: 'button'
            }, '-', {
                iconCls: null,
                glyph: 88,
                xtype: 'button'
            }, {
                iconCls: null,
                glyph: 70,
                xtype: 'button'
            }, '-', {
                iconCls: null,
                glyph: 47,
                xtype: 'button'
            }]
        }]
    }, {
        title: 'Left',
        xtype: 'panel',
        html: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',

        dockedItems: [{
            xtype: 'toolbar',
            dock: 'left',

            items: [{
                iconCls: null,
                glyph: 61,
                xtype: 'button'
            }, '-', {
                iconCls: null,
                glyph: 88,
                xtype: 'button'
            }, {
                iconCls: null,
                glyph: 70,
                xtype: 'button'
            }, '-', {
                iconCls: null,
                glyph: 47,
                xtype: 'button'
            }]
        }]
    }, {
        title: 'Bottom',
        xtype: 'panel',
        html: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',

        dockedItems: [{
            xtype: 'toolbar',
            dock: 'bottom',

            items: [{
                iconCls: null,
                glyph: 61,
                xtype: 'button'
            }, '-', {
                iconCls: null,
                glyph: 88,
                xtype: 'button'
            }, {
                iconCls: null,
                glyph: 70,
                xtype: 'button'
            }, '-', {
                iconCls: null,
                glyph: 47,
                xtype: 'button'
            }]
        }]
    }]
});