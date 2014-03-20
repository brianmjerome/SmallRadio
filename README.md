SmallRadio
==========

**Class:** Ext.field.SmallRadio<br>
**Author:** Brian Jerome<br>
**Version:** 1.0<br>

Ext.field.Radio extension for Sencha Touch 2.3.x

This subclass allows for a smaller radio mask. The initial request for this follows on the forum post:
http://www.sencha.com/forum/showthread.php?282861-Resize-radiofield-bullet

This class is fully customizable and open-source as long as this work is credited.

You can view a **Demo** fiddle at: https://fiddle.sencha.com/#fiddle/4dg

Examples
================
### SmallRadio Field
You can create a simple small-radio field with this code:
```javascript
Ext.create('Ext.form.Panel', {
    fullscreen: true,
    items: [
        {
            xtype: 'small-radiofield', 
            name : 'color',
            value: 'red',
            label: 'Red',
            checked: true
        },
        {
            xtype: 'radiofield',
            name : 'color',
            value: 'green',
            label: 'Green'
        },
        {
            xtype: 'small-radiofield',
            name : 'color',
            value: 'blue',
            label: 'Blue'
        }
    ]
});
```


Installation
================
Copy the SmallRadio.js and small-radio.css into your working project directory following your project's architecture.
