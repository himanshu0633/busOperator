export const buses = [
  { id:1, name:'Shivneri Express', reg:'MH-01-AB-1234', type:'AC Sleeper', seats:40, load:82, status:'Active' },
  { id:2, name:'Neeta Gold', reg:'MH-01-CD-5678', type:'AC Semi-Sleeper', seats:36, load:75, status:'Active' },
  { id:3, name:'Night Rider', reg:'MH-02-EF-9012', type:'Non-AC Sleeper', seats:42, load:0, status:'Maintenance' },
  { id:4, name:'City Connect', reg:'MH-03-GH-3456', type:'AC Seater', seats:45, load:90, status:'Active' },
];
export const staff = [
  { id:1, name:'Sanjay Patil', code:'MEM001', role:'Driver', phone:'+91 98221 12233', status:'Available', trips:142 },
  { id:2, name:'Ramesh Pawar', code:'MEM002', role:'Driver', phone:'+91 98221 44556', status:'On Trip', trips:89 },
  { id:3, name:'Dilip Mane', code:'MEM003', role:'Conductor', phone:'+91 98221 77889', status:'Available', trips:210 },
  { id:4, name:'Vijay Shinde', code:'MEM004', role:'Conductor', phone:'+91 98221 00998', status:'Off Duty', trips:156 },
];
export const routes = [
  { id:1, from:'Mumbai', to:'Pune', meta:'148 km · 3h 30m', stops:4, daily:12, status:'Active' },
  { id:2, from:'Mumbai', to:'Nashik', meta:'167 km · 4h', stops:3, daily:8, status:'Active' },
  { id:3, from:'Pune', to:'Kolhapur', meta:'234 km · 5h', stops:5, daily:6, status:'Active' },
  { id:4, from:'Mumbai', to:'Goa', meta:'590 km · 12h', stops:7, daily:2, status:'Inactive' },
];
export const trips = [
  { id:1, bus:'Shivneri Express', route:'Mumbai → Pune', date:'15 Apr', time:'22:00', fare:'₹850', type:'Recurring' },
  { id:2, bus:'Neeta Gold', route:'Mumbai → Nashik', date:'15 Apr', time:'21:30', fare:'₹700', type:'One-time' },
  { id:3, bus:'City Connect', route:'Pune → Kolhapur', date:'16 Apr', time:'06:00', fare:'₹550', type:'Recurring' },
];
