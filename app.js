Ext.application({
	id: 'SdbNavigator',
	name: 'SdbNavigator',
	controllers: ['DomainTree', 'SdbData', 'Settings'],
	launch: function() {
		Ext.state.Manager.setProvider(Ext.create('Ext.state.CookieProvider'));
		Ext.create('Ext.container.Viewport', {
			layout: 'border',
			items: [
				Ext.create('SdbNavigator.view.SettingsPanel'),
				{
					xtype: 'panel',
					region: 'center',
					layout: 'border',
					items: [
						Ext.create('SdbNavigator.view.domain.TreePanel'),
						Ext.create('SdbNavigator.view.SdbDataPanel')
					]
				}
			]
		});
	}
});

