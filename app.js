const goals = [
  {id:'muscles', title:'Muscles & bones', text:'Magnesium in its many forms, plus vitamin D and calcium. Which form suits whom.', icon:'🦴'},
  {id:'energy', title:'Energy & fatigue', text:'B vitamins, iron and magnesium. An honest take on who genuinely benefits.', icon:'🔋'},
  {id:'immune', title:'Immune system', text:'Zinc, vitamin C and selenium. No miracle promises, just what studies show.', icon:'🛡️'},
  {id:'heart', title:'Heart & circulation', text:'Omega-3 from fish and algae oil, with EPA and DHA per daily dose.', icon:'🫀'},
  {id:'skin', title:'Skin, hair & nails', text:'Biotin, zinc and selenium. Where research stays quiet, we say so.', icon:'✨'},
  {id:'nerves', title:'Nerves & focus', text:'B vitamins and magnesium for the weeks when everything piles up.', icon:'🧠'}
];
const products = [
  ['muscles','Magnesium glycinate','45,59 €','💊','-18 %'],['immune','Vitamin D3 2000 I.E.','11,70 €','☀️','-22 %'],['muscles','Magnesium 400 capsules','22,04 €','🧴','-14 %'],['heart','Omega-3 capsules','25,48 €','🐟','-12 %'],['energy','Vitamin B Complex','31,73 €','⚡','-19 %'],['immune','Vitamin C + Zinc','14,90 €','🍊','-15 %'],['nerves','Magnesium citrate','17,90 €','💜','-16 %'],['skin','Biotin capsules','12,40 €','🌿','-11 %']
];
let activeGoal = null;
const goalContainer = document.querySelector('#goals');
const chipContainer = document.querySelector('#chips');
const productRail = document.querySelector('#products');
function render(){
  goalContainer.innerHTML = goals.map(g => `<button class="goal ${activeGoal===g.id?'active':''}" data-goal="${g.id}"><span><strong>${g.title}</strong><p>${g.text}</p></span><span class="icon">${g.icon}</span></button>`).join('');
  chipContainer.innerHTML = goals.map(g => `<button class="${activeGoal===g.id?'active':''}" data-goal="${g.id}">${g.title}</button>`).join('');
  const shown = activeGoal ? products.filter(p=>p[0]===activeGoal) : products;
  productRail.innerHTML = shown.map(p => `<article class="product"><div class="product-image"><span class="discount">${p[4]}</span>${p[3]}</div><h3>${p[1]}</h3><p>Food supplement · 60 capsules</p><p class="price">${p[2]}</p></article>`).join('');
  document.querySelector('.clear').hidden = !activeGoal;
}
function selectGoal(id){activeGoal = activeGoal === id ? null : id;render();}
document.addEventListener('click', e => {const el=e.target.closest('[data-goal]');if(el) selectGoal(el.dataset.goal); const arrow=e.target.closest('[data-rail]');if(arrow) document.querySelector('#'+arrow.dataset.rail).scrollBy({left:+arrow.dataset.direction*360,behavior:'smooth'}); if(e.target.closest('.clear')){activeGoal=null;render();}});
render();
