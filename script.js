let myLeads = [];
const ulEl = document.querySelector("#ul-el");
const tabBtn = document.querySelector("#tab-btn");
const leadsFromLocalStorsge = JSON.parse(localStorage.getItem("myLeads"));

if (leadsFromLocalStorsge) {
  myLeads = leadsFromLocalStorsge;
  render(myLeads);
}

tabBtn.addEventListener("click", function () {
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    myLeads.push(tabs[0].url);
    localStorage.setItem("myLeads", JSON.stringify(myLeads));
    render(myLeads);
  });
});

function render(leads) {
  let listItems = "";
  for (let i = 0; i < leads.length; i++) {
    listItems += `
        <li>
        <a target='_blank' href='${leads[i]}'>
        ${leads[i]}
        </a>
        </li>`;
    console.log(listItems);
  }
  ulEl.innerHTML = listItems;
}










