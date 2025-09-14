fetch("data.json")
  .then(res => res.json())
  .then(data => {
    const summaryList = document.getElementById("summary-list");

    data.forEach(item => {
      const row = document.createElement("div");
      row.classList.add("summary-row", item.category.toLowerCase());
      
  
      row.setAttribute("tabindex", "0");

      row.innerHTML = `
        <div class="left">
          <div class="icon">${item.icon}</div>
          <span>${item.category}</span>
        </div>
        <span class="score">${item.score} / 100</span>
      `;

      summaryList.appendChild(row);
    });
  })
  .catch(err => console.error("Error loading JSON:", err));


