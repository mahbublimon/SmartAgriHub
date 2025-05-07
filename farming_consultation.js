const consultants = [
  {
    name: "Dr. Rezaul Karim",
    specialty: "Crop Consultant",
    category: "Rice, Jute",
    phone: "01711-110011",
    tip: "Plant jute from mid-March to mid-April.",
    disease: "Yellow Leaf Blight",
    cure: "Use copper-based fungicide. Maintain drainage.",
    photo: "https://via.placeholder.com/300x200?text=Rezaul"
  },
  {
    name: "Dr. Sonia Akter",
    specialty: "Livestock Expert",
    category: "Meat, Eggs",
    phone: "01822-220033",
    tip: "Vaccinate poultry before winter starts.",
    disease: "Avian Influenza",
    cure: "Isolate affected birds. Consult a vet immediately.",
    photo: "https://via.placeholder.com/300x200?text=Sonia"
  }
];

function renderConsultants() {
  const container = document.getElementById('consultant-list');
  container.innerHTML = "";

  consultants.forEach((c) => {
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
            <button class="btn btn-outline-success btn-sm mt-2">📅 Book Appointment</button>
            <button class="btn btn-outline-primary btn-sm mt-2">📞 Call</button>
          </div>
        </div>
      </div>
    `;
    container.insertAdjacentHTML('beforeend', card);
  });
}

renderConsultants();
