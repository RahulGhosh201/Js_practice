const actors=[
	{name: 'johny' , networth:10000},
	{name: 'amber' , networth:10},
	{name: 'leonardo' , networth:100000000}
]
let ressult=actors.filter(actor=>actor.networth>10)
dom.innerHTML=`<h1>${ressult[0].name}</h1>`