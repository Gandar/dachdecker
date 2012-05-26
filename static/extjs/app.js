Ext.onReady(function(){
    Ext.create('Ext.window.Window',{
	height : "300px",
	width : "200px",
	autoShow : true,
	title : 'Testfenster',
	headerPosition : 'left',
	collapsible : true,
	dockedItems : [
	    {
		xtype : 'toolbar',
		dock : 'bottom',
		items : [
		    {
//			scope : this,
			text : 'schließen',
			handler : function(){
//			    this.up('window').hide();
			}
		    }
		]
	    }
	]
    });
});