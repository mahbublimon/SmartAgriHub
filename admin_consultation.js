const consultants = [
  {
    name: "Dr. Rezaul Karim",
    specialty: "Crop Consultant",
    category: "Rice, Jute",
    phone: "01711-110011",
    tip: "Plant jute mid-March to mid-April.",
    disease: "Yellow Leaf Blight",
    cure: "Use copper-based fungicide. Ensure field drainage.",
    photo: "https://via.placeholder.com/300x200?text=Rezaul"
  },
  {
    name: "Dr. Sonia Akter",
    specialty: "Livestock Expert",
    category: "Meat, Eggs",
    phone: "01822-220033",
    tip: "Vaccinate poultry in early winter.",
    disease: "Avian Influenza",
    cure: "Immediate isolation and vet consultation.",
    photo: "https://via.placeholder.com/300x200?text=Sonia"
  }
];

function renderConsultants() {
  const container = document.getElementById('consultant-list');
  container.innerHTML = "";

  consultants.forEach((c, index) => {
    const card = `
      <div class="col-md-6 col-lg-4 mb-4">
        <div class="card card-consultant h-100">
          <img src="${c.photo}" class="consultant-photo" alt="${c.name}" />
          <div class="card-body">
            <h5 class="card-title">${c.name}</h5>
            <p class="card-text"><strong>Specialty:</strong> ${c.specialty}</p>
            <p class="card-text"><strong>Category:</strong> ${c.category}</p>
            <p class="card-text"><strong>Phone:</strong> ${c.phone}</p>
            <p class="card-text"><strong>🌱 Tip:</strong><br><small>${c.tip}</small></p>
            <p class="card-text"><strong>🦠 Common Issue:</strong> ${c.disease}</p>
            <p class="card-text"><strong>💊 Cure Advice:</strong> ${c.cure}</p>
            <button class="btn btn-danger btn-sm mt-2" onclick="deleteConsultant(${index})">🗑️ Delete</button>
          </div>
        </div>
      </div>
    `;
    container.insertAdjacentHTML('beforeend', card);
  });
}

function addConsultant() {
  const name = prompt("Consultant name:");
  const specialty = prompt("Specialty (e.g., Crop Consultant, Livestock Expert):");
  const category = prompt("Category (e.g., Rice, Wheat, Meat, Eggs):");
  const phone = prompt("Phone:");
  const tip = prompt("General planting or management tip:");
  const disease = prompt("Common issue handled:");
  const cure = prompt("Suggested solution:");
  const photo = prompt("Photo URL (optional):") || "https://via.placeholder.com/300x200?text=New";

  if (name && specialty && phone && category) {
    consultants.push({ name, specialty, category, phone, tip, disease, cure, photo });
    renderConsultants();
  }
}

function deleteConsultant(index) {
  if (confirm("Delete this consultant?")) {
    consultants.splice(index, 1);
    renderConsultants();
  }
}

// Initialize
renderConsultants();
