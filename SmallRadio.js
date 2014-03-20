Ext.define('Ext.field.SmallRadio', {
    extend: 'Ext.field.Radio',
    xtype: 'small-radiofield',
    config: {
        component: {
            type: 'radio',
            cls: Ext.baseCSSPrefix + 'field-small-radio'
        }
    }
});
