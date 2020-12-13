export let amount = [ {
  name: "50qm",
  value: "50",
  id: 0,
},
{
  name: "150qm",
  value: "150",
  id: 1,
},
{
  name: "400qm",
  value: "400",
  id: 3,
},
{
  name: "70lfm",
  value: "70",
  id: 4,
},
]


export let woodSizes = [ {
  name: "22mm",
  value: "22",
  id: 0,
  options: [amount[0], amount[1], amount[2], amount[3]]
},
{
  name: "19mm",
  value: "19",
  unit: 'mm',
  id: 1,
},
{
  name: "98g/qm",
  
  value: "98",
  id: 2,
},
{
  name: "60mm/80mm",
  value: "60",
  id: 3,
},
]
 

export let woodOptions = [ {
  name: "MDF",
  id: 0,
  options: [woodSizes[0], woodSizes[1], woodSizes[2], woodSizes[3]]
},
{
  name: "Seekiefernplatte",
  id: 1,
  
},
{
  name: "MesseRipsTeppich",
  id: 2,
},
{
  name: "KVH",
  id: 3,
},
]

export let stoffOptions = [ {
  name: "Stoff 1",
  id: 0,
  options: [woodSizes[0], woodSizes[1], woodSizes[2], woodSizes[3]]
},
{
  name:"Stoff 2",
  id: 1,
  
},
{
  name: "Stoff 3",
  id: 2,
},
{
  name: "Stoff 4",
  id: 3,
},
]

export let art = [
  {
    name: "Holz",
    id: 0,
    options: [woodOptions[0], woodOptions[1]],
  },
  {
    name: "Stoff",
    id: 1,
    options: [stoffOptions[0], stoffOptions[1], stoffOptions[2], stoffOptions[3]]
  },
  {
    name: "Whatever",
    id: 2,
    options: [woodOptions[0], woodOptions[1]],
  },
];
